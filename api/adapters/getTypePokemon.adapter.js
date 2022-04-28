import axios from "axios"

function getTypePokemon() {
  return axios.get(`https://pokeapi.co/api/v2/type`).then(({ data: { results } }) => results.map(e => { return { name: e.name } }))
}
export default getTypePokemon