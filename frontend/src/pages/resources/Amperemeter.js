import React from "react";
import ReactSpeedometer from "react-d3-speedometer";




const Amperemeter = ({ id, value, title }) => {
   

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
            ringWidth={5}
            startColor="#333"
            segments={10}
            endColor="#333"
         />
    </div>
  );
};

export default Amperemeter;
