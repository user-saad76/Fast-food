 import jwt from 'jsonwebtoken'
export const isAuthenticated = async(req,res,next)=>{
      const token = req.cookies['jwt-token'];
      console.log("**************",token)
      if(!token){
         return res.status(401).json({message:'You are not authenticated.'});
      }

      // verification of token 
     const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
     next();

    //   jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    //     console.log("Decoded-jwt",decoded) 
    //    });
       }