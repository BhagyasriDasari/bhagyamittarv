import React, { useState, useEffect } from 'react';
import NoteCard from '../NoteCard';
import AddNoteForm from '../AddNoteForm';
import SearchBar from '../SearchBar';
import SortOptions from '../SortOptions';
import './index.css';

function Homepage() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleAddNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNotes = filteredNotes.sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return sortOption === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="homepage">
      <h1 className='heading'>My Notes</h1>
      <div className="actions">
        <SearchBar onSearch={handleSearch} />
        <SortOptions onSort={handleSort} />
      </div>
      <div className="note-list">
        {sortedNotes.map((note, index) => (
          <NoteCard key={index} note={note} />
        ))}
      </div>
      <div className="add-note-section">
        <AddNoteForm onAddNote={handleAddNote} />
      </div>
    </div>
  );
}

export default Homepage;
