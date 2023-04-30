from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class Quiz(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.IntegerField()
    image = models.ImageField(blank=True)
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             null=True,
                             blank=True)
    class Meta:
        verbose_name = "Quiz"
        verbose_name_plural = "Quizzes"

    def __str__(self):
        return f'{self.title} {self.description}'

class Question(models.Model):
    question = models.TextField()
    image = models.ImageField(blank=True)
    quiz = models.ForeignKey(Quiz,
                             on_delete=models.CASCADE,
                             related_name="questions")

    def __str__(self):
        return f'{self.question} {self.image}'

class Answer(models.Model):
    title = models.CharField(max_length=255)
    points = models.IntegerField()
    question = models.ForeignKey(Question,
                                 on_delete=models.CASCADE,
                                 related_name="answers")

    class Meta:
        verbose_name = "Answer"
        verbose_name_plural = "Answers"
    def __str__(self):
        return f'{self.title} {self.points}'

class ResultField(models.Model):
    result = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(blank=True)
    points = models.IntegerField()
    quiz = models.ForeignKey(Quiz,
                             on_delete=models.CASCADE,
                             related_name="results")

    def __str__(self):
        return f'{self.result} {self.description} {self.points}'


