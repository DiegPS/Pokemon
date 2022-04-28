import { sequelize } from "../db.js"
import { DataTypes } from "sequelize"
const Pokemon = sequelize.define("Pokemon", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.TEXT
  },
  hp: {
    type: DataTypes.STRING,
  },
  attack: {
    type: DataTypes.STRING
  },
  defense: {
    type: DataTypes.STRING
  },
  specialAttack: {
    type: DataTypes.STRING
  },
  specialDefense: {
    type: DataTypes.STRING
  },
  speed: {
    type: DataTypes.STRING
  },
  height: {
    type: DataTypes.STRING
  },
  weight: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false
})

export default Pokemon
