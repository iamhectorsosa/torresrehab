import { ReactNode } from "react";
import Navbar from "./Navbar";
import ReviewModal from "../UI/ReviewModal";

export default function Layout({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <>
      <main className={className}>
        <Navbar />
        {children}
      </main>
      <ReviewModal />
    </>
  );
}
