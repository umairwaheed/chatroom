from core import models
from rest_framework import serializers


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Room
        fields = ['id', 'name']


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Message
        fields = ['id', 'room', 'text']
