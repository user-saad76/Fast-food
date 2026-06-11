import express from 'express'
import { CreateUser, getMe, LoginUser, Logout, UpdateUserInCheckout } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/user-authentication.js';

const server = express();
const router = express.Router()


router.route('/users/signup').post(CreateUser)
router.route('/users/signin').post(LoginUser)
router.route('/users/me').get(isAuthenticated,getMe)
router.route('/users/logout').post(isAuthenticated,Logout)
router.route('/users/update-in-checkout/:id').put(isAuthenticated,UpdateUserInCheckout)




export default router;