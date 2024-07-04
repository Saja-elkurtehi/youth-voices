import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomCard from '../../components/Card/CustomCard'; // Adjust the path as needed
import './CustomCarousel.css'; // Custom styles for the carousel

const CustomCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(items.length - 3);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === items.length - 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="custom-carousel">
      <button onClick={handlePrev} className="carousel-button left-arrow"></button>
      <Row className="card-row">
        {items.slice(index, index + 3).map((item, idx) => (
          <Col key={idx}>
            <CustomCard {...item} />
          </Col>
        ))}
      </Row>
      <button onClick={handleNext} className="carousel-button right-arrow"></button>
    </div>
  );
};

export default CustomCarousel;
