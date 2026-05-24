import User from "../models/user.model.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


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
      const user =  await User.findOne({email})
      console.log('Get data from server',user);
      if(!user || user.length === 0 ){
        return res.status(404).json({
            success,
            message:'User not Found'
        })
      }
      const isMatched = await bcrypt.compare( password,user.password )
       if(!isMatched){
        return res.status(401).json({
            success:false,
            message:"invalid password"
        })
       }


       //Sign a JWT Token
         const token = jwt.sign({ id:user._id },process.env.JWT_SECRET,{ expiresIn: '1h' })
         res.cookie("jwt-token",token,{httpOnly:true,maxAge:3600000,sameSite:"lax"});
         
         res.json({ 
            messages:' User have been logined',
            user
        });
}

export const getMe = async(req,res,next)=>{
    const user =  await User.findById(req.user.id);
    res.status(200).json(user)
}
export const Logout = async(req,res,next)=>{
   
         res.cookie("jwt-token","",{httpOnly:true,
            maxAge:0,
            secure:false
            ,sameSite:"lax"
        });
         
         res.json({ 
            messages:' User have been logout'
        });
}