# Generated by Django 2.0.6 on 2018-06-09 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(blank=True, max_length=100)),
                ('lname', models.CharField(blank=True, max_length=100)),
                ('tel', models.CharField(blank=True, max_length=100)),
            ],
            options={
                'verbose_name': 'contact',
            },
        ),
    ]
