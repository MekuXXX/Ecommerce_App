import React from "react";
import { getServerSession } from "next-auth";

type Props = {};

export default async function Protected({}: Props) {
  const data = await getServerSession();
  console.log(data);
  return <div>Protected</div>;
}
