import { Router } from "express";
import { getDetak, createDetak } from "../controllers/detak.controller.js";

const router = Router();

router.get("/:id", getDetak);
router.post("/", createDetak);
export default router;
