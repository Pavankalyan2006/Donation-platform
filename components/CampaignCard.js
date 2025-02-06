import React, { useState } from 'react';
import './CampaignCard.css';  // Make sure you have the styles if required.

const CampaignCard = ({ id, title, description, goal, raised }) => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = async (id, amount) => {
    const response = await fetch("http://127.0.0.1:8000/api/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaignId: id,
        amount: amount,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Donation successful:", data.message);
    } else {
      console.error("Donation failed:", data.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donationAmount) {
      handleDonate(id, donationAmount);
    }
  };

  return (
    <div className="campaign-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Goal: ${goal}</p>
      <p>Raised: ${raised}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter donation amount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default CampaignCard;
