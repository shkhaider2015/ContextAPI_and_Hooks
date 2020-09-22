import React, {useContext} from 'react';
import { MyGlassContextTwo } from '../Context/GlassContext';

function Zeeshan() {
  
  let ctx = useContext(MyGlassContextTwo)

  return (
    <div>
      <button
      onClick={
        ()=>{
          ctx[1](++ctx[0])
        }
      }
      >Update from Zeeshan CTX2</button>
    </div>
  );
}

export default Zeeshan;