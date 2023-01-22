export type NavLink = {
    label: string;
    href: string;
};

export type Services2 = NavLink & {
    description: string;
};

export type Social = {
    type:
        | "Location"
        | "Facebook"
        | "Instagram"
        | "LinkedIn"
        | "Email"
        | "Phone";
    href: string;
};

export type About = {
    name: string;
    title: string;
    image: string;
    tagline: string;
    description: string;
    weekdaySchedule: string;
    weekendSchedule: string;
    phoneNumber: string;
    email: string;
    instagram: string;
    facebook: string;
};

export type Pages = Array<{
    order: number;
    title: string;
    headline: string;
    tagline: string;
    description: string;
    keywords: string;
}>;

export type Services = Array<{
    order: number;
    name: string;
    tagline: string;
    description: string;
    image: string;
    location: string;
    time: string;
    href: string;
}>;

export type Incentives = Array<{
    order: number;
    headline: string;
    description: string;
}>;

export type Reviews = Array<{
    read: boolean;
    title: string;
    message: string;
    name: string;
    date: string;
}>;

export type Questions = Array<{
    order: number;
    expanded: boolean;
    question: string;
    answer: string;
}>;
