import { Router } from "express";
import { addScore, changeScore, getAllstudents, getAverage } from "../controllers/classroomCtrlr";
import { onlyTeacher } from "../middlewares/barriersMidds";

const router = Router()

router.get('/', onlyTeacher, getAllstudents)
// router.get('/', getAverage)
router.post('/:id', addScore)
router.put('/:id', changeScore)

export default router