import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index";
import { Order } from "./Orders"
import { Favorites } from "./Favorites"
import { Product } from "./Products"

interface UserInterface extends Model{
  id: number;
  name: string;
  email: string;
  password: string;
}

export const User = sequelize.define<UserInterface>("User", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },

  name:{
    type: DataTypes.STRING
  },

  email:{
    type: DataTypes.STRING
  },

  password:{
    type: DataTypes.STRING
  }

}, {

  tableName: 'User',
  timestamps: false

});

User.hasMany(Order);


(async () => {
  await sequelize.sync();

})();
