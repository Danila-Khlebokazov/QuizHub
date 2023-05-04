from django.contrib.auth.models import User
from api.serializers import RegisterSerializer, QuizSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from api.models import Quiz

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class UserInfoView(APIView):
    def get(self, request, user):
        u = User.objects.get(username=user)
        return Response({
            "username": u.username,
            "firstname": u.first_name,
            "lastname": u.last_name
        })

class OwnInfoView(APIView):
    def get(self, request):
        return Response({
            "username": self.request.user.username,
            "first_name": self.request.user.first_name,
            "last_name": self.request.user.last_name
        })


class OwnQuizzesView(generics.ListCreateAPIView):
    serializer_class = QuizSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.kwargs["user"]
        return Quiz.objects.filter(user=User.objects.get(username=user))
