import { Router } from "express"
import getTypes from "../controllers/getTypes.controller.js"

const router = Router()

router.get("/", getTypes)
export default router