import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsChat, BsHandThumbsUp, BsShare } from 'react-icons/bs';
import './StoryFeed.css';
import red from "../../assets/pfp/red.jpg";
import green from "../../assets/pfp/green.jpg";
import story1 from "../../assets/story1.jpg";
import story2 from "../../assets/story2.jpg";

const stories = [
  {
    id: 1,
    title: "Headline",
    subtitle: "Subhead",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. :)",
    author: "John Doe",
    authorImage: green,
    storyImage: story1,
  },
  {
    id: 2,
    title: "Headline",
    subtitle: "Subhead",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. :)",
    author: "Jane Doe",
    authorImage: red,
    storyImage: story2,
  },
  // Add more stories as needed
];

const StoryFeed = () => {
  return (
    <div className="story-feed">
      {stories.map((story) => (
        <Card key={story.id} className="mb-4 story-card">
          <Card.Header className="story-card-header">
            <img src={story.authorImage} alt={story.author} className="author-image" />
            <div>
              <Card.Title>{story.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{story.subtitle}</Card.Subtitle>
            </div>
          </Card.Header>
          <Card.Img variant="top" src={story.storyImage} />
          <Card.Body>
            <Card.Text>
              {story.content} <a href={`/stories/${story.id}`} className="read-more">Read More</a>
            </Card.Text>
            <footer className="blockquote-footer">{story.author}</footer>
            <div className="story-actions mt-2">
              <Button variant="outline-secondary" className="action-button"><BsChat /> Comment</Button>
              <Button variant="outline-secondary" className="action-button"><BsHandThumbsUp /> Like</Button>
              <Button variant="outline-secondary" className="action-button"><BsShare /> Share</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default StoryFeed;
