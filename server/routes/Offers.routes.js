import express from 'express'
import { CreateOffers, deleteOffer, getAllOffers, getOfferById, getOfferBySlug, updateOffer } from '../controllers/Offers.controller.js';
import upload from '../utlis/multer.js';
import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';
const server = express();
const router = express.Router()

router.route('/create/offer').post(isAdminAuthenticated,upload.single("img"),CreateOffers)
router.route('/offers').get(getAllOffers)
router.route('/offer/:id').get(getOfferById)
router.route('/offer/slug/:slug').get(getOfferBySlug)
router.route('/update/offer/:slug').put(isAdminAuthenticated,updateOffer)
router.route('/delete/offer/:slug').delete(isAdminAuthenticated,deleteOffer)



export default router;