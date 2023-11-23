"use client";
import axios, { HttpStatusCode } from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AppleIcon, FacebookIcon, GoogleIcon, GithubIcon } from "./Icons";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Example",
      email: "example@example.com",
      password: "********",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const checkedValues = formSchema.parse(values);
      const res = await axios.post("/api/register", checkedValues);
      toast.success(res.data?.msg);
      if (res.status === HttpStatusCode.Created) router.push("/sign-in");
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
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
                    {...field}
                  />
                </FormControl>
                <FormMessage className={"text-[0.75rem] px-[1px]"} />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          className={"w-full rounded-xl"}
          disabled={loading}
        >
          Sign Up
        </Button>
      </form>

      <div className={"py-8 text-center"}>
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
    </Form>
  );
}
