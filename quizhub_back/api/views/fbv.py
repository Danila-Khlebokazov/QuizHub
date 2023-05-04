from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.models import Quiz, Question
from api.serializers import QuizSerializer, QuestionSerializer

@api_view(["GET", "POST"])
@permission_classes(IsAuthenticated)
def quiz_list(request):
    if request.method == "GET":
        quizzes = Quiz.objects.all()
        serializer = QuizSerializer(quizzes, many=True, context={"request": request})
        return Response(serializer.data)

    if request.method == "POST":
        serializer = QuizSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes(IsAuthenticated)
def quiz_by_id(request, quiz_id):
    try:
        quiz = Quiz.objects.get(id=quiz_id)
    except Quiz.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = QuizSerializer(quiz, context={"request": request})
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = QuizSerializer(instance=quiz, data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        quiz.delete()
        return Response({'deleted': True})