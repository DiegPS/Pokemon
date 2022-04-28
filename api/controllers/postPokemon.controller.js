import { Pokemon, Type } from "../models/index.js"
async function postPokemon(request, response) {
  const { body: name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types } = request
  const P = await Pokemon.create(name, image, hp, attack, defense, specialAttack, specialDefense, speed, height, weight)
  await P.addTypes(types)
  response.json(P)
}
export default postPokemon