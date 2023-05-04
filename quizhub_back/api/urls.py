from django.urls import path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView

from api import views

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('register/', views.RegisterView.as_view()),
    path('quizzes/', views.quiz_list),
    path('quizzes/<int:quiz_id>/', views.quiz_by_id),
    path('me/', views.OwnInfoView.as_view()),
    path('<str:user>/quizzes/', views.OwnQuizzesView.as_view()),
    path('<str:user>/', views.UserInfoView.as_view()),
    # path('quizzes/<int:quiz_id>/questions/', views.question_by_quiz),
    # path('quizzes/<int:quiz_id>/questions/<int:question_id>/', views.question_by_quiz),
    # path('quizzes/<int:quiz_id>/questions/<int:question_id>/answers/', views.question_by_quiz),
    # path('quizzes/<int:quiz_id>/questions/<int:question_id>/answers/<int:answer_id>/', views.question_by_quiz),
    # path('quizzes/<int:quiz_id>/results/', views.question_by_quiz),
    # path('quizzes/<int:quiz_id>/results/<int:result_id>', views.question_by_quiz),
]