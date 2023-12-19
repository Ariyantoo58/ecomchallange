import { NextApiRequest, NextApiResponse } from "next";
// import carts from "../../../database/models/carts";
import products from "../products";
import carts from "../../../database/models/carts";
import connection from "@/database/connection";
import { QueryTypes } from "sequelize";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const query = `SELECT * FROM carts
						   INNER JOIN products ON carts.productId = products.id
						   INNER JOIN users ON carts.userId = users.id  
						   `;
			const data = await connection.query(query, { type: QueryTypes.SELECT });

			res.status(200).json({ status: true, data: data, model: products });
		}
		if (req.method === "POST") {
			const data = await carts.create(req.body);
			res.status(200).json({ status: true, data: data });
		} else {
			res
				.status(400)
				.json({ response: "your method Wrong ", body: req.method });
		}
	} catch (error: any) {
		res.status(400).json({ error: `${error.message}` });
	}
}
