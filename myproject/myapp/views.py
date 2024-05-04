from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return render(request, 'index.html')
def about_us(request):
    return render(request, 'about-us.html')
def blog(request):
    return render(request, 'blog.html')
def contact(request):
    return render(request, 'contact.html')
def gallery(request):
    return render(request, 'gallery.html')
def main(request):
    return render(request, 'main.html')
def schedule(request):
    return render(request, 'schedule.html')
def blog_single(request):
    return render(request, 'blog-single.html')