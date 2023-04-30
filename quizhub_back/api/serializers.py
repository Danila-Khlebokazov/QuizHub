from api.models import *
from rest_framework import serializers


class QuizSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField()
    rating = serializers.IntegerField()
    image = serializers.ImageField(required=False)
    user = serializers.CurrentUserDefault()

    def create(self, validated_data):
        quiz = Quiz.objects.create(**validated_data)
        return quiz

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance


class QuestionSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    question = serializers.CharField()
    image = serializers.ImageField()
    quiz = QuizSerializer()

    def create(self, validated_data):
        question = Question.objects.create(**validated_data)
        return question

    def update(self, instance, validated_data):
        instance.question = validated_data.get("question", instance.question)
        instance.image = validated_data.get("image", instance.image)
        instance.save()
        return instance


class ResultFieldSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = ResultField


class AnswerSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Answer
        fields = ('id', 'title', 'points', 'question', 'user')