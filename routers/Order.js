import { Router } from "express";

import { addOrder, getAllOrders, getorderUsertId, updateOrderDispatched, deleteOrder, updateAdmissionRegistrationById } from "../controler/Order.js";

const router = Router();
router.get("/", getAllOrders)
router.get("/user/:userId", getorderUsertId)
router.put("/:id", updateOrderDispatched)
router.post("/", addOrder)
router.delete("/:id", deleteOrder)
export default router;