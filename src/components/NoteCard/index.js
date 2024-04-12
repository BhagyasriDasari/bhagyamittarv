import React from 'react';
import './index.css';

function NoteCard({ note }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p className="timestamp">Created: {new Date(note.timestamp).toLocaleString()}</p>
    </div>
  );
}

export default NoteCard;
