import Footer from "@/my_components/Footer";
import Header from "@/my_components/Header";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Separator />
      <main className={"container"}>{children}</main>
      <Footer />
    </>
  );
}
