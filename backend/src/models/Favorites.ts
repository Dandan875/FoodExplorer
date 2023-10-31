import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index";
import { User } from "./Users";
import { Product } from "./Products";

interface FavoritesInterface extends Model{
  id: number;
}

export const Favorites = sequelize.define<FavoritesInterface>("Favorites", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED
  },

}, {
  
  timestamps: false

});

User.belongsToMany(Product, { through: Favorites });
Product.belongsToMany(User, { through: Favorites });

(async () => {
  await sequelize.sync();

})();
