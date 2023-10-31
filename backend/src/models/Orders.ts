import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index";
import { Product } from "../models/Products";
import { User } from "../models/Users";
import { OrderItems } from "./OrderItems"

interface OrderInterface extends Model{
  id: number;
  totalPrice: number; 
  status: string;
}

export const Order = sequelize.define<OrderInterface>("Order", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },

  totalPrice:{
    type: DataTypes.INTEGER
  },

  status:{
    type: DataTypes.STRING
  },

}, {

  tableName: 'Order',
  timestamps: true

});

Order.belongsToMany(Product, { through: OrderItems });
Product.belongsToMany(Order, { through: OrderItems });

(async () => {
  await sequelize.sync();

})();
