import React, {useState} from 'react';
import Zeeshan from './Zeeshan'

function Shakeel(props) {
  
  let [numberOfGlass, setNumberOfGlass] = useState(props.glass);
  let toZeeshan = numberOfGlass - 1;
  
  if(props.glass === numberOfGlass)
  {
    setNumberOfGlass(numberOfGlass - toZeeshan)
  }

  return (
    <div>
      <h3> I am Shakeel and i have {numberOfGlass} </h3>
      <Zeeshan glass={toZeeshan}  />
    </div>
  );
}

export default Shakeel;