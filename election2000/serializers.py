from rest_framework import serializers

class RegionSerializer(serializers.Serializer):
    locative = serializers.CharField(max_length = 100)
    subregion_nominative = serializers.CharField(max_length = 100)
    subregions = serializers.ListField()
    votes = serializers.DictField()
    statistics = serializers.DictField()
    region_path = serializers.ListField()

class CircuitSerializer(serializers.Serializer):
    name = serializers.CharField(max_length = 100)
    turnout = serializers.FloatField()
    document = serializers.FileField()
