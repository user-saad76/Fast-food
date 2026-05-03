import User from "../models/user.model.js"; 
import bcrypt from "bcryptjs";


export const CreateUser = async(req,res)=>{
    const data = req.body;
    console.log(" Create backend data",data); 
    const hashedPassword = await bcrypt.hash(data.password, 10);
     data.password = hashedPassword;
      await User.create(data) 
    res.json(
        { 
            messages:' Create User endpoint called',
            data:data
        });
}
export const LoginUser = async(req,res)=>{

    const {email,password} = req.body; 
      const user =  await User.find({email})
      console.log('Get data from server',user);
      if(!user || user.length === 0 ){
        return res.status(404).json({
            success,
            message:'User not Found'
        })
      }
       const isMatched = await bcrypt.compare(password,user[0].password)
      
       if(!isMatched){
        return res.status(401).json({
            success:false,
            message:"invalid password"
        })
       }
      
    res.json(
        { 
            messages:' User have been logined',
            user
        });
}

