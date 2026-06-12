import express from 'express'
import { isAuthenticated } from '../middleware/user-authentication.js';
import { confirmOrder, stripePayment } from '../controllers/payment.controller.js';

const server = express();
const router = express.Router()


router.route('/checkout/sessions').post(stripePayment)
router.route('/order/confirm').post(confirmOrder)





export default router;