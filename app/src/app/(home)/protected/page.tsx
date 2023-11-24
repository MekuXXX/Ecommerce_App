import React from "react";

import { graphqlClient } from "../../../graphql/graphqlClient";
import { gql, makeFragmentData, useFragment } from "@/graphql/types";

const GetAllUsersQuery = gql(`  
query GetUser {
    users {
      id
      firstName
    }
  }`);
type Props = {};
export default async function Protected({}: Props) {
  const { users } = await graphqlClient.request(GetAllUsersQuery);

  return (
    <div>
      <h1>Graphql Data</h1>
      <ul>
        {users?.map((user) => (
          <li>
            {user?.firstName} with id: {user?.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
