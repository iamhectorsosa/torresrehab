import type { NavLink, Services2, Social } from "./types";

export const navItems: Array<NavLink> = [
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Reviews",
        href: "/reviews",
    },
    {
        label: "FAQ",
        href: "/faq",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export const serviceItems: Array<Services2> = [
    {
        label: "Consultation",
        href: "/services#consultation",
        description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        label: "Personal Training",
        href: "/services#personalTraining",
        description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        label: "Physical Eval",
        href: "/services#physicalEval",
        description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        label: "Coaching",
        href: "/services#coaching",
        description: "Lorem ipsum dolor sit amet consectetur.",
    },
];

export const socials: Array<Social> = [
    {
        type: "Location",
        href: "https://hectorsosa.me",
    },
    {
        type: "Facebook",
        href: "https://hectorsosa.me",
    },
    {
        type: "Instagram",
        href: "https://hectorsosa.me",
    },
    {
        type: "LinkedIn",
        href: "https://hectorsosa.me",
    },
    {
        type: "Email",
        href: "https://hectorsosa.me",
    },
    {
        type: "Phone",
        href: "https://hectorsosa.me",
    },
];
