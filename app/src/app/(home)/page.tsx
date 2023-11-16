import { getServerSession } from "next-auth";

export default async function Home() {
  const data = await getServerSession();
  console.log(data);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      Main
    </main>
  );
}
