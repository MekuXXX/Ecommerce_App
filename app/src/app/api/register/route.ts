import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaClient";
import { HttpStatusCode } from "axios";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest, res: NextResponse) {
  const { username, email, password } = await req.json();
  const checkUser = await prisma.user.findUnique({ where: { email } });
  if (checkUser) {
    return NextResponse.json(
      { msg: "Email already exists" },
      { status: HttpStatusCode.BadRequest }
    );
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  let user = await prisma.user.create({
    data: { username, email, password: hashedPassword },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return NextResponse.json(
    { msg: "User created successfully", data: { user } },
    { status: HttpStatusCode.Created }
  );
}
