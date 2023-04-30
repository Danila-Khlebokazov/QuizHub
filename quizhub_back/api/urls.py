from django.urls import path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView

from api import views

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('quizzes/', views.quiz_list),
    path('quizzes/<int:quiz_id>/', views.quiz_by_id)
]