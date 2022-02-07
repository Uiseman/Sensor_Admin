import React from "react";
import Thermometer from "react-thermometer-component";

function scaleSize(value) { //define fator de escala

  if(value>0) {

    if(value<100) {
      return(100);
    } else {
      return(2*value);
    }

  } else {
    
      return(2*value);
    
  }   
    
  }

const Thermo = ({ id, value, title }) => {
  return (
    <div className="gauges-thermo">
      <div className="gauges-title-thermo">{title}</div>
      <Thermometer
        theme="light"
        value={value}
        max={scaleSize(value)}
        steps="1"
        format="°C"
        size="large"
        height="300"
      />
      
    </div>
  );
};

export default Thermo;