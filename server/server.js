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
import cookieParser from 'cookie-parser';
import { ConnectDB } from './config/db.js';
import paymentRoutes from './routes/payment.routes.js'
import OrderRoutes from './routes/order.routes.js'
import CashOrderRoutes from './routes/CashOrder.routes.js'
import CartRoutes from './routes/cart.routes.js'
import PizzaRoutes from './routes/pizzaItems.routes.js'
import BurgerRoutes from './routes/burgerItems.routes.js'




const port = process.env.PORT || 5000;
server.use(cors({
  origin:  ["http://localhost:5174", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


ConnectDB().catch((e)=>console.log("Error in Connection",e));

server.use(express.json());
server.use(bodyParser.json())
server.use(cookieParser())
server.use(OfferRoutes)
server.use(BannerRoutes)
server.use(ServiceRoutes)
server.use(UserRoutes)
server.use(AdminRoutes)
server.use(paymentRoutes)
server.use(OrderRoutes)
server.use(CashOrderRoutes)
server.use(CartRoutes)
server.use(PizzaRoutes)
server.use(BurgerRoutes)


server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})
