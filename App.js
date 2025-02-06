import React from 'react';
import Navbar from './components/Navbar';
import CampaignCard from './components/CampaignCard';
import './App.css';

const App = () => {
    const campaigns = [
        {
            id: 1,
            title: "Food for All",
            description: "Help provide meals for the needy.",
            goal: 5000,
            raised: 3500,
        },
        {
            id: 2,
            title: "Education for Kids",
            description: "Support education for underprivileged children.",
            goal: 10000,
            raised: 7500,
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="campaign-list">
                {campaigns.map((campaign) => (
                    <CampaignCard
                        key={campaign.id}
                        title={campaign.title}
                        description={campaign.description}
                        goal={campaign.goal}
                        raised={campaign.raised}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
