"use client";
import ActivateButton from "@/my_components/ActivateButton";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {};
type ErrorType = "invalid" | "expired" | "";
export default function page({}: Props) {
  let searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token") || "";
  const error = (searchParams.get("error") || "") as ErrorType;

  useEffect(() => {
    if (error) {
      router.push("/sign-up?tokenError=" + error);
    }
  }, [error]);

  return (
    <div>
      <h1>Click here to activate your account</h1>
      {token && <p>{token}</p>}
      {error && (
        <p>
          {error === "invalid"
            ? "This token is invalid"
            : "This token is expired"}
        </p>
      )}
      <ActivateButton token={token} />
    </div>
  );
}
