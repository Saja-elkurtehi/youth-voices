import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './StoryForm.css'; // Assuming you create a CSS file for additional styles

const StoryForm = () => {
  return (
    <Container className="story-form-container">
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4" style={{ color: '#A2CFB3' }}>Share Your Story</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name (optional)</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter your location" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Contact Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group controlId="formTags" className="mb-3">
              <Form.Label>Tags</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Tag 1</option>
                <option>Tag 2</option>
                <option>Tag 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formStoryTitle" className="mb-3">
              <Form.Label>Story Title</Form.Label>
              <Form.Control type="text" placeholder="Enter the title of your story" />
            </Form.Group>

            <Form.Group controlId="formStory" className="mb-3">
              <Form.Label>Write Your Story</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your story here..." />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Picture/Video</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default StoryForm;
