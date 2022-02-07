import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Speedometer from '../resources/Speedometer';
import Barometer from '../resources/Barometer';
import Amperemeter from '../resources/Amperemeter';

import './styles.css';
import api from '../../services/api';




export default function Sensor(){

    const navigate= useNavigate();
    const sensorID=localStorage.getItem('sensorID');
    const [sensor,setSensor]=useState({});

    useEffect(()=>{

        api.get(`sensors/${sensorID}`).then(response=>{
            

            setSensor(response.data[0]);
        });
        
    },[sensorID,sensor]);

   function indicationSwitch(object) {
        switch(object.type) {
            case 'aceleração':
                return(<Speedometer
                    id={object.sensorID}
                    value={object.measure}
                    title="Aceleração (g)"/>);
            case 'pressão':
                return(<Barometer
                    id={object.sensorID}
                    value={object.measure}
                    title="Pressão (Atm)"/>);
            case 'corrente elétrica':
                return(<Amperemeter
                    id={object.sensorID}
                    value={object.measure}
                    title="Corrente (A)"/>);
          default:
            return 'foo';
        }
      }

  



    return (
     
            <div className="sensor-container">
                <div className="basic-data">
                    <strong>Sensor {sensor.brand} N° {sensor.sensorID}</strong>
                </div>

                <div className="indications">
                    {indicationSwitch(sensor)}
                </div>
            </div>         
       
        );
}