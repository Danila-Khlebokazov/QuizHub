from api.models import *
from rest_framework import serializers
import base64

from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import PermissionDenied

class Base64ImageField(serializers.ImageField):
    """
    A Django REST framework field for handling image-uploads through raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class ResultSerializer(serializers.Serializer):
    result = serializers.CharField()
    description = serializers.CharField()
    image = Base64ImageField(max_length=None, use_url=True, required=False)
    points = serializers.IntegerField()

    def create(self, validated_data):
        result = ResultField.objects.create(**validated_data)
        return result

    def update(self, instance, validated_data):
        instance.result = validated_data.get('result', instance.result)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.points = validated_data.get('points', instance.points)
        instance.save()
        return instance

class AnswerSerializer(serializers.Serializer):
    title = serializers.CharField()
    points = serializers.IntegerField()
    def create(self, validated_data):
        answer = Answer.objects.create(**validated_data)
        return answer

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.points = validated_data.get('points', instance.points)
        instance.save()
        return instance

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    image = Base64ImageField(max_length=None, use_url=True, required=False)
    class Meta:
        model = Question
        fields = ("id", "question", "image", "answers")

class QuizSerializer(serializers.ModelSerializer):
    image = Base64ImageField(max_length=None, use_url=True, required=False)
    questions = QuestionSerializer(many=True)
    results = ResultSerializer(many=True)
    class Meta:
        model = Quiz
        fields = ("id", "title", "description", "image", "questions", "rating", "results")

    def create(self, validated_data):
        questions_data = validated_data.pop('questions')
        results_data = validated_data.pop("results")
        quiz = Quiz.objects.create(**validated_data)
        for q_data in questions_data:
            answers_data = q_data.pop('answers')
            question = Question.objects.create(quiz=quiz, **q_data)
            for a_data in answers_data:
                Answer.objects.create(question=question, **a_data)
        for r_data in results_data:
            ResultField.objects.create(quiz=quiz, **r_data)
        return quiz

    def perform_update(self, serializer):
        obj = self.get_object()
        if self.request.user != obj.created_by:  # Or how ever you validate
            raise PermissionDenied('User is not allowed to modify listing')

        serializer.save()

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.image = validated_data.get('image', instance.image)

        # update questions
        questions_data = validated_data.get('questions', instance.questions)
        instance.questions.all().delete()
        for q_data in questions_data:
            answers_data = q_data.pop('answers')
            question = Question.objects.create(quiz=instance, **q_data)
            for a_data in answers_data:
                Answer.objects.create(question=question, **a_data)

        # update results
        results_data = validated_data.get('results', instance.results)
        instance.results.all().delete()
        for r_data in results_data:
            instance.results.create(**r_data)

        instance.save()
        return instance




# class QuizSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField()
#     description = serializers.CharField()
#     rating = serializers.IntegerField(required=False, default=0)
#     image = serializers.ImageField(required=False)
#
#     def create(self, validated_data):
#         quiz = Quiz.objects.create(**validated_data)
#         return quiz
#
#     def update(self, instance, validated_data):
#         instance.title = validated_data.get('title', instance.title)
#         instance.description = validated_data.get('description', instance.description)
#         instance.rating = validated_data.get('rating', instance.rating)
#         instance.image = validated_data.get('image', instance.image)
#         instance.save()
#         return instance
#
#
# class QuestionSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     question = serializers.CharField()
#     image = serializers.ImageField(required=False)
#     def create(self, validated_data):
#         question = Question.objects.create(**validated_data)
#         return question
#
#     def update(self, instance, validated_data):
#         instance.question = validated_data.get("question", instance.question)
#         instance.image = validated_data.get("image", instance.image)
#         instance.save()
#         return instance
#
#
# class ResultFieldSerializer(serializers.ModelSerializer):
#     user = serializers.HiddenField(default=serializers.CurrentUserDefault())
#
#     class Meta:
#         model = ResultField
#         fields = ("id", 'result', 'description', )
#
#
# class AnswerSerializer(serializers.ModelSerializer):
#     user = serializers.HiddenField(default=serializers.CurrentUserDefault())
#
#     class Meta:
#         model = Answer
#         fields = ('id', 'title', 'points', 'question', 'user')
