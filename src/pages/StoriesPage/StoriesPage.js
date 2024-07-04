import React from 'react';
import StoryForm from '../../components/StoryForm/StoryForm';
import Banner from '../../components/Banner/Banner';
import './StoriesPage.css';

const StoriesPage = () => {
  return (
    <div className="stories-page">
      <Banner title="NARRATIVES" />
      <div className="content">
        <div className="story-form-section">
          <StoryForm />
        </div>
        <div className="tips">
          <h2>Tips for Writing Your Story</h2>
          <p><strong>Be Authentic:</strong> Share your true experiences.</p>
          <p><strong>Be Clear:</strong> Write clearly and concisely.</p>
          <p><strong>Be Engaging:</strong> Use descriptive language to engage your audience.</p>
          <div className="newsletter">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button>Subscribe</button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
