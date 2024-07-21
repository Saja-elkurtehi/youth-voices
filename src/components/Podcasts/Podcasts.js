import React from 'react';
import './Podcasts.css';

const podcastsData = [
  {
    title: 'Youth Activism Today',
    description: 'An insightful podcast discussing the impact of youth activism in the modern world.',
    link: 'https://example.com/youth-activism-today'
  },
  {
    title: 'Social Justice Warriors',
    description: 'A series of interviews with prominent social justice activists.',
    link: 'https://example.com/social-justice-warriors'
  },
  // Add more podcasts as needed
];

const Podcasts = () => {
  return (
    <div className="podcasts-container">
      {podcastsData.map((podcast, index) => (
        <div key={index} className="podcast-item">
          <h3>{podcast.title} </h3>
          <p>{podcast.description}</p>
          <a href={podcast.link} target="_blank" rel="noopener noreferrer">Listen Now</a>
        </div>
      ))}
    </div>
  );
};

export default Podcasts;
