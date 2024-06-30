import React from 'react';
import './CommentSection.css';

const CommentSection = () => {
  // Example data, replace with actual data fetching logic
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
  ];

  return (
    <div className="comment-section">
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
