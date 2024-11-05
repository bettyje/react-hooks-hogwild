import React, { useState } from 'react';
import hogs from '../porkers_data';
import Nav from './Nav';
import HogList from './HogList';
import FilterSortControls from './FilterSortControls';

function App() {
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const handleFilterChange = (greased) => {
    setFilterGreased(greased);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filteredHogs = filterGreased ? hogs.filter(hog => hog.greased) : hogs;

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'weight') {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="ui grid container">
      <Nav />
      <FilterSortControls onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;
