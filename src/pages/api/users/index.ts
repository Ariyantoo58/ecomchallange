import { NextApiRequest, NextApiResponse } from "next";
import user from "../../../database/models/user";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const users = await user.findAll();
    res.status(200).json({ status: true, users: users});
  }
  if (req.method === "POST") {
    const users = await user.create(
      req.body
    );
    res.status(200).json({ status: true, body: req.body });
  }
  if (req.method === "DELTE") {
    const users = await user.create(
      req.body
    );
    res.status(200).json({ status: true, body: req.body });
  }
  
  
  else {
      res.status(400).json({ response: "your method Wrong ", body: req.method });
  }
}