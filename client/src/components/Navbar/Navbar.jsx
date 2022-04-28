import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to="/home">
        <h1 >Pokémon</h1>
      </Link>
      <Link to="/create">
        <h2 className={style.form}>Create Pokémon</h2>
      </Link>
    </nav>
  )
}