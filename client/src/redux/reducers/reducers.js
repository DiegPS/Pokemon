const initialState = {
  allPokemons: [],
  pokemons: [],
  allTypes: [],
  pokemonDetailState: []
}
function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload
      }
    case "GET_ALL_TYPES":
      return {
        ...state,
        allTypes: payload
      }
    case "GET_DETAILS_POKEMON":
      return {
        ...state,
        pokemonDetailState: payload
      }
    case "FILTER_BY_TYPE":
      let pokemonFiltered = [...state.pokemons]
      payload === "all" ? pokemonFiltered = [...state.pokemons] :
        pokemonFiltered = state.pokemons.filter(p => p.types.includes(payload))
      return {
        ...state,
        allPokemons: pokemonFiltered
      }
    case "SORT_BY_ALPHABET":
      let pokemonSortABC = [...state.allPokemons]
      payload === "all" ? pokemonSortABC = [...state.allPokemons]
        : payload === "az" ? pokemonSortABC.sort((a, b) =>
          a.name > b.name ? 1
            : a.name < b.name ? -1
              : 0)
          : pokemonSortABC.sort((a, b) =>
            b.name > a.name ? 1
              : b.name < a.name ? -1
                : 0
          )
      return {
        ...state,
        allPokemons: pokemonSortABC
      }
    case "FILTER_BY_ORIGIN":
      let filterOrigin = [...state.pokemons]
      payload === "all" ? filterOrigin = [...state.pokemons]
        : payload === "db" ? filterOrigin.filter(({ id }) => id.length > 5)
          : filterOrigin.filter(({ id }) => id.length <= 5)
      return {
        ...state,
        allPokemons: filterOrigin
      }
    case "SORT_BY_STRONG":
      let PokemonSortSTR = [...state.allPokemons]
      payload === "all" ? PokemonSortSTR = [...state.allPokemons]
        : payload === "weaker" ? PokemonSortSTR.sort((a, b) => a.attack - b.attack)
          : PokemonSortSTR.sort((a, b) => b.attack - a.attack)
      return {
        ...state,
        allPokemons: PokemonSortSTR
      }
    default:
      return state
  }
}
export default rootReducer