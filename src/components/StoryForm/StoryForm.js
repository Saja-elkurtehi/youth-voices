import React, { useState } from 'react';
import './StoryForm.css';

const StoryForm = () => {
  const [story, setStory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit story logic
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <textarea 
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Share your story..."
      />
      <input 
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StoryForm;
