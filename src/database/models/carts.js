/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initCarts = (sequelize, Types) => {
	class carts extends Model {
		static associate(models) {
			// define association here
			this.hasMany(models.products, {
				foreignKey: "productId",
				as: "product",
			});
		}
	}
	carts.init(
		{
			productId: Types.INTEGER,
			quantity: Types.INTEGER,
			userId: Types.INTEGER,
		},
		{
			sequelize,
			modelName: "carts",
			tableName: "carts",
		}
	);

	return carts;
};

export default initCarts(connection, DataTypes);
