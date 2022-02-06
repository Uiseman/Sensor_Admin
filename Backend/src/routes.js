const express=require('express');

const conection=require('./database/conection');

const routes=express.Router();

const SensorController=require('./controllers/SensorController');

//rotas post

routes.post('/create', SensorController.create);
routes.post('/delete/:id', SensorController.delete);
routes.post('/update/:id', SensorController.update);

//rotas get
routes.get('/sensors', SensorController.read);
module.exports=routes;