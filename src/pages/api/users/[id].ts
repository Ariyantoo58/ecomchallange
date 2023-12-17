import { NextApiRequest, NextApiResponse } from "next";
import user from "../../../database/models/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === "GET") {
    const look = await user.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json({ status: true,data:look, users: id });
  }
  if (req.method === "DELETE") {
    const look = await user.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ status: true, users: id });
  }
  
  else {
      res.status(400).json({ response: "your method Wrong ", body: req.method });
  }
}