/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initCarts = (sequelize, Types) => {
	class carts extends Model {}
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

	carts.associate = function (models) {
		carts.hasMany(models.products, {
			foreignKey: "productId",
			as: "product",
		});
	};
	carts.associate = function (models) {
		carts.hasMany(models.user, {
			foreignKey: "userId",
			as: "user",
		});
	};
	return carts;
};

export default initCarts(connection, DataTypes);
