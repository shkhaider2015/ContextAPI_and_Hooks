import React, {useState} from 'react';
import Shahid from './Shahid'

function Suleman(props) {
  
  let [numberOfGlass, setNumberOfGlass] = useState(props.glass);
  let toShahid = numberOfGlass - 1;
  
  if(props.glass === numberOfGlass)
  {
    setNumberOfGlass(numberOfGlass - toShahid)
  }

  return (
    <div>
      <h3> I am Suleman and i have {numberOfGlass} </h3>
      <Shahid glass={toShahid}  />
    </div>
  );
}

export default Suleman;