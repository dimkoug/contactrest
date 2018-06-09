from rest_framework import viewsets, authentication, filters
from django_filters import rest_framework as django_filters


from ..models import Contact


from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    search_fields = ('fname',)

    def perform_create(self, serializer):
        serializer.save()
