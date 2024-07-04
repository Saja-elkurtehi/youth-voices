import React from 'react';
import { Card } from 'react-bootstrap';
import './MissionCard.css';

const MissionCard = ({ title, text, icon }) => {
  return (
    <Card className="mission-card">
      <Card.Body>
        <div className="card-icon">
          <img src={icon} alt={title} />
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MissionCard;
