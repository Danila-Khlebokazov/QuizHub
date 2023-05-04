from api.models import *
from rest_framework import serializers

from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


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
    image = serializers.ImageField()
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
    class Meta:
        model = Question
        fields = ("id", "question", "image", "answers")

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    results = ResultSerializer(many=True)
    class Meta:
        model = Quiz
        fields = ("id", "title", "description", "image", "questions", "rating", "results")




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
