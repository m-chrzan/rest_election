from rest_framework import serializers

class CircuitSerializer(serializers.Serializer):
    name = serializers.CharField(max_length = 100)
    turnout = serializers.FloatField()
    document = serializers.FileField()
