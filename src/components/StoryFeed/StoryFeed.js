import React from 'react';
import './StoryFeed.css';

const StoryFeed = () => {
  // Example data, replace with actual data fetching logic
  const stories = [
    { id: 1, content: 'Story 1', image: null },
    { id: 2, content: 'Story 2', image: null },
  ];

  return (
    <div className="feed">
      {stories.map(story => (
        <div key={story.id}>
          <p>{story.content}</p>
          {story.image && <img src={story.image} alt="Story" />}
        </div>
      ))}
    </div>
  );
};

export default StoryFeed;
