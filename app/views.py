from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def donate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        campaign_id = data.get('campaignId')
        amount = data.get('amount')

        # Save donation details to the database
        # Assuming a `Donation` model exists
        Donation.objects.create(campaign_id=campaign_id, amount=amount)

        return JsonResponse({"message": "Donation successful!"}, status=200)

    return JsonResponse({"error": "Invalid request"}, status=400)
