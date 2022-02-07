import React, {useState,useEffect} from 'react';
import {FiMapPin} from 'react-icons/fi';


import Speedometer from '../resources/Speedometer';
import Barometer from '../resources/Barometer';
import Amperemeter from '../resources/Amperemeter';
import Thermo from '../resources/Thermometer';
import Lightmeter from '../resources/Lightmeter';

import './styles.css';
import api from '../../services/api';




export default function Sensor(){


    const sensorID=localStorage.getItem('sensorID');
    const [sensor,setSensor]=useState({});
    const[latitude,setLatitude]=useState('');
    const[longitude,setLongitude]=useState('');

    useEffect(()=>{

        api.get(`sensors/${sensorID}`).then(response=>{
            

            setSensor(response.data[0]);
            setLatitude(JSON.parse(sensor.coordinates).coordinates[0]);
            setLongitude(JSON.parse(sensor.coordinates).coordinates[1])
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
                    <div className="local">
                            <FiMapPin size={30} color="cc0000"/>
                            <p>(latitude: {latitude}, longitude: {longitude})</p>
                        </div>
                </div>
            </div>         
       
        );
}