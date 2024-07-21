import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './InforgraphicCarousel.css'; // Custom styles for the infographic carousel

const InfographicCarousel = ({ items, onClick }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 3 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((index + 3) % items.length);
  };

  return (
    <div className="infographic-carousel">
      <button onClick={handlePrev} className="carousel-button left-arrow"></button>
      <Row className="card-row">
        {items.slice(index, index + 3).map((item, idx) => (
          <Col key={idx}>
            <div className="infographic-card" onClick={() => onClick(item.imgSrc)}>
              <img src={item.imgSrc} alt={item.title} className="infographic-card-img" />
            </div>
          </Col>
        ))}
      </Row>
      <button onClick={handleNext} className="carousel-button right-arrow"></button>
    </div>
  );
};

export default InfographicCarousel;
