import React, { useContext } from 'react';
import Shabbir from './Shabbir'
import {MyGlassContext} from "../Context/GlassContext";

function Sameer() {

  let ctx = useContext(MyGlassContext);

  console.log("Context ",ctx)
  return (
    <div>
      <button
      onClick={
        ()=>
        {
          ctx[1](++ctx[0])
          console.log(ctx)
        }
      }
      >Update from Sameer </button>

      <Shabbir  />
    </div>
  );
}

export default Sameer;
