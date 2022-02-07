import React from "react";
import ReactSpeedometer from "react-d3-speedometer";



const Speedometer = ({value,title}) => {

  return (

    
    
    <div className="gauges">
       <div className="gauges-title">{title}</div>
      <ReactSpeedometer
        maxValue={5*(value)}
        minValue={-5*(value)}
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
        startColor="blue"
        segments={10}
        endColor="#00ffff"
      />
    </div>
  );
};

export default Speedometer;
