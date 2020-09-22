import React, {useContext, useState} from 'react';
import { MyGlassContext } from '../Context/GlassContext';
import Shahid from './Shahid'

function Suleman() {
  
  let ctx = useContext(MyGlassContext);
  return (
    <div>
      <button
      onClick={
        ()=>{
          ctx[1](++ctx[0])
        }
      }
      >Update from Suleman</button>
      <Shahid   />
    </div>
  );
}

export default Suleman;