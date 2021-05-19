from rest_framework import serializers
from .models import Plan

class PlanSerializers(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['id','item']