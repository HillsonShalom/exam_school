import { Router } from "express";
import { addScore, changeScore, getAllstudents, getAverage } from "../controllers/classroomCtrlr";

const router = Router()

router.get('', getAllstudents)
router.get('', getAverage)
router.post('/:id', addScore)
router.put('/:id', changeScore)

export default router