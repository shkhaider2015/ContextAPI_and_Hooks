import React, {useState} from 'react';
import Shabbir from './Shabbir'

function Sameer(props) {

  let [numberOfGlass, setNumberOfGlass] = useState(0);
  let toSabbir = numberOfGlass;
  
  console.log(props.glass, " vs " ,numberOfGlass)
  if(props.glass === numberOfGlass)
  {
    setNumberOfGlass(numberOfGlass - toSabbir)
  }

  return (
    <div>
      <h3> I am Sameer and i have {numberOfGlass} </h3>
      <Shabbir glass={toSabbir} />
    </div>
  );
}

export default Sameer;
