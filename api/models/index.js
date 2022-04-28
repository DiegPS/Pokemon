import Pokemon from "./Pokemon.js"
import Type from "./Type.js"
Type.belongsToMany(Pokemon, {
  through: "Pokemon_Type",
  timestamps: false,
});
Pokemon.belongsToMany(Type, {
  through: "Pokemon_Type",
  timestamps: false,
});
export { Pokemon, Type }