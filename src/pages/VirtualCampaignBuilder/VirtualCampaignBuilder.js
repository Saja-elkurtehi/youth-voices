import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import './VirtualCampaignBuilder.css';

const VirtualCampaignBuilder = () => {
  const [campaignTitle, setCampaignTitle] = useState('');
  const [campaignGoals, setCampaignGoals] = useState('');
  const [volunteers, setVolunteers] = useState('');
  const [mediaContent, setMediaContent] = useState(null);
  const [progress, setProgress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    alert('Campaign Created Successfully!');
  };

  const handleFileChange = (e) => {
    setMediaContent(e.target.files[0]);
  };

  return (
    <div className="virtual-campaign-builder">
      <Banner title="VIRTUAL CAMPAIGN BUILDER" />
      <div className="content">
        <div className="campaign-form-section">
          <h2 className="section-title">Create Your Campaign</h2>
          <form onSubmit={handleSubmit} className="campaign-form">
            <div className="form-group">
              <label htmlFor="campaignTitle">Campaign Title</label>
              <input
                type="text"
                id="campaignTitle"
                placeholder="Enter your campaign title"
                value={campaignTitle}
                onChange={(e) => setCampaignTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="campaignGoals">Campaign Goals</label>
              <textarea
                id="campaignGoals"
                placeholder="Describe the goals of your campaign"
                value={campaignGoals}
                onChange={(e) => setCampaignGoals(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="volunteers">Recruit Volunteers</label>
              <select
                id="volunteers"
                value={volunteers}
                onChange={(e) => setVolunteers(e.target.value)}
                required
              >
                <option value="" disabled>Select number of volunteers</option>
                {[...Array(21).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mediaContent">Upload Multimedia Content</label>
              <input
                type="file"
                id="mediaContent"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="progress">Track Progress</label>
              <textarea
                id="progress"
                placeholder="How will you track progress?"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Create Campaign</button>
          </form>
        </div>
        <div className="campaign-tips">
          <h2 className="section-title">Tips for Creating Your Campaign</h2>
          <p><strong>Be Clear:</strong> Define clear goals and steps.</p>
          <p><strong>Be Engaging:</strong> Use multimedia to engage your audience.</p>
          <p><strong>Be Inclusive:</strong> Encourage participation from diverse groups.</p>
          <div className="newsletter">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualCampaignBuilder;
