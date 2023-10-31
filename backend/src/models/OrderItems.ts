import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index";
import { Product } from "./Products";
import { Order } from "./Orders";


interface OrderItemsInterface extends Model{
  id: number;
  quantity: number;
  price: number;
}

export const OrderItems = sequelize.define<OrderItemsInterface>("OrderItems", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },

  quantity:{
    type: DataTypes.INTEGER
  },

  price:{
    type: DataTypes.INTEGER
  },

}, {

  tableName: 'OrderItems',
  timestamps: false

});

(async () => {
  await sequelize.sync();

})();
