import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // if (!credentials?.username || !credentials?.password) {
        //   throw new Error("Invalid Credentials");
        // }
        // const user = await prisma.user.findUnique({
        //   where: {
        //     username: credentials?.username,
        //   },
        // });

        // if (!user || !user?.password) {
        //   throw new Error("Invalid Credentials");
        // }

        // const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);

        // if (!isCorrectPassword) {
        //   throw new Error("Invalid credentials");
        // }

        // FIXME: HANYAA NAMPILIN NAME DAN EMAIL SELAIN ITU TDK DITMAPILKAN
        return {
          name: "agus",
          role: "admin",
          email: "Agus",
        };
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/",
  //   error: "/",
  // },
};

export default NextAuth(authOptions);
