import Link from "next/link";

export default function ActionButton({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="w-full flex justify-center md:justify-around md:w-fit text-sm font-medium rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
        >
            {label}
        </Link>
    );
}
