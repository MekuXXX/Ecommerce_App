import { getServerSession } from "next-auth";
import prisma from "@/lib/prismaClient";

export default async function Home() {
  const data = await getServerSession();
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  const user = await prisma.user.findUnique({
    where: { email: data?.user?.email as string },
  });
  console.log("🚀 ~ file: page.tsx:10 ~ Home ~ user:", user);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      Main
    </main>
  );
}
