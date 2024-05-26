const express= require('express');
const dotenv= require('dotenv');
const mongoose= require('mongoose')
const cors= require('cors');
dotenv.config();
const itemRoutes= require('./routes/itemRoutes')
const userRoutes= require('./routes/userRoutes')
const PORT=process.env.PORT || 8000
const app= express();

mongoose.set('strictQuery',false)
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected');
    }
    catch(err){
        console.log(err );
        
         console.log('Database Connection failed');
         
    }
}
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome")
})
app.use(cors());
app.use('/items',itemRoutes);
app.use('/users',userRoutes);









app.listen(PORT,()=>{
    connect();
    console.log('Server Connected');
    
})