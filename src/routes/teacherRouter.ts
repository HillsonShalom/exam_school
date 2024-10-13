import { Router } from "express";
import controller from '../controllers/teachersCtrlr'

const router = Router()

router.get   ('/'   , controller.getAll)
router.get   ('/:id', controller.getById)
router.post  ('/'   , controller.create)
router.put   ('/:id', controller.update)
router.patch ('/:id')
router.delete('/:id', controller.delete)

export default router