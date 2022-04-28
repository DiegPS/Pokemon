import "./Card.module.css";
export default function ({ name, types, image }) {
  return (
    <div className={"card"}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {types.map((type, index) => (
        <h4 key={index}>{type}</h4>
      ))}
    </div>
  );
}
