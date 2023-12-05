import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import RedditProvider from "next-auth/providers/reddit";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { SendTokenMail } from "@/lib/actions";
import { graphqlClient } from "@/graphql/graphqlClient";
import { gql } from "@/graphql/types";
import { prisma } from "#/prisma/prismaClient";

const AuthSchema = gql(`
  query Auth($userId: String!){
    getUser(id: $userId) 
  }
  mutation CheckIsSignedUser($email: String!,$password: String!) {
    signInUser(email: $email, password: $password) {
      id
      email
      password
      createdAt
    }
  }
`);
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // RedditProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    // FacebookProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) {
          throw new Error("User is not found");
        }
        if (!user.isActive) {
          await SendTokenMail({
            id: user.id,
            username: user.username,
            email: user.email,
          });
          throw new Error("Please activate the account, We sent an email");
        }

        const isPassValid = await bcrypt.compare(
          credentials?.password!,
          user.password
        );

        if (!isPassValid) {
          throw new Error("Invalid password");
        }

        return {
          email: user.email,
          name: user.username,
          id: user.id,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
});

export { handler as GET, handler as POST };
// const prisma = new PrismaClient();
// const user = await prisma.user.findUnique({
//   where: { email: credentials?.email },
// });

// if (!user) {
//   throw new Error("User is not found");
// }
// if (!user.isActive) {
//   await SendTokenMail({
//     id: user.id,
//     username: user.username,
//     email: user.email,
//   });
//   throw new Error("Please activate the account, We sent an email");
// }

// const isPassValid = await bcrypt.compare(
//   credentials?.password!,
//   user.password
// );

// if (!isPassValid) {
//   throw new Error("Invalid password");
// }

// return {
//   email: user.email,
//   name: user.username,

//   id: user.id,
// };
