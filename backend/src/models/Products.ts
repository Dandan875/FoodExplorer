import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index";
import { OrderItems } from "./OrderItems"
import { Order } from "./Orders"
import { User } from "./Users"
import { Favorites } from "./Favorites"

interface ProductsInterface extends Model{
  id: number;
  name: string;
  category: string;
  price: number;
}

export const Product = sequelize.define<ProductsInterface>("Product", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },

  name:{
    type: DataTypes.STRING
  },

  category:{
    type: DataTypes.STRING
  },

  price:{
    type: DataTypes.INTEGER
  },

}, {

  tableName: 'Product',
  timestamps: false

});

(async () => {
  await sequelize.sync();

})();
