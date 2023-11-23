import React, { Suspense } from "react";
import SignUpFormServer from "@/my_components/SignUpFormServer";

import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  GithubIcon,
} from "@/my_components/Icons";
import Link from "next/link";
import HelloSignSection from "@/my_components/HelloSignSection";
import SignIcons from "@/my_components/SignIcons";

type Props = {};

const fields = [
  { id: 1, name: "Username", fieldTpye: "text" },
  { id: 2, name: "Email", fieldTpye: "text" },
  { id: 3, name: "Password", fieldTpye: "password" },
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
          "h-full md:min-h-screen flex-col col-span-2 md:col-span-1 p-12 flex justify-center max-w-[40rem] mx-auto xl:min-w-[35rem]"
        }
      >
        <div className={"mb-8"}>
          <h1 className={"text-[1.75rem] font-bold w-full"}>
            Create your account!
          </h1>
          <p className={"px-1"}>It’s free and easy</p>
        </div>
        <Suspense fallback={"Loading"}>
          <SignUpFormServer fields={fields} />
        </Suspense>
        <div>
          <div>
            <div className={"py-8 text-center"}>
              <SignIcons Icons={Icons} />
              <p className={"py-4"}>
                Already have an account?{" "}
                <Link
                  href={"/sign-in"}
                  className={
                    "hover:text-blue-500 transition hover:underline underline-offset-2 font-bold"
                  }
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
