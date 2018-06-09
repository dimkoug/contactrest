from django.urls import path, include
from rest_framework import routers
from .viewsets import ContactViewSet


router = routers.DefaultRouter(trailing_slash=False)
router.register('contacts', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
