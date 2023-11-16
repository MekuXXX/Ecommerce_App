import React, { Suspense } from "react";
import { ShoppingCartIcon, StarIcon } from "./Icons";
import Link from "next/link";
import { ModeToggle } from "./ModeButton";
import { Separator } from "@/components/ui/separator";
import ProfileMenu from "./ProfileMenu";
import { Button } from "@/components/ui/button";

type Props = {};
const Pages = [
  { page: "/", name: "Home" },
  { page: "/discover", name: "Discover" },
  { page: "/blog", name: "Blog" },
  { page: "/about-us", name: "About Us" },
  { page: "/contact", name: "Contact" },
];

export default async function Header({}: Props) {
  return (
    <header className={"flex gap-6 container py-2"}>
      <div
        className={`
            bg-[#E6E8EC] max-w-fit flex-between gap-3 py-4 px-6 rounded-[90px]
            `}
      >
        <StarIcon />
        <p>Logo</p>
      </div>
      <div className={"center"}>
        <Separator
          orientation="vertical"
          className={"text-[#E6E8EC] min-h-[2rem] w-[0.125rem]"}
        />
      </div>
      <nav className={"flex-between flex-grow"}>
        <ul className={"flex gap-6"}>
          {Pages.map(({ page, name }) => (
            <Button key={name} variant={"ghost"}>
              <Link href={page}>{name}</Link>
            </Button>
          ))}
        </ul>
        <ul className={"flex-between gap-4"}>
          <li>
            <Button variant={"ghost"} size="icon">
              <Link href={"/cart"}>
                <ShoppingCartIcon />
              </Link>
            </Button>
          </li>
          <li>
            <Suspense fallback={"Loading..."}>
              <ModeToggle />
            </Suspense>
          </li>
          <li>
            <Suspense fallback={"Loading..."}>
              <ProfileMenu />
            </Suspense>
          </li>
        </ul>
      </nav>
    </header>
  );
}
