import express from 'express'
import upload from '../utlis/multer.js';
import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';
import { CreateBurger, deleteBurger, getAllBurgers, getBurgerById, getBurgerBySlug, updateBurger } from '../controllers/burgerItems.controller.js';
const server = express();
const router = express.Router()

router.route('/create/burger').post(isAdminAuthenticated,upload.single("img"),CreateBurger)
router.route('/burgers').get(getAllBurgers)
router.route('/burger/:id').get(getBurgerById)
router.route('/burger/slug/:slug').get(getBurgerBySlug)
router.route('/update/burger/:slug').put(isAdminAuthenticated,updateBurger)
router.route('/delete/burger/:slug').delete(isAdminAuthenticated,deleteBurger)

export default router;