"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { AppleIcon, FacebookIcon, GoogleIcon, GithubIcon } from "./Icons";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";

type Props = {};
const fields = ["Email", "Password"];
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

export default function SingInForm() {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email("Email is not valid"),
    password: z.string().min(8, "Password is required"),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "example@example.com",
      password: "********",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const checkedValues = formSchema.parse(values);
      const res = await signIn("credentials", {
        email: checkedValues.email,
        password: checkedValues.password,
        redirect: false,
      });
      if (res?.ok === false) {
        return toast.error(res?.error);
      }
      toast.success("Login successfully");
      return router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((formField) => (
          <FormField
            key={formField}
            control={form.control}
            name={formField.toLowerCase() as "email" | "password"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={"Enter your " + formField.toLowerCase()}
                    type={formField.toLowerCase()}
                    {...field}
                  />
                </FormControl>
                <FormMessage className={"text-[0.75rem] px-[1px]"} />
              </FormItem>
            )}
          />
        ))}
        <p
          style={{ marginTop: "0.5rem", textAlign: "end" }}
          className={
            "hover:text-blue-500 cursor-pointer transition hover:underline underline-offset-2"
          }
        >
          Forget password?
        </p>
        <Button type="submit" className={"w-full rounded-xl"}>
          Sign in
        </Button>
      </form>
      <div className={"py-8 text-center"}>
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
    </Form>
  );
}
