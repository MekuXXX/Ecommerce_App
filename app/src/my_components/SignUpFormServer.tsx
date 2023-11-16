import axios, { HttpStatusCode } from "axios";
import * as z from "zod";
import Link from "next/link";
import { AppleIcon, FacebookIcon, GoogleIcon, GithubIcon } from "./Icons";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/my_components/ClientButtons";
import { Suspense } from "react";

type Props = {};
const fields = ["Username", "Email", "Password"];
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

export default function SignUpFormServer() {
  const formSchema = z.object({
    username: z
      .string()
      .min(1, "Name is required")
      .max(16, "Max username is characters is 16"),
    email: z.string().email("Email is not valid"),
    password: z
      .string()
      .min(8, "Minimum password value must be at least 8 characters")
      .max(16, "Max password value must be at least 16 characters"),
  });

  async function onSubmit(formDate: FormData) {
    "use server";
    try {
      // const userData = formSchema.parse({
      //   username: formDate.get("username"),
      //   email: formDate.get("email"),
      //   password: formDate.get("password"),
      // });
      throw new Error("Invalid fields");
      console.log("This form is valid", {
        username: formDate.get("username"),
        email: formDate.get("email"),
        password: formDate.get("password"),
      });
    } catch (error: any) {
      return toast.error(error.message);
    }

    // try {
    //   const checkedValues = formSchema.parse(values);
    //   const res = await axios.post("/api/register", checkedValues);
    //   toast.success(res.data?.msg)
    //   if (res.status === HttpStatusCode.Created) router.push("/sign-in");
    // } catch (error: any) {
    //   toast.error(error.response?.data?.msg);
    // }
  }

  return (
    <div>
      <form action={onSubmit} className="space-y-8 flex flex-col">
        {fields.map((formField) => (
          <input
            name={formField.toLowerCase()}
            key={formField}
            placeholder={formField}
            className={"border border-red"}
          />
        ))}
        <SubmitButton />
      </form>
      <div>
        {/* <!-- className={"py-8 text-center"} --> */}
        <div className="icons flex justify-center gap-8">
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

        <p>
          {/*className={"py-4"}*/}
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
  );
}
