import React, { Suspense } from "react";
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  GithubIcon,
} from "@/my_components/Icons";
import SingInForm from "@/my_components/SingInForm";
import Link from "next/link";
import HelloSignSection from "@/my_components/HelloSignSection";
import SignIcons from "@/my_components/SignIcons";
type Props = {};
const fields = [
  { id: 1, name: "Email", fieldTpye: "text" },
  { id: 2, name: "Password", fieldTpye: "password" },
];
const Icons = [
  {
    id: 1,
    name: "apple",
    Icon: AppleIcon,
  },
  {
    id: 2,
    name: "google",
    Icon: GoogleIcon,
  },
  {
    id: 3,
    name: "facebook",
    Icon: FacebookIcon,
  },
  {
    id: 4,
    name: "github",
    Icon: GithubIcon,
  },
];
export default function SignIn({}: Props) {
  return (
    <div className={"grid grid-cols-2 min-w-full min-h-screen"}>
      <HelloSignSection />
      <section
        className={
          "h-full md:min-h-screen flex-col col-span-2 md:col-span-1 p-12 flex justify-center max-w-[40rem] md:mx-auto xl:min-w-[35rem]"
        }
      >
        <div className={"mb-8"}>
          <h1 className={"text-[1.75rem] font-bold w-full"}>Welcome back!</h1>
          <p className={"text-[0.85rem] px-1"}>Meet the good taste today</p>
        </div>
        <div>
          <Suspense fallback={"Loading"}>
            <SingInForm fields={fields} />
          </Suspense>
          <div className={"py-8 text-center"}>
            <SignIcons Icons={Icons} />
            <p className={"py-4"}>
              No Account?{" "}
              <Link
                href={"/sign-up"}
                className={
                  "hover:text-blue-500 transition hover:underline underline-offset-2 font-bold"
                }
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
