import { CheckIcon } from "@heroicons/react/24/outline";
import { nanoid } from "nanoid";
import { Incentives, Pages } from "../../lib/types";
import ActionButton from "../UI/ActionButton";
import GetInTouch from "../UI/GetInTouch";

export default function Component({
    incentives,
    limit,
    page,
}: {
    incentives: Incentives;
    limit?: number;
    page: Pages[number];
}) {
    return (
        <div className="space-y-8">
            <header className="pb-2">
                <h2 className="text-3xl font-bold sm:text-4xl text-center">
                    {page.headline}
                </h2>

                <p className="text-center pt-4 text-lg text-gray-700">
                    {page.tagline}
                </p>
            </header>
            <dl className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                {incentives.slice(0, limit ?? undefined).map((i) => (
                    <div key={nanoid()} className="relative">
                        <dt>
                            <CheckIcon
                                className="absolute mt-1 h-6 w-6"
                                aria-hidden="true"
                            />
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">
                                {i.headline}
                            </p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">
                            {i.description}
                        </dd>
                    </div>
                ))}
            </dl>
            <footer className="flex flex-col justify-center gap-6 items-center">
                {limit ? (
                    <ActionButton href="/services" label="Go to Services" />
                ) : (
                    <GetInTouch
                        href="/contact"
                        buttonLabel="Send a message"
                        text="Have questions? Send us a message using the button below"
                    />
                )}
            </footer>
        </div>
    );
}
