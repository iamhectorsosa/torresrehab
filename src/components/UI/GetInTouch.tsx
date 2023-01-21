import Link from "next/link";
import ActionButton from "./ActionButton";

export default function GetInTouch({
    buttonLabel,
    href,
    text,
}: {
    buttonLabel: string;
    href: string;
    text: string;
}) {
    return (
        <>
            <p className="text-center pt-4 text-lg text-gray-700">{text}</p>
            <ActionButton href={href} label={buttonLabel} />
        </>
    );
}
