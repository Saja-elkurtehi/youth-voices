import React from 'react';
import { Card } from 'react-bootstrap';
import './CustomCard.css';

const CustomCard = ({ title, text, imgSrc, linkUrl }) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={imgSrc} className="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
          {text}{' '}
          <a href={linkUrl} className="read-more">
            Read more...
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
