import express from 'express'
import { isAuthenticated } from '../middleware/user-authentication.js';
import { stripePayment } from '../controllers/payment.controller.js';

const server = express();
const router = express.Router()


router.route('/checkout/sessions').post(stripePayment)





export default router;