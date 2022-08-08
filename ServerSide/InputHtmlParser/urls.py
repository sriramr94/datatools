from django import views
from django.urls import path
from . import views
urlpatterns = [
    path('parseHtml',views.parseHtml,name="parseHtml"),
    path('parseUrlInput',views.parseHtmlByUrl,name="parseUrlInput"),
    path('ParseHtmlFile',views.parseHtmlByFile,name="parseHtmlFile")
]
