import django_filters.rest_framework
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions

from recipes.serializers import *
from recipes.models import *


class RecipesViewset(viewsets.ModelViewSet):
    queryset = Recepies.objects.all()
    serializer_class = RecipesSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ["category"]
