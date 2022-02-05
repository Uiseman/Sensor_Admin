const conection=require('../database/conection');

module.exports ={

async create(req,res){
    const {voltage,brand,type,measure,size,lon,lat}=req.body;

    coordinates= (`SRID=4326;POINT(${lon} ${lat} )`);
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
    const sensors = await conection('sensors').select('*');

    
        return res.json(sensors);
},

async delete(req,res){

    const {id}=req.params;
    await conection('sensors').where('sensorID',id).delete();
    return res.status(204).send();
}


};