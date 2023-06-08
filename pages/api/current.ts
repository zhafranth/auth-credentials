import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req, res);

    return res.status(200).json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      message: "Error kali",
    });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return GET(req, res);
  }

  return res.status(404).end();
}
