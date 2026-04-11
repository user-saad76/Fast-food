import express from 'express'
import { CreateService, deleteService, getAllService, getServiceById, updateService } from '../controllers/Service.controller.js';

const server = express();
const router = express.Router()

router.route('/create/service').post(CreateService)
router.route('/services').get(getAllService)
router.route('/service/:id').get(getServiceById)
router.route('/update/service/:id').put(updateService)
router.route('/delete/service/:id').delete(deleteService)



export default router;