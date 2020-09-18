import React, {useState} from 'react';
import Suleman from './Suleman'

function Shabbir(props) {
  
  let [numberOfGlass, setNumberOfGlass] = useState(props.glass);
  let toSuleman = numberOfGlass - 1;
  
  if(props.glass === numberOfGlass)
  {
    setNumberOfGlass(numberOfGlass - toSuleman)
  }


  return (
    <div>
      <h3> I am Shabbir and i have {numberOfGlass} </h3>
      <Suleman glass={toSuleman}  />
    </div>
  );
}

export default Shabbir;
