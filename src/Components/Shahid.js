import React, {useContext, useState} from 'react';
import { MyGlassContext } from '../Context/GlassContext';
import Shakeel from './Shakeel'

function Shahid() {
  
  let ctx = useContext(MyGlassContext)
  return (
    <div>
      <button
      onClick={
        ()=>{
          ctx[1](++ctx[0])
        }
      }
      >Update from Shahid</button>
    </div>
  );
}

export default Shahid;