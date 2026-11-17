from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    response = render(request, 'index.html')
    response['Cache-Control'] = 'no-cache'
    return response


def health(request):
    return HttpResponse('ok', content_type='text/plain')
