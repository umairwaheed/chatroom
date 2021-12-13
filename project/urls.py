from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from rest_framework import routers

from core import views

router = routers.DefaultRouter()
router.register("rooms", views.RoomViewSet)
router.register("messages", views.MessageViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path(
        "api/rooms/<str:room_pk>/messages/",
        views.RoomMessageViewSet.as_view(
            {
                "get": "list",
            }
        ),
    ),
]
