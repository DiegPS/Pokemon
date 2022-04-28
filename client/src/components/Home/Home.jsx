import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllPokemons } from "../../redux/actions/actions"
import Card from "../Card/Card"
import Loading from "../Loading/Loading"
import Options from "../Options/Options"
import "./Home.module.css"
export default function Home() {
  const allPokemons = useSelector(state => state.allPokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])
  return (
    <>
      <Options />
      <section>
        {
          allPokemons.length > 0 ? allPokemons?.map(({ name, id, types, image }) =>
            <Link className={`${types[0]}`} to={`/${id}`} key={id}>
              <Card name={name} types={types} image={image} />
            </Link>
          ) : <Loading title={"Cargando..."} />
        }
      </section>
    </>
  )
}