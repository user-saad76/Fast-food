import express from 'express'
import upload from '../utlis/multer.js';
import { isAdminAuthenticated } from '../middleware/admin-authenticaton.js';
import { CreatePizza, deletePizza, getAllPizzas, getPizzaById, getPizzaBySlug, updatePizza } from '../controllers/pizzaItems.controller.js';
const server = express();
const router = express.Router()

router.route('/create/pizza').post(isAdminAuthenticated,upload.single("img"),CreatePizza)
router.route('/pizzas').get(getAllPizzas)
router.route('/pizza/:id').get(getPizzaById)
router.route('/pizza/slug/:slug').get(getPizzaBySlug)
router.route('/update/pizza/:slug').put(isAdminAuthenticated,updatePizza)
router.route('/delete/pizza/:slug').delete(isAdminAuthenticated,deletePizza)

export default router;