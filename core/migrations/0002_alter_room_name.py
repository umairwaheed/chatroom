# Generated by Django 4.0 on 2021-12-13 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="room",
            name="name",
            field=models.CharField(max_length=64, unique=True),
        ),
    ]
