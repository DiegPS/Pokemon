import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByOrigin, filterByType, getAllTypes, sortByAlphabet, sortByStrong } from "../../redux/actions/actions"
import "./Options.module.css"
export default function Options() {
  const allTypes = useSelector((state) => state.allTypes)
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  function handlerSearch(e) {
    e.preventDefault()
    setInput(e.target.value)
    input()
  }
  useEffect(() => {
    dispatch(getAllTypes())
  }, [dispatch])
  function allHandler(e, action) {
    dispatch(action(e.target.value))
  }
  return (
    <nav>
      <select onChange={(e) => allHandler(e, filterByOrigin)} name="" id="">
        <option value="all">All Origins</option>
        <option value="db">Pokémons DB</option>
        <option value="api">Pokémons API</option>
      </select>
      <select onChange={(e) => allHandler(e, sortByStrong)} name="" id="">
        <option value="all">Order by Strength</option>
        <option value="weaker">Weakers</option>
        <option value="stronger">Strongers</option>
      </select>
      <select onChange={(e) => allHandler(e, sortByAlphabet)} name="" id="">
        <option value="all">Order by Alphabet</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
      </select>
      <select onChange={(e) => allHandler(e, filterByType)} name="" id="">
        <option value="all">All Types</option>
        {allTypes.map((type, id) =>
          <option key={id} className={`${type.name}`} value={type.name}>{type.name}</option>
        )}
      </select>
      <form onSubmit={(e) => handlerSearch(e)}>
        <input type="text" placeholder="Search you Pokemon" />
        <button>Search</button>
      </form>
    </nav >
  )
}