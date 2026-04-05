import express from 'express'
import { CreateOffers, deleteOffer, getAllOffers, getOfferById, updateOffer } from '../controllers/Offers.controller.js';
const server = express();
const router = express.Router()

router.route('/create/offer').post(CreateOffers)
router.route('/offers').get(getAllOffers)
router.route('/offer/:id').get(getOfferById)
router.route('/update/offer/:id').put(updateOffer)
router.route('/delete/offer/:id').delete(deleteOffer)



export default router;