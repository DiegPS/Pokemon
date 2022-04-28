import { Pokemon, Type } from "../models/index.js"
export default function getAllPokemonDB() {
  Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: []
      }
    }
  }).then(data => console.log(data))
  return []
}