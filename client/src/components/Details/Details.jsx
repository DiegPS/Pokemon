import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../../redux/actions/actions"
import style from "./Details.module.css"
export default function Details() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const PokemonDetail = useSelector(state => state.pokemonDetailState)
  useEffect(() => {
    dispatch(getPokemonById(id))
  }, [])
  return (
    PokemonDetail.name ? (
      <card className={style.card}>
        <h1>{id}</h1>
        <h1>{PokemonDetail.name}</h1>
        <img className={style.img} src={PokemonDetail.sprites.other.dream_world.front_default} alt={PokemonDetail.name} />
        <h1>{PokemonDetail.weight}</h1>
        <label htmlFor="">Height</label>
        <progress max="10" value={PokemonDetail.height}>{PokemonDetail.height}</progress>
      </card>) : <h1>cargando</h1>
  )
}