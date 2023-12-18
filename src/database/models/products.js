/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initproduct = (sequelize, Types) => {
	class products extends Model {
		static associate(models) {
			// define association here
			products.belongsTo(models.carts, {
				foreignKey: "id",
			});
		}
	}
	products.init(
		{
			productName: Types.STRING,
			productDescription: Types.STRING,
			productImage: Types.STRING,
			productSlug: Types.STRING,
			productPrice: Types.INTEGER,
			productQuantity: Types.INTEGER,
			productFeatured: Types.BOOLEAN,
			productCategory: Types.JSON,
		},
		{
			sequelize,
			modelName: "products",
			tableName: "products",
		}
	);
	return products;
};

export default initproduct(connection, DataTypes);
