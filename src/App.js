import React, { useContext} from 'react';
import './App.css';
import Sameer from './Components/sameer';
import Shakeel from './Components/Shakeel';
import Suleman from './Components/Suleman';
import {GlassOneCTX, MyGlassContext, MyGlassContextTwo, GlassTwoCTX} from "./Context/GlassContext";
function App() {
 
  const fCTX = useContext(MyGlassContext);
  const sCTX = useContext(MyGlassContextTwo);

  return (
    <div className="App">
     <h1>First Context : {fCTX} </h1>
     <h1>Second Context : {sCTX} </h1>

    <GlassOneCTX>
      <Sameer />
      <Suleman />
    </GlassOneCTX>
    

    <GlassTwoCTX>
      <Shakeel />
    </GlassTwoCTX>

    </div>
  );
}

export default App;
