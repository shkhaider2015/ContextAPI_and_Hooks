import React, { useContext, useState } from 'react';
import './App.css';
import Sameer from './Components/sameer';
import Shakeel from './Components/Shakeel';
import {FirstGlassProvider, MyGlassContext, MyGlassContextTwo, SecondGlassProvider} from "./Context/GlassContext";
function App() {
 
  const fCTX = useContext(MyGlassContext);
  const sCTX = useContext(MyGlassContextTwo);

  return (
    <div className="App">
     <h1>First Context : {fCTX} </h1>
     <h1>Second Context : {sCTX} </h1>

    <FirstGlassProvider>
      <Sameer />
      <Suleman />
    </FirstGlassProvider>

    <SecondGlassProvider >
      <Shakeel />
    </SecondGlassProvider>

    </div>
  );
}

export default App;
