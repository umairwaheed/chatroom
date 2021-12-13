from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Room(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Message(models.Model):
    room = models.ForeignKey("Room", on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return f"{self.room_id} - {self.text[:10]}"
