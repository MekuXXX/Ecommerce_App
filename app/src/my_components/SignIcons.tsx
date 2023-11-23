import React from "react";

type Props = {
  Icons: {
    id: number;
    name: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  }[];
};

export default function SignIcons({ Icons }: Props) {
  return (
    <div className="flex justify-center gap-8">
      {Icons.map(({ id, name, Icon }) => (
        <div
          key={id}
          className={
            "border hover:border-cyan-500 border-transparent rounded-xl transition p-2 cursor-pointer"
          }
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
