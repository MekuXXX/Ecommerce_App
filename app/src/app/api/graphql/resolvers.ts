const resolvers = {
  Query: {
    users: async () => {
      try {
        const response = await fetch(process.env.URL_API as string);
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