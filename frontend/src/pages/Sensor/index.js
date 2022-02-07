import React, {useState,useEffect,Component} from 'react';
import {useNavigate} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

import Speedometer from '../resources/Speedometer';
import Barometer from '../resources/Barometer';
import Amperemeter from '../resources/Amperemeter';
import Thermo from '../resources/Thermometer';
import Lightmeter from '../resources/Lightmeter';

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
        
    },[sensorID,sensor,sensor.measure]);

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
            case 'temperatura':
                return(<Thermo
                    id={object.sensorID}
                    value={object.measure}
                    title="Temperatura (°C)"/>);
            case 'intensidade luminosa':
                return(<Lightmeter
                        id={object.sensorID}
                        value={object.measure}
                        title="Intensidade (cd)"/>);
            default:
            return object.measure;
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