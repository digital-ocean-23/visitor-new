from django.db import models

# Create your models here.
from django.db import models

class Visitor(models.Model):
    purpose = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.IntegerField()
    designation = models.CharField(max_length=100)
    companyname = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=500)
    report =models.CharField(max_length=100)
    visitingwhom=models.CharField(max_length=100)
    location=models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table='visitors_dtt'


