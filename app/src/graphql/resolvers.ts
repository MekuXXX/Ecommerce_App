import type {} from "./types";
import { Resolvers } from "./types/graphql";
import { prisma } from "#/prisma/prismaClient";
import { SendTokenMail } from "@/lib/actions";
import bcrypt from "bcrypt";
const resolvers: Resolvers = {
  Query: {
    getUser: async () => {
      return "Done";
    },
  },
  Mutation: {
    signInUser: async (_, { email, password }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      console.log(user);
      if (!user) {
        throw new Error("User is not found");
      }
      const retUser = {
        ...user,
        createdAt: user?.createdAt.toLocaleDateString() as string,
        updatedAt: user?.updatedAt.toLocaleDateString() as string,
      };
      if (!user.isActive) {
        await SendTokenMail({
          id: user.id,
          username: user.username,
          email: user.email,
        });
        throw new Error("Please activate the account, We sent an email");
      }

      const isPassValid = await bcrypt.compare(password, user.password);

      if (!isPassValid) {
        throw new Error("Invalid password");
      }
      return retUser;
    },
  },
};

export default resolvers;
