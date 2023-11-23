import { ActivateTokenAction } from "@/lib/actions";
import React from "react";

type Props = {
  token: string;
};

export default function ActivateButton({ token }: Props) {
  return (
    <form action={ActivateTokenAction}>
      <input type="hidden" name="token" value={token} />
      <button type="submit">Activate</button>
    </form>
  );
}
