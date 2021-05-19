from django.contrib import admin
from .models import Plan

# Register your models here.

@admin.register(Plan)
class PlanModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'item']
