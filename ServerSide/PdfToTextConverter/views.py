from distutils.sysconfig import get_config_h_filename
from email.headerregistry import ContentDispositionHeader
from fileinput import filename
from smtpd import DebuggingServer
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from . pdfToTextFile import get_file, read_pdf, convert_to_text
from django.http import HttpResponse
from django.core.files.storage import FileSystemStorage
import os
# Create your views here.
fileSavePath = './ProcessedFiles/'

@csrf_exempt
def pdfToText(request):
    rootDirFileList = os.listdir(fileSavePath)
    for file in rootDirFileList:
      os.remove(fileSavePath + file)
    if request.method == 'POST':
       fileObj = request.FILES['file']
       fs = FileSystemStorage()
       fs.save(fileSavePath + fileObj.name,fileObj)
       filename =  get_file(fileSavePath+fileObj.name)
       with open(fileSavePath + filename) as f:
         fileData = f.read()
       response = HttpResponse(fileData, content_type='application/octet-stream')
       response.headers['Content-Disposition'] = f'attachment; filename={filename}'
       response['Access-Control-Expose-Headers'] = 'Content-Disposition'
       return response


      



