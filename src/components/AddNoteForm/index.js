import React, { useState } from 'react';
import './index.css';

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const newNote = { title, description, image, video, timestamp: new Date() };
    onAddNote(newNote);
    setTitle('');
    setDescription('');
    setImage('');
    setVideo('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
        ></textarea>
        <input
          type="text"
          placeholder="Image Link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Video Link"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="button-container">
        <button type="submit" className="form-button">Add Note</button>
      </div>
    </form>
  );
}

export default AddNoteForm;
