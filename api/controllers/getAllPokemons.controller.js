import allPokemons from "../services/AllPokemons.js"
import { client } from "../db.js"
function getAllPokemons(request, response) {
  /*   allPokemons()
      .then(data => response.status(200).json(data))
      .catch(error => response.status(404).json(error.message)) */
  client.get("pokemons", async (error, reply) => {
    if (reply) return response.json(JSON.parse(reply))
    const pokemons = await allPokemons()
    client.set("pokemons", JSON.stringify(pokemons), (error, reply) => {
      response.status(200).json(pokemons)
    })
  })
}
export default getAllPokemons
