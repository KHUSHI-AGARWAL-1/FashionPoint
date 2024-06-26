const User= require('../model/User');
const bcrypt=require('bcrypt')
const signup= async(req,res)=>{
    try{
        const {name,email,password}= req.body;
       const user= await User.findOne({email})
       if(user) {
       return  res.status(400).json({msg:"User Already exits"})
    }
    else{
        const hashpass= await bcrypt.hash(password,10);
     const   createuser= new User({name:name,email:email,password:hashpass})
     await createuser.save()
     res.status(201).json({msg:"User Created",user:{
        _id:createuser._id,
            name:createuser.name,
            email:createuser.email
  
     }})
    }
    
    }
    catch(err){
console.log('Error:' ,err);
res.status(500).json({msg:"Internal Server error"});
    }
}
const login= async (req,res)=>{
try {
    const {email,password}= req.body;
    const user= await User.findOne({email});
    const comparepass=await bcrypt.compare(password,user.password)
    if(!user || !comparepass){
        return res.status(400).json({msg:"Invalid Username or Password"})
    }
    else{
        return res.status(200).json({msg:"User LoggedIn",user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }}) 
    }
} catch (err) {
    console.log('Error:' ,err);
    res.status(500).json({msg:"Internal Server error"});
    }    

}

module.exports = {signup,login};