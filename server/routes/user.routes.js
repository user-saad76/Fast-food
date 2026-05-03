import express from 'express'
import { CreateUser, LoginUser } from '../controllers/user.controller.js';

const server = express();
const router = express.Router()


router.route('/users/signup').post(CreateUser)
router.route('/users/signin').post(LoginUser)




export default router;