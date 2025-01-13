import { Router } from "express";
import {add_signUp, getStudentByNamePassword_Login, getAllusers, updateUserDetails, updateUserPassword ,getById} from "../controler/User.js-"
const router = Router()
router.get("/",getAllusers)
router.get("/:id",getById)
router.put("/:id",updateUserDetails)
router.put("/:id",updateUserPassword)
router.post("/",add_signUp)
router.post("/login",getStudentByNamePassword_Login)
export default router;