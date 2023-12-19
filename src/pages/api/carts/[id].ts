import { NextApiRequest, NextApiResponse } from "next";
import carts from "../../../database/models/carts";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	try {
		if (req.method === "DELETE") {
			const look = await carts.destroy({
				where: {
					id: id,
				},
			});
			res.status(200).json({ status: true, data: look, users: id });
		} else {
			res
				.status(400)
				.json({ response: "your method Wrong ", body: req.method });
		}
	} catch (error) {
		res.status(200).json({ status: `${error}` });
	}
}
