from django.shortcuts import render
from .models import React
from .serializer import serialize_employees
from django.http import JsonResponse


# Create your views here.


def employee_list(request):
    employees = React.objects.all()
    return JsonResponse(serialize_employees(employees), safe=False)