import axios from "axios";
import getIdPokemon from "./getIdPokemon.adapter.js"

// LA RECURSION ES EXTREMADAMENTE LENTA (30 SEGUNDOS)
/* async function getAllPokemonAPI(count, allPokemons = []) {
  if (count == 0) return allPokemons
  const pokemonUnique = await getIdPokemon(count)
  allPokemons.push(pokemonUnique)
  return getAllPokemonAPI(--count, allPokemons)
} */
// los bucles son casi igual de lentos que la recursion
/* async function getAllPokemonAPI(numberPokemon) {
  const pokemonArray = []
  while (numberPokemon !== 0) {
    const pokemon = await getIdPokemon(numberPokemon)
    pokemonArray.push(pokemon)
    --numberPokemon
  }
  return pokemonArray
} */

// NO TIENE SENTIDO SOLO SON NOMBRES ESTE ENDPOINT
async function getAllPokemonAPIWithURL(url, count, allPokemons = []) {
  if (count == 0) return allPokemons.flat()
  const { data: { next, results } } = await axios.get(url)
  allPokemons.push(results)
  return getAllPokemonAPIWithURL(next, --count, allPokemons)
}
export default function getAllPokemonAPI() {
  return getAllPokemonAPIWithURL("https://pokeapi.co/api/v2/pokemon/", 2)
    .then(
      (url) =>
        Promise.all(url.map((elemento) => getIdPokemon(elemento.url)))
          .then(data => data)
    )
}
// LA RECURSIVIDAD ES PESIMA PARA HACER TANTAS PETICIONES (30 segundos)
