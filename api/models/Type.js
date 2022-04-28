import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
const Type = sequelize.define("Type", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    AllowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    AllowNull: false
  }
}, {
  timestamps: false
})

export default Type