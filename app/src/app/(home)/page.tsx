import { getServerSession } from "next-auth";
import { prisma } from "#/prisma/prismaClient";
import ProductCard from "@/my_components/ProductCard";

const products = [
  {
    title: "Chocolate Cheesecake",
    price: 20.99,
    selled: 120,
    rate: 4,
  },
  {
    title: "Chocolate Cheesecake",
    price: 20.99,
    selled: 120,
    rate: 4,
  },
  {
    title: "Chocolate Cheesecake",
    price: 35.99,
    selled: 120,
    rate: 4.6,
  },
  {
    title: "Chocolate Cheesecake",
    price: 223.99,
    selled: 120,
    rate: 4.224,
  },
  {
    title: "Chocolate Cheesecake",
    price: 20.99,
    selled: 120,
    rate: 4,
  },
  {
    title: "Chocolate Cheesecake",
    price: 10.99,
    selled: 120,
    rate: 3,
  },
];
export default async function Home() {
  const data = await getServerSession();
  // console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  const user = await prisma.user.findUnique({
    where: { email: data?.user?.email as string },
  });
  // console.log("🚀 ~ file: page.tsx:10 ~ Home ~ user:", user);
  return (
    <main className="flex flex-col items-center justify-between">
      Main
      <div className="flex flex-wrap gap-x-4 gap-y-6">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}
