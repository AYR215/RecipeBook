# Generated by Django 4.1 on 2022-09-03 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recepies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Some title', max_length=100)),
                ('text', models.TextField(default='Some recipe')),
                ('category', models.CharField(default='anycategory', max_length=255)),
            ],
        ),
    ]
