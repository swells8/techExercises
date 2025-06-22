from django.db import models

# Create your models here.


class React(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=200)
    title = models.CharField(max_length=200, default='') # had to add a default because this field wasn't migrated with employee and department when originally migrated

    def __str__(self):
        return self.employee
