from django.urls import path
from .views import donate

urlpatterns = [
    path('api/donate', donate),
]
