import express from 'express'
import { addToCart,  getAllCartItemsByUser, getSingleCartItem, removeFromCart, updateCart } from '../controllers/cart.controller.js';

const server = express();
const router = express.Router()


router.route('/cart/add/:userId').post(addToCart)
 router.route('/cart-items/:userId').get(getAllCartItemsByUser)
 router.route('/cart/:id').get(getSingleCartItem)
  router.route('/cart/update/:id').put(updateCart)
router.route('/cart/delete/:productId/:userId').delete(removeFromCart)



export default router;