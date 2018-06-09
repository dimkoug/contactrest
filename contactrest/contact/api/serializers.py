from rest_framework import serializers
from rest_framework.reverse import reverse

from ..models import Contact

class ContactSerializer(serializers.HyperlinkedModelSerializer):
    links = serializers.SerializerMethodField()

    class Meta:
        model = Contact
        fields = ('id', 'fname', 'lname', 'tel', 'links')

    def get_links(self, obj):
        request = self.context['request']
        links = []
        if hasattr(obj, 'pk'):
            links = {
                'self': reverse('contact-detail',
                                kwargs={'pk': obj.pk}, request=request),
                }
        return links
