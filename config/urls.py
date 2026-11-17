from django.urls import path
from core.views import index, health

urlpatterns = [
    path('', index, name='index'),
    path('health/', health, name='health'),
]
