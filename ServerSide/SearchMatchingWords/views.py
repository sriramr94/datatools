import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from . top_keywords import search_keyword

# Create your views here.
@csrf_exempt
def getMatchingWordsByKey(request):
    if request.method == "POST":
        return HttpResponse(json.dumps(search_keyword(str(request.body,'utf-8'))))

