import React, {useState} from 'react';

function Zeeshan(props) {
  
  let [numberOfGlass, setNumberOfGlass] = useState(props.glass);

  return (
    <div>
      <h3> I am zeeshan and i have {numberOfGlass} </h3>
    </div>
  );
}

export default Zeeshan;