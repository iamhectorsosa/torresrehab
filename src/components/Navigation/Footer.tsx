import dayjs from "dayjs";
import { navItems, serviceItems, socials } from "../../lib/config";
import {
    AiOutlineCompass,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
} from "react-icons/ai";
import { Social } from "../../lib/types";
import { ReactNode } from "react";
import { nanoid } from "nanoid";
import Link from "next/link";

function getIcon(social: Social["type"]): ReactNode {
    switch (social) {
        case "Location":
            return <AiOutlineCompass className="w-6 h-6" />;
        case "Facebook":
            return <AiOutlineFacebook className="w-6 h-6" />;
        case "Instagram":
            return <AiOutlineInstagram className="w-6 h-6" />;
        case "LinkedIn":
            return <AiOutlineLinkedin className="w-6 h-6" />;
        case "Email":
            return <AiOutlineMail className="w-6 h-6" />;
        case "Phone":
            return <AiOutlinePhone className="w-6 h-6" />;
    }
}

export default function Footer() {
    return (
        <footer
            aria-label="Site Footer"
            className="bg-white lg:grid lg:grid-cols-5"
        >
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </div>

            <div className="px-6 py-16 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs tracking-wide text-gray-500 uppercase">
                                Get in touch
                            </span>

                            <a
                                href="#"
                                className="block text-xl font-medium text-gray-900 hover:opacity-75 sm:text-2xl"
                            >
                                +351 961 379 705
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Monday to Friday: 8am - 5pm</li>
                            <li>Weekend: 10am - 1pm</li>
                        </ul>

                        <ul className="flex gap-6 mt-8">
                            {socials.map(({ href, type }) => (
                                <li key={nanoid()}>
                                    <a
                                        href={href}
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">{type}</span>
                                        {getIcon(type)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">
                                Services
                            </p>

                            <nav
                                aria-label="Footer Navigation - Services"
                                className="mt-6"
                            >
                                <ul className="space-y-4 text-sm">
                                    {serviceItems.map(({ href, label }) => (
                                        <li key={nanoid()}>
                                            <Link
                                                className="text-gray-700 transition hover:opacity-75"
                                                href={href}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">More</p>

                            <nav
                                aria-label="Footer Navigation - Company"
                                className="mt-6"
                            >
                                <ul className="space-y-4 text-sm">
                                    {navItems
                                        .filter(
                                            ({ label }) => label !== "Services"
                                        )
                                        .map(({ href, label }) => (
                                            <li key={nanoid()}>
                                                <Link
                                                    className="text-gray-700 transition hover:opacity-75"
                                                    href={href}
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="pt-12 mt-12 border-t border-gray-100">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <nav aria-label="Footer Navigation - Support">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <Link
                                        href="/faq"
                                        className="text-gray-500 transition hover:opacity-75"
                                    >
                                        Frequently Asked Questions
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; {dayjs().format("YYYY")} Fabio Torres. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
