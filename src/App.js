import React, { useState} from 'react';
import './App.css';
import RDShakeel from './Components/RDShakeel';
import RDZeeshan from './Components/RDZeeshan';
import Sameer from './Components/sameer';
import Shakeel from './Components/Shakeel';
import Suleman from './Components/Suleman';
import {MyGlassContext, MyGlassContextTwo} from "./Context/GlassContext";
function App() {
 
  let firstState = useState(0)
  let secondState = useState(10)

  return (
    <div className="App">
     <h1>First Context : {firstState[0]} </h1>
     <h1>Second Context : {secondState[0]} </h1>
    
    <MyGlassContext.Provider value={firstState}>
    <h1>First Context : {firstState[0]} </h1>
       <Sameer />
      <Suleman />
    </MyGlassContext.Provider>
      
    
    

  
  <MyGlassContextTwo.Provider value={secondState}>
  <Shakeel />
  </MyGlassContextTwo.Provider>

  <RDShakeel />
  <RDZeeshan />
     
    

    </div>
  );
}

export default App;
