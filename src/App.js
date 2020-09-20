import React, { useState } from 'react';
import './App.css';
import Sameer from './Components/sameer'

function App() {

  let [numberOfGlass, setNumberOfGlass] = useState(5);

  return (
    <div className="App">
    
      <Sameer />
    </div>
  );
}

export default App;
