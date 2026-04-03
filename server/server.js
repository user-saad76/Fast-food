import express from 'express'
const server = express();



server.get('/test',(req,res)=>{
   res.json({
       "name":"Saad",
       "age":"22"
   });
    
})



server.listen(5000, ()=>{
    console.log('Server is running on port 5000');
    
})
