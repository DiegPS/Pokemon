export function getAllPokemons() {
  return dispatch =>
    fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((payload) => {
        dispatch({
          type: "GET_ALL_POKEMONS",
          payload
        })
      })
      .catch(err => console.log(err))
}
export function filterByType(payload) {
  return dispatch => dispatch({
    type: "FILTER_BY_TYPE",
    payload
  })
}
export function sortByAlphabet(payload) {
  return dispatch => dispatch({
    type: "SORT_BY_ALPHABET",
    payload
  })
}
export function sortByStrong(payload) {
  return dispatch => dispatch({
    type: "SORT_BY_STRONG",
    payload
  })
}
export function filterByOrigin(payload) {
  return dispatch => dispatch({
    type: "FILTER_BY_ORIGIN",
    payload
  })
}
export function getPokemonById(id) {
  return dispatch =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(payload => {
        dispatch({
          type: "GET_DETAILS_POKEMON",
          payload
        })
      })
      .catch(
        err => console.log(err)
      )
}

export function getPokemonsByQuery(name) {
  return (dispatch) =>
    fetch(`http://locahost:3001/pokemons?name=${name}`)
      .then(response => response.json())
      .then(payload => dispatch({ type: "", payload }))
      .catch()
}

export function postPokemons() {
  return (dispatch) =>
    fetch("")
      .then(res => res.json())
      .then(payload => dispatch({ type: "", payload }))
      .catch(err => console.log(err))
}
export function getAllTypes() {
  return dispatch => fetch("http://localhost:3001/types")
    .then(res => res.json())
    .then(payload => dispatch({ type: "GET_ALL_TYPES", payload }))
    .catch(err => console.error(err))
}
export function deletePokemon() {
  return (dispatch) =>
    fetch("")
      .then()
      .then()
      .catch()
}

export function patchPokemon() {
  return (dispatch) =>
    fetch("")
      .then()
      .then()
      .catch()
}