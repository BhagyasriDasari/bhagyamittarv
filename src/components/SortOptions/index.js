import React from 'react';
import './index.css';

function SortOptions({ onSort }) {
  const handleChange = (e) => {
    const sortOption = e.target.value;
    onSort(sortOption);
  };

  return (
    <div className="sort-options">
      <select onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default SortOptions;
