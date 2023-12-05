import { cn } from "@/lib/utils";
import React, { FC } from "react";

type Props = {
  icon: JSX.Element;
  getText: string;
  from: string;
  classname?: string;
};

export default function DownloadApp({ icon, getText, from, classname }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[#F5F9FC] min-w-[16.2rem] bg-[#141416] py-2 px-8 cursor-pointer rounded-lg shadow-xl border-[#a8abad] border-[0.125rem]",
        classname
      )}
    >
      <div>{icon}</div>
      <div>
        <p className="text-sm uppercase">{getText}</p>
        <h3 className="my-0 text-xl font-bold">{from}</h3>
      </div>
    </div>
  );
}
