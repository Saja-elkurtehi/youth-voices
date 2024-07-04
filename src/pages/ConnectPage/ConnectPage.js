import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import StoryFeed from '../../components/StoryFeed/StoryFeed';
import CommentSection from '../../components/CommentSection/CommentSection';
import './ConnectPage.css';

const ConnectPage = () => {
  return (
    <div>
      <Banner title="CONNECT" />
      <Container>
        <Row>
          <Col md={8}>
            <StoryFeed />
          </Col>
          <Col md={4}>
            <CommentSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConnectPage;
