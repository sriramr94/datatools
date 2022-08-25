from django.urls import path
from . import views 

urlpatterns = [
    path('pdfToText', views.pdfToText ,name="pdfToText")
]
