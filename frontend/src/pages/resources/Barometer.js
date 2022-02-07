import React from "react";
import ReactSpeedometer from "react-d3-speedometer";



const Barometer = ({value,title}) => {

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
        startColor="#D22B2B"
        segments={10}
        endColor="#FFC300 "
      />
    </div>
  );
};

export default Barometer;
