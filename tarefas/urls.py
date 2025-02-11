from django.urls import path
from . import views

urlpatterns = [
    path('', views.TarefaListCreate.as_view(), name='tarefa-list-create'),
    path('<int:pk>/', views.TarefaDetail.as_view(), name='tarefa-detail'),
]