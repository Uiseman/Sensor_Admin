import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Sensor from './pages/Sensor';



export default function Routing(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/sensor" element={<Sensor/>}/>
        </Routes>
    </BrowserRouter>
    );
    
}