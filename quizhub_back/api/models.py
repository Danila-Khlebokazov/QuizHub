from django.db import models
from django.contrib.auth import get_user_model
from django.template.defaultfilters import slugify as d_slugify
import os

# Create your models here.
User = get_user_model()

alphabet = {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'i', 'э': 'e', 'ю': 'yu',
            'я': 'ya'}

def slugify(s):
    return d_slugify(''.join(alphabet.get(w, w) for w in s.lower()))

class Quiz(models.Model):
    def image_upload_to(self, instance=None):
        if instance:
            return os.path.join('QuizImages', slugify(self.title), instance)
        return None


    title = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.IntegerField()
    image = models.ImageField(default='default/no-image.png', upload_to=image_upload_to, max_length=255)
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
    def image_upload_to(self, instance=None):
        if instance:
            return os.path.join('QuizImages', slugify(self.quiz.title), instance)
        return None

    question = models.TextField()
    image = models.ImageField(default='default/no-image.png', upload_to=image_upload_to, max_length=255)
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
    def image_upload_to(self, instance=None):
        if instance:
            return os.path.join('QuizImages', slugify(self.quiz.title), instance)
        return None

    result = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(default='default/no-image.png', upload_to=image_upload_to, max_length=255)
    points = models.IntegerField()
    quiz = models.ForeignKey(Quiz,
                             on_delete=models.CASCADE,
                             related_name="results")

    def __str__(self):
        return f'{self.result} {self.description} {self.points}'


