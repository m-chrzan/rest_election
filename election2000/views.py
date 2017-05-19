from django.shortcuts import render, redirect
from django.http import JsonResponse
from election2000.regions import (
        CountryRegion, VoivodeshipRegion, DistrictRegion, GminaRegion
        )
from election2000.serializers import RegionSerializer
from election2000.forms import UserForm

from rest_framework.decorators import (
        api_view, authentication_classes, permission_classes
        )
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout

def index(request):
    return render(request, 'base.html', {})

@api_view()
def country(request):
    region = CountryRegion()
    return render_json_region(request, region)

@api_view()
def voivodeship(request, voivodeship):
    region = VoivodeshipRegion(voivodeship)
    return render_json_region(request, region)

@api_view()
def district(request, voivodeship, district):
    region = DistrictRegion(district)
    return render_json_region(request, region)

@api_view()
@authentication_classes((SessionAuthentication,))
@permission_classes((IsAuthenticated,))
def gmina(request, voivodeship, district, gmina):
    region = GminaRegion(gmina, district)
    return render_json_region(request, region)

def render_json_region(request, region):
    return Response({
        'region': RegionSerializer(region).data,
        'user': request.user.username
    })

def login_view(request):
    if request.method == "POST":
        print("POST")
        form = UserForm(request.POST)
        if form.is_valid():
            user = authenticate(**form.cleaned_data)
            if user is not None:
                login(request, user)
                return redirect('/index/')
    else:
        form = UserForm()

    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('/index/')
