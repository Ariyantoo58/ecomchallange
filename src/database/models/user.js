/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initUser = (sequelize, Types) => {
	class user extends Model {}
	user.init(
		{
			firstName: Types.STRING,
			lastName: Types.STRING,
			email: Types.STRING,
			role: Types.STRING,
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
