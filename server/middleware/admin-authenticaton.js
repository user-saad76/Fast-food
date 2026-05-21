import jwt from 'jsonwebtoken'
export const isAdminAuthenticated = async(req,res,next)=>{
      const token = req.cookies['jwt-token-admin'];
      console.log("admin token",token)
      if(!token){
         return res.status(401).json({message:'You are not verified admin'});
      }

      // verification of token 
     const decoded = await jwt.verify(token,process.env.JWT_SECRET_ADMIN)
        req.admin = decoded;
     next();

    //   jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    //     console.log("Decoded-jwt",decoded) 
    //    });
       }