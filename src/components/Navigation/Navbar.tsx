import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { navItems } from "../../lib/config";
import { nanoid } from "nanoid";

export default function Navbar({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (n: boolean) => void;
}) {
    return (
        <nav>
            <div className="navigation-width">
                <div className="flex items-center justify-between">
                    <Link className="font-bold flex gap-2 text-2xl" href="/">
                        <h2>Torres Rehab</h2>
                    </Link>

                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-6 text-sm">
                                {navItems.map(({ href, label }) => (
                                    <li key={nanoid()}>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href={href}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <div className="hidden sm:flex">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium"
                                    href="https://hectorsosa.me"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="block md:hidden rounded cursor-pointer border border-gray-400 p-2 text-gray-600 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
