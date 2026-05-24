import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const CreateAdmin = async (req, res) => {
  try {
    console.log("FILE:", req.file.path);
    console.log("BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const data = req.body;
     const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;

    const newAdmin = await Admin.create({
      name: data.name,
      cnic: data.cnic,
      post: data.post,
      address: data.address,
      email: data.email,
      phone: data.phone,
      password: data.password,
      image: {
        secure_url: req.file.path,
      },
    });

    res.json({ message: "Admin created", data: newAdmin });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const LoginAdmin = async(req,res)=>{

    const {email,password} = req.body; 
      const admin =  await Admin.findOne({email})
      console.log('Get data from server',admin);
      if(!admin || admin.length === 0 ){
        return res.status(404).json({
            success:false,
            message:'Admin not Found'
        })
      }
         const isMatched = await bcrypt.compare( password,admin.password )
      
       if(!isMatched){
        return res.status(401).json({
            success:false,
            message:"invalid password"
        })
       }

        //Sign a JWT Token
                const token = jwt.sign({id:admin._id},process.env.JWT_SECRET_ADMIN,{ expiresIn: '1h' })
                res.cookie("jwt-token-admin",token,{httpOnly:true,maxAge:3600000,sameSite:"lax"});
                
      
    res.json(
        { 
            messages:' Admin have been logined',
            admin
        });
}
export const getAdmin = async(req,res,next)=>{
    const admin =  await Admin.findById(req.admin.id);
    res.status(200).json(admin)
}
export const Logout = async(req,res,next)=>{
   
         res.cookie("jwt-token-admin","",{httpOnly:true,
            maxAge:0,
            secure:false
            ,sameSite:"lax"
        });
         
         res.json({ 
            messages:' Admin have been logout'
        });
}
