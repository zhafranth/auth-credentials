import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "libs/prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.username) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma?.user.findUnique({
    where: {
      username: session.user.username,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }
  return { currentUser };
};

export default serverAuth;
