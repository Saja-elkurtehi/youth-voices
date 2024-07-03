import React from 'react';
import StoryForm from '../../components/StoryForm/StoryForm'; // Adjust the path as necessary
import './StoriesPage.css';

const StoriesPage = () => {
  return (
    <div className="stories-page">
      <h1 className="head">Share Your Story</h1>
      <div className="content">
        <StoryForm />
        <div className="tips">
          <h2>Tips</h2>
          <p><strong>Engage Your Audience!</strong><br /> Start with a strong opening to grab attention. Share vivid details to bring your story to life.</p>
          <p><strong>Be Authentic!</strong><br /> Your unique perspective is powerful. Be honest and authentic in your storytelling.</p>
          <p><strong>Stay Focused!</strong><br /> Stick to the main theme of your story. Avoid adding too many unrelated details.</p>
          <h3>For Quick Inquiries</h3>
          <p>+44 7777777777</p>
          <p>+1 3333333330</p>
          <h3>Would you like to join our newsletter?</h3>
          <div className="newsletter">
            <input type="email" placeholder="Email" />
            <button>✔</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
