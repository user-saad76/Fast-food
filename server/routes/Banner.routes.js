import express from 'express'
import { CreateBanner, deleteBanner, getAllBanner, getBannerById, updateBanner } from '../controllers/Banner.controller.js';
import upload from '../utlis/multer.js';
import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';

const server = express();
const router = express.Router()

router.route('/create/banner').post(isAdminAuthenticated,upload.single("img"),CreateBanner)
router.route('/banners').get(getAllBanner)
router.route('/banner/:id').get(getBannerById)
router.route('/update/banner/:id').put(updateBanner)
router.route('/delete/banner/:id').delete(deleteBanner)



export default router;