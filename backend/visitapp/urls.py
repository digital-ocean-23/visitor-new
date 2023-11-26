from django.urls import path
from visitapp import views

urlpatterns = [
    path('', views.home, name="home"),
    path('register_visitor',views.visitawa,name='visitawa'),
    path('Alldata',views.Alldata,name = 'Alldata')

]
