from django.db import models

class Campaign(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    goal = models.DecimalField(max_digits=10, decimal_places=2)
    raised = models.DecimalField(max_digits=10, decimal_places=2, default=0)

class Donation(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
