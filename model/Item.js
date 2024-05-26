const mongoose= require('mongoose');
const itemSchema= mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
   image:{
    type:String
   },
   title:{
    type:String
   }
})
const Item= mongoose.model('Item',itemSchema);
module.exports= Item;