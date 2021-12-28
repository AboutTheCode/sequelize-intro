import { DataTypes, Model } from 'sequelize';

import db from '../db';

class User extends Model {

}

const model = User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'users',
});
export default model;
