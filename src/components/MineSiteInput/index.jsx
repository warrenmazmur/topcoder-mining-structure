import { useState } from "react";
import { withRouter } from 'react-router-dom'

import "./styles.scss";
import Button from "../Button";

function MineSiteInput(props) {
  const [names, setNames] = useState([""]);

  return (
    <div className="mine-site-input">
      Mine Site Input
      {names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            id={`ore${index + 1}`}
            defaultValue = {val}
            onChange={e => {
              let namesCopy = names;
              namesCopy[index] = e.target.value;
              setNames(namesCopy);
            }}
          />
        </div>
      ))}
      
      <Button 
        id='addMoreButton' 
        value='Add More' 
        handleClick={() => setNames(prevNames => [...prevNames, ""])}
      />
      <Button 
        id='doneButton' 
        value='Done' 
        handleClick={() => {
          props.passNames(names);
          props.history.push('/overview');
        }}
      />
    </div>
    
  );
}

export default withRouter(MineSiteInput);
