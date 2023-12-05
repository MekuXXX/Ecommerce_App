"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FieldInput from "./FieldInput";

type Props = {
  fields: {
    id: number;
    name: string;
    fieldTpye: string;
  }[];
};

export default function SingInForm({ fields }: Props) {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email("Email is not valid"),
    password: z.string().min(8, "Password is required"),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "mo7malo111@gmail.com",
      password: "********",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const checkedValues = formSchema.parse(values);
    const res = await signIn("credentials", {
      ...checkedValues,
      redirect: false,
    });
    console.log(res);
    if (!res?.ok) {
      toast.error("Error happened:", { description: res?.error });
    } else {
      toast.success("Login successfully");
      router.push("/");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((field) => (
          <FieldInput {...field} control={form.control} key={field.id} />
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
    </Form>
  );
}
