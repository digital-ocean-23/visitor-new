from django import forms
from .models import Visitor

class VisitorForm(forms.ModelForm):
    class Meta:
        model = Visitor
        fields = ['purpose', 'email', 'phone', 'designation', 'companyname', 'name', 'address','report','visitingwhom','location']
