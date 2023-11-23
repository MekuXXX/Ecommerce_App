import * as z from "zod";

// Authentication Schemas
export const signUpSchema = z.object({
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
export const signInSchema = signUpSchema.pick({ email: true, password: true });

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
