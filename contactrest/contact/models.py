from django.db import models

# Create your models here.

class Contact(models.Model):
    fname = models.CharField(blank=True, max_length=100)
    lname = models.CharField(blank=True, max_length=100)
    tel = models.CharField(blank=True, max_length=100)

    class Meta:
        verbose_name = 'contact'

    def __str__(self):
        return self.lname
