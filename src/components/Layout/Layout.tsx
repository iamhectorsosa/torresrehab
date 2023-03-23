import Navbar from "./Navbar";
import Footer from "./Footer";
import { Services } from "@/sanity/schemas/services";
import { About } from "@/sanity/schemas/about";
import { MotionConfig } from "framer-motion";

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
    <MotionConfig transition={{ duration: 0.4 }}>
      <Navbar services={services} />
      {children}
      <Footer bio={bio} services={services} />
    </MotionConfig>
  );
}
