import { Router } from "express"
import getIdPokemon from "../controllers/getIdPokemon.controller.js"
import postPokemon from "../controllers/postPokemon.controller.js"
const router = Router()

router.get("/:idPokemon", getIdPokemon)
router.post("/", postPokemon)

export default router