from django.db import models
from django.contrib.auth.models import User
# Create your models here.



class Picture(models.Model):
    content = models.ImageField(upload_to="pictures/") # might need to change the directory to what is raspberrypi (h264)
    uploaded_on = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pictures')
    description = models.TextField(blank=True)
    def __str__(self):
        return f"Place holder: {self.description}"


class Video(models.Model):
    content = models.FileField(upload_to='videos/')
    uploaded_on = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    duration = models.TimeField(null=True, blank=True)
    def __str__(self):
        return f"Place Holder: {self.description}"

class Notification(models.Model):
    class TypeChoices(models.TextChoices):
        motion_detected = "MD", "Motion Detected"
        low_battery= "LB", "Low Battery"

    message = models.TextField()
    type = models.TextField(choices=TypeChoices.choices)
    user = models.ForeignKey(User, on_delete=models.CASCADE) # Many notifications for one user
    picture = models.ForeignKey(Picture, on_delete=models.CASCADE) # Many notifications for one picture (maybe change)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)  # Many notifications for one video (maybe change)

    
    def __str__(self):
        return f"{self.get_type_display()} : {self.message[:30]}"


