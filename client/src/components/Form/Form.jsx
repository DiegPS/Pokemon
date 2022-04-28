import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes } from "../../redux/actions/actions";
import style from "./Form.module.css";
export default function Form() {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);
  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);
  return (
    <>
      <div className={style.creatediv}>
        <h1 className={style.createtitle}>Create You Pokemon</h1>
        <form action="" className={style.create} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name is..." />
          <label htmlFor="">Select a Types</label>
          <select name="" id="">
            {allTypes.map((type) => (
              <option key={type.id}>{type.name}</option>
            ))}
          </select>
          <label htmlFor="">Image</label>
          <input type="text" placeholder="Image is..." />
          <label htmlFor="">Hp</label>
          <input type="range" placeholder="Hp is..." />
          <label htmlFor="">Attack</label>
          <input type="range" placeholder="Attack is..." />
          <label htmlFor="">Defense</label>
          <input type="range" placeholder="Defense is..." />
          <label htmlFor="">Special Attack</label>
          <input type="range" placeholder="Special Attack is..." />
          <label htmlFor="">Special Defense</label>
          <input type="range" placeholder="Special Defense is..." />
          <label htmlFor="">Speed</label>
          <input type="range" placeholder="Speed is..." />
          <label htmlFor="">Weight</label>
          <input type="range" placeholder="Weight is..." />
          <label htmlFor="">Height</label>
          <input type="range" placeholder="Height is..." />
          <button>Create a Pokemon</button>
        </form>
      </div>
    </>
  );
}
