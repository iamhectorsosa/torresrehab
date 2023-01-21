import { ReactNode, useState } from "react";
import Footer from "./Navigation/Footer";
import Motion from "./Navigation/Motion";
import Navbar from "./Navigation/Navbar";
import Sidenav from "./Navigation/Sidenav";
import ReviewModal from "./UI/ReviewModal";

export default function Layout({
    className,
    children,
}: {
    className: string;
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <main className={className}>
                <Sidenav isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                    <Motion>{children}</Motion>
                    <Footer />
                </Sidenav>
            </main>
            <ReviewModal />
        </>
    );
}
