from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from InputHtmlParser.html_text_retreival import parse_html,url_request,html_request

# Create your views here.
@csrf_exempt
def parseHtml(request):
    if request.method == "POST": 
        requestData = request.body
        response = parse_html(requestData)
        return HttpResponse(response)

@csrf_exempt
def parseHtmlByUrl(request):
    if request.method == "POST":
        requestData =  request.body
        response = url_request(requestData)
        return HttpResponse(response)

@csrf_exempt
def parseHtmlByFile(request):
    if request.method == "POST":
        requestData = request.body
        response = html_request(requestData)
        return HttpResponse(response)