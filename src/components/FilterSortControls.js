import React from 'react';

function FilterSortControls({ onFilterChange, onSortChange }) {
  return (
    <div className="ui menu">
      <div className="item">
        <label>
          <input
            type="checkbox"
            onChange={(e) => onFilterChange(e.target.checked)}
          /> Only show greased hogs
        </label>
      </div>
      <div className="item">
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortControls;