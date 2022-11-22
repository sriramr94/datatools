import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .news_search import get_google_news_result


# Create your views here.
@csrf_exempt
def getRelatedArticlesByCount(request):
    if request.method == 'POST':
        requestBody = request.body.decode('utf-8')
        body = json.loads(requestBody)
        response = get_google_news_result(body['input'],+body['articleCount'])
        return HttpResponse(json.dumps(response))

