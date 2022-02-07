const conection=require('../database/conection');
const knexPostgis = require('knex-postgis');

const st=knexPostgis(conection);




module.exports ={

async create(req,res){
    const {voltage,brand,type,measure,size,lon,lat}=req.body;

    coordinates= (`SRID=4326;POINT(${lat} ${lon} )`);
    size_a=JSON.parse(size);
    height=size_a[0];
    width=size_a[1];
    length=size_a[2];

    await conection('sensors').insert({
        voltage,
        brand,
        type,
        measure,
        height,
        width,
        length,
        coordinates
       
    });

    return res.status(200).send();
},

async read(req,res){
    const sensors = await conection('sensors').select('sensors.*',st.asGeoJSON('coordinates'));

    
        return res.json(sensors);
},

async readID(req,res){
    const {id}=req.params;
    const sensor = await conection('sensors').where('sensorID',id).
    select('sensors.*',st.asGeoJSON('coordinates'));

        return res.json(sensor);
},

async delete(req,res){

    const {id}=req.params;
    await conection('sensors').where('sensorID',id).delete();
    return res.status(204).send();
},


async update(req,res){

    const {id}=req.params;
    [sensor]=await conection('sensors').select('sensors.*',st.asGeoJSON('coordinates'))
    .where('sensorID',id);
   
 

    const {voltage,brand,type,measure,size,lon,lat}=req.body;

    
    const newVoltage=voltage??sensor.voltage;
    const newBrand=brand??sensor.brand;
    const newType=type??sensor.type;
    const newMeasure=measure??sensor.measure;
    const newLat=lat??JSON.parse(sensor.coordinates).coordinates[0];
    const newLon=lon??JSON.parse(sensor.coordinates).coordinates[1];
    //caso especial do tamanho que é passado como vetor
    const noNewSize=size??true;
    var newSize=[sensor.height,sensor.width,sensor.length]

    if(noNewSize!=true) {
        newSize=JSON.parse(size);
    } 

    await conection('sensors').where('sensorID',id)
    .update({
        voltage: newVoltage,
        brand: newBrand,
        type: newType,
        measure:newMeasure,
        height:newSize[0],
        width:newSize[1],
        length:newSize[2],
        coordinates: (`SRID=4326;POINT(${newLat} ${newLon} )`)
    });
    return res.status(204).send();

}


};