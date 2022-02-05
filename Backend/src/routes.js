const express=require('express');

const conection=require('./database/conection');

const routes=express.Router();

const SensorController=require('./controllers/SensorController');

//rotas post

routes.post('/sensor', SensorController.create);
routes.post('/sensor/:id', SensorController.delete);

//rotas get
routes.get('/sensor', SensorController.read);
module.exports=routes;