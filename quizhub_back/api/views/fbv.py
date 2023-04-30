from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Quiz
from api.serializers import QuizSerializer
from django.contrib.auth.decorators import permission_required


@api_view(['GET', "POST"])
def quiz_list(request):
    if request.method == "GET":
        quizzes = Quiz.objects.all()
        serializer = QuizSerializer(quizzes, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = QuizSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def quiz_by_id(request):
    pass