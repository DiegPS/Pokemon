import getAllPokemonAPI from "../adapters/getAllPokemonAPI.adapter.js"
import getAllPokemonDB from "../adapters/getAllPokemonDB.adapter.js"
import { client } from "../db.js"
function allPokemons() {
  return getAllPokemonAPI()
    .then(dataAPI => [...(getAllPokemonDB()), ...dataAPI])
}
export default allPokemons