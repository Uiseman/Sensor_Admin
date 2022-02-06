import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Admin from './pages/Admin';
import Sensor from './pages/Sensor';



export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Admin}/>
            <Route path="/sensors" component={Sensor}/>
        </Switch>
    </BrowserRouter>
    );
    
}