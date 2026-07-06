import express from 'express'

import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';
import { getAllOrders, getOrderById, OrderDeleteById, UpdateOrderById } from '../controllers/order.controller.js';
const server = express();
const router = express.Router()


router.route('/orders').get(isAdminAuthenticated,getAllOrders)
 router.route('/order/:id').get(getOrderById)
// router.route('/offer/slug/:slug').get(getOfferBySlug)
router.route('/update/order/:id').put(UpdateOrderById)
 router.route('/delete/order/:id').delete(OrderDeleteById)



export default router;