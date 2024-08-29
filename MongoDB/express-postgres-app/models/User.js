import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true

  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

},
  // {timestamp:false}
)

