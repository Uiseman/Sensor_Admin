import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

function scaleSize(value) { //define fator de escala

  if(Math.abs(value)<2) {
    return(2);
  } 
  else if(Math.abs(value)<5) {
    return(5);
  } else {
    return(Math.abs(value)*5);
  }
}

const Barometer = ({value,title}) => {

  return (

    
    
    <div className="gauges">
       <div className="gauges-title">{title}</div>
      <ReactSpeedometer
        maxValue={1*scaleSize(value)}
        minValue={-1*scaleSize(value)}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        valueTextFontSize="20px"
        labelFontSize="15px"
        width={400}
        height={350}
        paddingVertical={15}
        paddingHorizontal={15}
        textColor="#333"
        ringWidth={20}
        startColor="#D22B2B"
        segments={10}
        endColor="#FFC300 "
      />
    </div>
  );
};

export default Barometer;
