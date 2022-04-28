import { Router } from "express"
import getAllPokemons from "../controllers/getAllPokemons.controller.js"
const router = Router()
router.get("/", getAllPokemons)
export default router