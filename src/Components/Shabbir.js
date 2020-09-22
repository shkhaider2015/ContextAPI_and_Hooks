import React, { useContext } from 'react';
import { MyGlassContext } from '../Context/GlassContext';
import Suleman from './Suleman'

function Shabbir() {
  let ctx = useContext(MyGlassContext)
  
  return (
    <div>
      <button
      onClick={
        ()=>{
          ctx[1](++ctx[0])
        }
      }
      >Update from Shabbir</button>
      <Suleman   />
    </div>
  );
}

export default Shabbir;
