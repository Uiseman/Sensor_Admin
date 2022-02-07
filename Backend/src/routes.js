const express=require('express');

const conection=require('./database/conection');

const routes=express.Router();

const SensorController=require('./controllers/SensorController');

//rotas post

routes.post('/create', SensorController.create);
routes.delete('/delete/:id', SensorController.delete);
routes.post('/update/:id', SensorController.update);

//rotas get
routes.get('/sensors', SensorController.read);
routes.get('/sensors/:id', SensorController.readID);
module.exports=routes;