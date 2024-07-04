import React from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import './CommentSection.css';
import red from "../../assets/pfp/red.jpg"
import green from "../../assets/pfp/green.jpg"

const comments = [
  { id: 1, author: 'John Doe', content: 'Lorem ipsum dolor sit amet.', authorImage: green },
  { id: 2, author: 'Jane Doe', content: 'Lorem ipsum dolor sit amet.', authorImage: red },
];

const CommentSection = () => {
  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ListGroup className="mb-3">
        {comments.map((comment) => (
          <ListGroup.Item key={comment.id} className="comment-item">
            <img src={comment.authorImage} alt={comment.author} className="comment-author-image" />
            <div>
              <strong>{comment.author}</strong>: {comment.content}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group controlId="comment">
          <Form.Label>Add a Comment</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your comment" />
        </Form.Group>
        <Button variant="outline-primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentSection;
