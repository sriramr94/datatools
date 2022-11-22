from django.urls import path
from . import views


urlpatterns = [
    path('getRelatedArticlesByCount',views.getRelatedArticlesByCount,name ='getRelatedArticlesByCount')
]
