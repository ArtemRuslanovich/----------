from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return render(request, 'index.html')
def gallery(request):
    return render(request, 'gallery.html')
def schedule(request):
    return render(request, 'schedule.html')
