from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def donate(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            campaign_id = data['campaignId']
            amount = data['amount']

            # Logic for processing the donation
            # Update the campaign's raised amount in the database
            
            # Respond with success
            return JsonResponse({"message": "Donation successful!"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid method"}, status=400)
