from django.urls import path
from . import views

urlpatterns = [
    
  path('getMatchingWordsByKey',views.getMatchingWordsByKey, name='getMatchingWordsByKey')
]
