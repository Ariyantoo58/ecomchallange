/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initUser = (sequelize, Types) => {
	class user extends Model {
		static associate(models) {
			// define association here
			user.hasMany(models.products, {
				foreignKey: "id",
			});
		}
	}
	user.init(
		{
			firstName: Types.STRING,
			lastName: Types.STRING,
			email: Types.STRING,
			role: Types.STRING,
			uid: Types.STRING,
		},
		{
			sequelize,
			modelName: "users",
			tableName: "users",
		}
	);
	return user;
};

export default initUser(connection, DataTypes);
