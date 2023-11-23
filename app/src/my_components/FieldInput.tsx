import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldValues } from "react-hook-form";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  control: unknown;
  id: number;
  name: string;
  fieldTpye: string;
};

export default function FieldInput({ control, name, fieldTpye }: Props) {
  const [parent] = useAutoAnimate();
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name.toLowerCase() as "email"}
      render={({ field }) => (
        <FormItem ref={parent}>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input
              placeholder={"Enter your " + name.toLowerCase()}
              type={fieldTpye}
              {...field}
            />
          </FormControl>
          <FormMessage className={"text-[0.75rem] px-[1px]"} />
        </FormItem>
      )}
    />
  );
}
