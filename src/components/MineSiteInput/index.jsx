import { useState } from "react";

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
          />
        </div>
      ))}
      
      <Button 
        id='addMoreButton' 
        value='Add More' 
        handleClick={() => setNames(prevNames => [prevNames, ""])}
      />
    </div>
    
  );
}

export default MineSiteInput;
