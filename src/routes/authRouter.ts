import { Router } from "express";
import { login, logout, registerTeacher } from "../controllers/authCtrlr";

const router = Router()

router.post  ('/spec-register', registerTeacher)
router.post  ('/', login)
router.put   ('/:id')
router.delete('/:id', logout)

export default router