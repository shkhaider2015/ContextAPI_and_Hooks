import React, {useState} from 'react';
import Shakeel from './Shakeel'

function Shahid(props) {
  
  let [numberOfGlass, setNumberOfGlass] = useState(props.glass);
  let toShakeel = numberOfGlass - 1;
  
  if(props.glass === numberOfGlass)
  {
    setNumberOfGlass(numberOfGlass - toShakeel)
  }

  return (
    <div>
      <h3> I am Shahid and i have {numberOfGlass} </h3>
      <Shakeel glass={toShakeel}  />
    </div>
  );
}

export default Shahid;