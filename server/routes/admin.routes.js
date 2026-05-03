import express from 'express'

import upload from '../utlis/multer.js';
import { CreateAdmin, LoginAdmin } from '../controllers/admin.controller.js';

const server = express();
const router = express.Router()

router.route('/admin/signup').post(upload.single("image"),CreateAdmin)
router.route('/admin/signin').post(LoginAdmin)
// router.route('/banners').get(getAllBanner)
// router.route('/banner/:id').get(getBannerById)
// router.route('/update/banner/:id').put(updateBanner)
// router.route('/delete/banner/:id').delete(deleteBanner)



export default router;