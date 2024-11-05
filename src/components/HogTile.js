import React, { useState } from 'react';

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='pigTile'>
    <div className="ui eight wide column" onClick={() => setShowDetails(!showDetails)}>
      <h3>{hog.name}</h3>
      <img className='pigImg' src={hog.image} alt={hog.name} style={{ width: '100%' }} />
      {showDetails && (
        <div>
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
          <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default HogTile;