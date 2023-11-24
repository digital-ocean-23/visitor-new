from django.shortcuts import render
from django.http import JsonResponse
from .forms import VisitorForm
from .models import Visitor
import json
from django.core import serializers

def visitawa(request):
    print('request.body', request.body)
    data = json.loads(request.body)
    print ("hurray !",data['data']['name'])
    print(data['data']['phone'])
    Visitor(name=data['data']['name'],purpose=data['data']['purpose'],email=data['data']['email'],phone=data['data']['phone'],designation=data['data']['designation'],companyname=data['data']['companyname'],address=data['data']['address'],report = data['data']['report'],visitingwhom=data['data']['visitingwhom'],location=data['data']['location']).save()
    return JsonResponse({"Status":"Done"})



def Alldata(request):
    data = Visitor.objects.all()
    serialized_data = serializers.serialize("json", data)
    return JsonResponse({'data': serialized_data}, safe=False)

