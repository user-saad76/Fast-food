import express from 'express'
import { CreateUser } from '../controllers/user.controller.js';

const server = express();
const router = express.Router()


router.route('/users/signup').post(CreateUser)




export default router;