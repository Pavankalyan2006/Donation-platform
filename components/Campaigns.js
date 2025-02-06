import React, { useEffect, useState } from 'react';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/campaigns/')
      .then((response) => response.json())
      .then((data) => setCampaigns(data));
  }, []);

  return (
    <div>
      <h1>Campaigns</h1>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>{campaign.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Campaigns;
