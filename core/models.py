from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Room(models.Model):
    name = models.CharField(max_length=64)


class Message(models.Model):
    room = models.ForeignKey("Room", on_delete=models.CASCADE)
    text = models.TextField()
