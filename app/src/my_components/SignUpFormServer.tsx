"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useRouter, useSearchParams } from "next/navigation";
import { SignUpType, signUpSchema } from "@/lib/Schemas";
import { useFormStatus } from "react-dom";
import { signUpAction } from "@/lib/actions";
import FieldInput from "./FieldInput";
import { useEffect } from "react";

type Props = {
  fields: {
    id: number;
    name: string;
    fieldTpye: string;
  }[];
};

export default function SignUpForm({ fields }: Props) {
  const { pending } = useFormStatus();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenError = searchParams.get("tokenError") || "";

  const handleTokenError = (error: string) => {
    switch (error) {
      case "expired":
        toast.error("Activation token has expired. Please request a new one.");
        break;
      case "invalid":
        toast.error(
          "Invalid activation token. Please check the token and try again."
        );
        break;
      default:
        toast.error("Error in activation token");
        break;
    }
  };

  useEffect(() => {
    if (tokenError) {
      handleTokenError(tokenError);
    }
  }, [tokenError]);

  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "Example",
      email: "mo7malo110@gmail.com",
      password: "********",
    },
  });

  async function onSubmit(data: SignUpType) {
    // To handle client side validation to display error message
    signUpSchema.parse(data);
    try {
      // To handle logic and server side validation
      const res = await signUpAction(data);
      toast.success(res);
      router.push("/sign-in");
    } catch (error: any) {
      toast.error("Something went wrong", {
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        action={form.handleSubmit(onSubmit) as unknown as string}
        className="space-y-8"
      >
        {fields.map((field) => (
          <FieldInput {...field} control={form.control} key={field.id} />
        ))}
        <Button
          type="submit"
          className={"w-full rounded-xl"}
          disabled={pending}
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
