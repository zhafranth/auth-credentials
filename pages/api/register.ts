import { NextApiRequest, NextApiResponse } from "next";
import prisma from "libs/prismadb";
import bcrypt from "bcrypt";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { fullname, username, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        fullname,
        username,
        password: hashedPassword,
        role,
      },
    });

    return res.status(200).json({
      message: "Success created User",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return POST(req, res);
  }

  return res.status(400).end();
}
