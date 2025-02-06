from django.db import models

class Campaign(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    goal = models.FloatField()

    def __str__(self):
        return self.name

class Donation(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    donor_name = models.CharField(max_length=100)
    amount = models.FloatField()

    def __str__(self):
        return f"{self.donor_name} - {self.amount}"
