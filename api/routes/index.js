import { Router } from "express"
import pokemons from "./pokemons.js"
import pokemon from "./pokemon.js"
import types from "./types.js"
const router = Router()
router.use("/pokemons", pokemons)
router.use("/types", types)
router.use("/pokemon", pokemon)
export default router