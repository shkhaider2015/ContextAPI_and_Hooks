import React, { useReducer } from 'react';
import MyReducer from "../Reducer/Reducer";

function RDShakeel() {
  
  let [state, dispatch] = useReducer(MyReducer, 0)

  return (
    <div>

        <h4>Reducer is : {state} </h4>
      <button
      onClick={
          ()=>{
            dispatch('increment')
          }
      }
      
      >+</button>

<button
      onClick={
          ()=>{
            dispatch('dicrement')
          }
      }
      
      >-</button>
    </div>
  );
}

export default RDShakeel;