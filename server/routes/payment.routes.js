import express from 'express'
import { isAuthenticated } from '../middleware/user-authentication.js';
import { confirmOrder, stripePayment,cashOnDeliveryOrder } from '../controllers/payment.controller.js';

const server = express();
const router = express.Router()


router.route('/checkout/sessions').post(stripePayment)
router.route('/order/confirm').post(confirmOrder)
router.route('/order/cash-on-delivery').post(cashOnDeliveryOrder)






export default router;