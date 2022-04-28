import getTypePokemon from "../adapters/getTypePokemon.adapter.js"
import { client } from "../db.js"
import { Pokemon, Type } from "../models/index.js"

function getTypes(request, response) {
  client.get("types", async (error, reply) => {
    if (reply) return response.json(JSON.parse(reply))
    const types = await getTypePokemon().then(types => Type.bulkCreate(types))
    client.set("types", JSON.stringify(types), (error, reply) => {
      response.status(200).json(types)
    })
  })
}

export default getTypes