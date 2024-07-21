import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './StoryForm.css'; // Assuming you create a CSS file for additional styles

const StoryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    tags: '',
    title: '',
    story: '',
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Contact phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.title) {
      newErrors.title = 'Story title is required';
    }
    if (!formData.story) {
      newErrors.story = 'Story content is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    setValidated(true);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data
      console.log(formData);
      alert('Story submitted successfully!');
    }
  };

  return (
    <Container className="story-form-container">
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4" style={{ color: '#A2CFB3' }}>Share Your Story</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Your Name (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Contact Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="tags" className="mb-3">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                as="select"
                value={formData.tags}
                onChange={handleInputChange}
              >
                <option>Choose...</option>
                <option>Tag 1</option>
                <option>Tag 2</option>
                <option>Tag 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Story Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the title of your story"
                value={formData.title}
                onChange={handleInputChange}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="story" className="mb-3">
              <Form.Label>Write Your Story</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your story here..."
                value={formData.story}
                onChange={handleInputChange}
                isInvalid={!!errors.story}
              />
              <Form.Control.Feedback type="invalid">{errors.story}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="file" className="mb-3">
              <Form.Label>Upload Picture/Video</Form.Label>
              <Form.Control
                type="file"
                onChange={handleInputChange}
              />
            </Form.Group>

            {Object.keys(errors).length > 0 && (
              <Alert variant="danger">
                Please correct the highlighted errors before submitting.
              </Alert>
            )}

            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default StoryForm;
