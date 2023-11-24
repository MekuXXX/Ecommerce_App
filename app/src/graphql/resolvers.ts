import type {} from "./types";
import { Resolvers } from "./types/graphql";
const resolvers: Resolvers = {
  Query: {
    users: async () => {
      try {
        const data = [
          {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            username: "johndoe",
            email: "<EMAIL>",
            image: "https://picsum.photos/200/300",
          },
          {
            id: 2,
            username: "xUser_2",
            firstName: "Mohamed",
            lastName: "Ali",
            email: "XX2@gmail.com",
            image: "http://none.com",
          },
        ];

        return data.map((u: any) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
    searchUser: async (_: any, { value }: any) => {
      try {
        const response = await fetch(
          `${process.env.URL_API}/search?q=${value}`
        );
        const data = await response.json();

        return data.users.map((u: any) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error("Something went wrong");
      }
    },
  },
};

export default resolvers;
