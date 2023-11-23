import React from "react";
import { StarIcon } from "@/my_components/Icons";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div
      className={`
            bg-[#FCFCFD] max-w-fit flex-between gap-3 py-4 px-6 rounded-[90px]

            `}
    >
      <StarIcon />
      <p>Logo</p>
    </div>
  );
}
