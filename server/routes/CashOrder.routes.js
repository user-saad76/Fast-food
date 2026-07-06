import express from 'express'

import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';
import { CashOrderDeleteById, getAllCashOrders, UpdateOrderById } from '../controllers/CashOrder.controller.js';

const server = express();
const router = express.Router()


router.route('/cash-orders').get(isAdminAuthenticated,getAllCashOrders)
 //router.route('/order/:id').get(getOrderById)
// router.route('/offer/slug/:slug').get(getOfferBySlug)
router.route('/update/cash-order/:id').put(UpdateOrderById)
router.route('/delete/cash-order/:id').delete(CashOrderDeleteById)



export default router;