const Item= require('../model/Item');

const getItem= async(req,res)=>{
    try{
        const items= await Item.find()
        res.status(200).json(items)
    }
    catch(err){
console.log('Error:' ,err);
res.status(500).json(err);
    }
}

module.exports = {getItem};