
// src/App.js

import React from 'react';
import Search from './Components/Search';
import initialDetails from './Components/initialDetails';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails} />
    </div>
  );
}

export default App;