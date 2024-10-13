import { Router } from "express";
import { login, logout, registerStudent, registerTeacher } from "../controllers/authCtrlr";

const router = Router()

router.post  ('/spec-register', registerTeacher)
router.post  ('/register', registerStudent)
router.post  ('/', login)
router.put   ('/:id')
router.delete('/:id', logout)

export default router