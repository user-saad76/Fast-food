import express from 'express'
const server = express();
import 'dotenv/config'
import OfferRoutes from './routes/Offers.routes.js'
import bodyParser from 'body-parser';
import { ConnectDB } from './config/db.js';



const port = process.env.PORT || 5000;
ConnectDB().catch((e)=>console.log("Error in Connection",e));
server.use(bodyParser.json())
server.use(OfferRoutes)






server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})
