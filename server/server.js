import express from 'express'
const server = express();
import 'dotenv/config'
import cors from "cors"
import OfferRoutes from './routes/Offers.routes.js'
import BannerRoutes from './routes/Banner.routes.js'
import ServiceRoutes from './routes/Service.routes.js'
import UserRoutes from './routes/user.routes.js'
import AdminRoutes from './routes/admin.routes.js'
import bodyParser from 'body-parser';
import { ConnectDB } from './config/db.js';




const port = process.env.PORT || 5000;
server.use(cors({
  origin:  ["http://localhost:5174", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


ConnectDB().catch((e)=>console.log("Error in Connection",e));

server.use(express.json());
server.use(bodyParser.json())
server.use(OfferRoutes)
server.use(BannerRoutes)
server.use(ServiceRoutes)
server.use(UserRoutes)
server.use(AdminRoutes)







server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})
