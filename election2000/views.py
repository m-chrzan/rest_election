from django.shortcuts import render
from django.http import JsonResponse
from election2000.regions import (
        CountryRegion, VoivodeshipRegion, DistrictRegion, GminaRegion
        )
from election2000.serializers import RegionSerializer

def index(request):
    return render(request, 'base.html', {})

def country(request):
    region = CountryRegion()
    return render_json_region(region)

def voivodeship(request, voivodeship):
    region = VoivodeshipRegion(voivodeship)
    return render_json_region(region)

def district(request, voivodeship, district):
    region = DistrictRegion(district)
    return render_json_region(region)

def gmina(request, voivodeship, district, gmina):
    region = GminaRegion(gmina, district)
    return render_json_region(region)

def render_json_region(region):
    return JsonResponse(RegionSerializer(region).data)
