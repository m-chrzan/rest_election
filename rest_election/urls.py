"""rest_election URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static

from rest_framework import serializers
from django.http import JsonResponse
from election2000 import views
from rest_election import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^index/$', views.index),
    url(r'^Polska/$', views.country),
    url(r'^Polska/(?P<voivodeship>(?:\w|-)+)/$', views.voivodeship),
    url(r'^Polska/(?P<voivodeship>(?:\w|-)+)/(?P<district>\d+)/$',
        views.district),
    url(r'^Polska/(?P<voivodeship>(?:\w|-)+)/(?P<district>\d+)/(?P<gmina>[^\/]+)/$',
        views.gmina),
]
