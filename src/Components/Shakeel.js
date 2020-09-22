import React, {useContext} from 'react';
import { MyGlassContextTwo } from '../Context/GlassContext';
import Zeeshan from './Zeeshan'

function Shakeel() {
  let ctx = useContext(MyGlassContextTwo)
  return (
    <div>
      <button
      onClick={
        ()=>{
          ctx[1](++ctx[0])
        }
      }
      >Update from Shakeel CTX2</button>
      <Zeeshan   />
    </div>
  );
}

export default Shakeel;