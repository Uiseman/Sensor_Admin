import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {FiTrash2, FiSearch} from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';




export default function Admin(){

    const navigate= useNavigate();
    const [sensors,setSensors]=useState([]);

    useEffect(()=>{

        api.get('sensors').then(response=>{

            setSensors(response.data);
        });
    },[sensors]);

   async function handleDeleteSensor(id) {
        
        try{
            await api.delete(`delete/${id}`);

            setSensors(sensors.filter(sensors=>sensors.sensorID!==id))
        } catch(err){
            alert('Erro ao deletar, tente novamente.')
        }
    }

    async function handleDetail(id){
        
        try {
            localStorage.setItem('sensorID', id);
            navigate('/sensor');

        } catch(err){
            alert('Erro ao acessar, tente novamente.')
        }
    }



    return (

        <div className="profile-container">
            <header>
                <span>Sensores Cadastrados</span>

            </header>
            <ul>
              {
                  sensors.map(sensor=>(
                    <li key={sensor.sensorID}>
                        <strong>Identificação:</strong>
                        <p>{sensor.sensorID}</p>

                        <strong>Fabricante:</strong>
                        <p>{sensor.brand}</p>

                        <strong>Tipo:</strong>
                        <p>{sensor.type}</p>

                        <strong>Tamanho:</strong>
                        <p>({sensor.height} X {sensor.width} X {sensor.length})</p>


                        <button type="button">
                            <FiSearch onClick={()=>handleDetail(sensor.sensorID)} size={28} color="41414d"/>
                        </button>

                        <button onClick={()=>handleDeleteSensor(sensor.sensorID)} type="button">
                            <FiTrash2 size={28} color="41414d"/>
                        </button>

                        
                     </li>
                  ))
              }
            </ul>
        </div>    
        
        );
}