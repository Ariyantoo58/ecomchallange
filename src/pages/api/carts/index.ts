import { NextApiRequest, NextApiResponse } from "next";
import carts from "../../../database/models/carts";
import products from "../products";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const data = await carts.findAll({
				include: [
					{
						association: "product",
					},
				],
			});
			res.status(200).json({ status: true, data: data });
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
