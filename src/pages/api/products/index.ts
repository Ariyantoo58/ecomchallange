import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../database/models/products";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const data = await products.findAll();
			res.status(200).json({ status: true, data: data });
		}
		if (req.method === "POST") {
			const data = await products.create(req.body);
			res.status(200).json({ status: true, data: data });
		} else {
			res
				.status(400)
				.json({ response: "your method Wrong ", body: req.method });
		}
	} catch (error) {
		res.status(400).json({ error: error });
	}
}
