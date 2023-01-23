import { nanoid } from "nanoid";
import Link from "next/link";
import { ReactNode } from "react";
import { navItems } from "../../lib/config";

export default function Sidenav({
    isOpen,
    setIsOpen,
    children,
}: {
    isOpen: boolean;
    setIsOpen: (n: boolean) => void;
    children: ReactNode;
}) {
    return (
        <aside className="drawer absolute bg-white text-black">
            <input
                checked={isOpen}
                readOnly
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content">{children}</div>
            <div className="drawer-side  ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="drawer-overlay"
                ></button>
                <ul className="menu p-6 w-80 bg-white text-black">
                    <Link className="font-bold block text-2xl pb-4" href="/">
                        <h2>Torres Training</h2>
                    </Link>

                    {navItems.map(({ href, label }) => (
                        <li key={nanoid()}>
                            <Link className="active:bg-gray-600" href={href}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
