import { gql } from "graphql-tag";

const schema = gql`
  input SignInUser {
    email: String!
    password: String!
  }
  type User {
    id: String!
    username: String!
    email: String!
    password: String!
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    getUser(id: String!): String
  }
  type Mutation {
    signInUser(email: String!, password: String!): User
  }
`;
export default schema;
