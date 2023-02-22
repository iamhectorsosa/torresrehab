import Navbar from "./Navbar";
import Footer from "./Footer";
import { Services } from "@/sanity/schemas/services";
import { About } from "@/sanity/schemas/about";

export default function Layout({
  bio,
  services,
  children,
}: {
  bio: About;
  services: Services[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer bio={bio} services={services} />
    </>
  );
}
