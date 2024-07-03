import React from 'react';
import './StoryForm.css';

const StoryForm = () => {
  return (
    <div className="form-container">
      <label htmlFor="name">Your Name (Optional)</label>
      <input type="text" id="name" name="name" placeholder="Your Name" />

      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" placeholder="Location" />

      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Email Address" />

      <label htmlFor="phone">Contact Phone</label>
      <input type="tel" id="phone" name="phone" placeholder="Contact Phone" />

      <label htmlFor="tags">Tags</label>
      <select id="tags" name="tags">
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="family">Family</option>
        <option value="travel">Travel</option>
      </select>

      <label htmlFor="title">Story Title</label>
      <input type="text" id="title" name="title" placeholder="Story Title" />

      <label htmlFor="story">Your Story</label>
      <textarea id="story" name="story" placeholder="Write your story here..."></textarea>

      <label htmlFor="media">Upload Video/Photo</label>
      <input type="file" id="media" name="media" />

      <button type="submit">Submit</button>
    </div>
  );
};

export default StoryForm;
