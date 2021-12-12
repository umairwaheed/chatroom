from django.urls.conf import include
from core import views
from django.contrib import admin
from django.urls import path
from rest_framework import routers


router = routers.DefaultRouter()
router.register("rooms", views.RoomViewSet)
router.register("messages", views.MessageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
