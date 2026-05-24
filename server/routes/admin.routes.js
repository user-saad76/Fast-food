import express from 'express'

import upload from '../utlis/multer.js';
import { CreateAdmin, getAdmin, LoginAdmin, Logout } from '../controllers/admin.controller.js';
import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';

const server = express();
const router = express.Router()

router.route('/admin/signup').post(upload.single("image"),CreateAdmin)
router.route('/admin/signin').post(LoginAdmin)
router.route('/admin/me').get(isAdminAuthenticated,getAdmin)
router.route('/admin/logout').post(isAdminAuthenticated,Logout)




export default router;