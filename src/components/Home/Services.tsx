import { nanoid } from "nanoid";
import { Pages, Services as ServicesType } from "../../lib/types";
import ActionButton from "../UI/ActionButton";
export default function Component({
    services,
    page,
}: {
    services: ServicesType;
    page: Pages[number];
}) {
    return (
        <div className="space-y-8">
            <div className="space-y-8">
                <header className="pb-2">
                    <h2 className="text-3xl font-bold sm:text-4xl text-center">
                        {page.headline}
                    </h2>

                    <p className="text-center pt-4 text-lg text-gray-700">
                        {page.tagline}
                    </p>
                </header>
                <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((i) => (
                        <div
                            key={nanoid()}
                            className="block rounded border overflow-hidden border-gray-100 shadow-sm "
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt={i.name}
                                src={i.image}
                                className="max-h-44 sm:max-h-32 w-full object-cover"
                            />

                            <div className="space-y-3 py-6 p-4">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    {i.name}
                                </h2>

                                <p className="text-gray-700">{i.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="flex flex-col justify-center gap-6 items-center">
                <ActionButton href="/services" label="Learn more" />
            </footer>
        </div>
    );
}
