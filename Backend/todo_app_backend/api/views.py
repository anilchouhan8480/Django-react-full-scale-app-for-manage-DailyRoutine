from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Plan
from .serializers import  PlanSerializers

# Create your views here.
class PlanList(ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializers


class PlanCreate(CreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializers
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

class PlanDestroy(DestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializers   
    lookup_field = 'id'