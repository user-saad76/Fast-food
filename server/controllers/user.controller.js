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
