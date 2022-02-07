import React from "react";
import ReactSpeedometer from "react-d3-speedometer";



const Lightmeter = ({ id, value, title }) => {
  

  return (
   
    
    <div className="gauges">
        <div className="gauges-title">{title}</div>
        <ReactSpeedometer
            maxValue={5*(value)}
            minValue={0}
            value={value}
            needleTransition="easeQuadIn"
            needleTransitionDuration={1000}
            needleColor="black"
            valueTextFontSize="20px"
            labelFontSize="15px"
            width={400}
            height={350}
            paddingVertical={15}
            paddingHorizontal={15}
            textColor="#333"
            ringWidth={10}
            startColor="#f9d976"
            segments={10}
            endColor="#FFC300"
         />
    </div>
  );
};

export default Lightmeter;
