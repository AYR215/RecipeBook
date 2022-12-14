from sre_parse import CATEGORIES
from xml.parsers.expat import model
from django.db import models


class Recepies(models.Model):
    title = models.CharField(max_length=100, default="Some title")
    text = models.TextField(default="Some recipe")
    category = models.CharField(max_length=255, default="anycategory")
    pic = models.ImageField(u"initial_picture", blank=True, upload_to="images/")

    def __str__(self):
        return f'{self.title}'
