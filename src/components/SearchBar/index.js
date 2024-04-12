import React from 'react';
import './index.css';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
