import express from 'express'
import { CreateOffers, deleteOffer, getAllOffers, getOfferById, getOfferBySlug, updateOffer } from '../controllers/Offers.controller.js';
import upload from '../utlis/multer.js';
import { isAuthenticated } from '../middleware/user-authentication.js';
const server = express();
const router = express.Router()

router.route('/create/offer').post(upload.single("img"),CreateOffers)
router.route('/offers').get(isAuthenticated,getAllOffers)
router.route('/offer/:id').get(getOfferById)
router.route('/offer/slug/:slug').get(getOfferBySlug)
router.route('/update/offer/:slug').put(updateOffer)
router.route('/delete/offer/:slug').delete(deleteOffer)



export default router;