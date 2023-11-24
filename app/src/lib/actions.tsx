"use server";
import prisma from "../../prisma/prismaClient";
import bcrypt from "bcrypt";
import { SignUpType, signUpSchema } from "./Schemas";
import { randomUUID } from "crypto";
import { sendMail } from "./nodemailer";
import ActivateUser from "@/emails/ActivateUser";
import { render } from "@react-email/render";
import { redirect } from "next/navigation";

type SendTokenMaleType = {
  id: string;
  username: string;
  email: string;
};

export async function SendTokenMail(data: SendTokenMaleType) {
  const { id, username, email } = data;
  const token = await prisma.activateToken.create({
    data: {
      userId: id,
      activateToken: `x21${randomUUID()}x21${randomUUID()}x21`.replace("-", ""),
    },
  });
  const emailHtml = render(
    <ActivateUser userFirstname={username} token={token.activateToken} />
  );
  const MailOptions = {
    email,
    subject: "Activate your account",
    htmlBody: emailHtml,
  };

  await sendMail({ ...MailOptions, service: "gmail" });
}
export async function ActivateTokenAction(data: FormData) {
  const activateToken = (data.get("token") || "") as string;
  console.log(activateToken);
  const isTokenValid =
    activateToken.startsWith("x21") && activateToken.endsWith("x21");
  if (!isTokenValid)
    redirect(process.env.NEXTAUTH_URL + "/activate?error=invalid");
  const user = await prisma.user.findFirst({
    where: {
      token: {
        some: {
          activateToken,
          activatedAt: null,
          createdAt: { gt: new Date(Date.now() - 12 * 60 * 60 * 1000) },
        },
      },
    },
  });
  if (!user) redirect(process.env.NEXTAUTH_URL + "/activate?error=expired");

  await prisma.user.update({
    where: { id: user.id },
    data: { isActive: true },
  });
  await prisma.activateToken.update({
    where: {
      userId: user.id,
      activatedAt: null,
      activateToken,
    },
    data: {
      activatedAt: new Date(Date.now()),
    },
  });
  await prisma.activateToken.deleteMany({ where: { activatedAt: null } });
  redirect(process.env.NEXTAUTH_URL + "/sign-in");
}

export async function signUpAction(data: SignUpType) {
  const { username, email, password } = signUpSchema.parse(data);
  const isUserExist = await prisma.user.findUnique({ where: { email } });

  if (isUserExist) {
    throw new Error("Email is already exist");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const { id } = await prisma.user.create({
      data: { username, email, password: hashedPassword },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    await SendTokenMail({ id, username, email });

    return "Email is created successfully, Please verify it!!";
  } catch (error) {
    throw new Error("There is error happen during sign up");
  }
}
