from django.contrib import admin
from api.models import *

# Register your models here.

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'image' , 'rating' , 'user')


@admin.register(Question)
class QustionAdmin(admin.ModelAdmin):
    pass

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    pass

@admin.register(ResultField)
class ResultAdmin(admin.ModelAdmin):
    pass