import getIdPokemonAdapter from "../adapters/getIdPokemon.adapter.js"
import validateIdAPI from "../validators/validateIdAPI.js"
function getIdPokemon(request, response) {
  const { idPokemon } = request.params
  if (validateIdAPI(idPokemon)) {
    getIdPokemonAdapter(idPokemon).then(info => {
      response.status(200).json(info)
    })
  }
}
export default getIdPokemon