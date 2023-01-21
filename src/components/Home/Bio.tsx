import { About } from "../../lib/types";

export default function Component({ bio }: { bio: About }) {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
                    <div className="relative h-64 overflow-hidden sm:h-80 md:h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt={bio.name}
                            src={bio.image}
                            className="absolute inset-0 h-full w-full object-cover shadow rounded"
                        />
                    </div>

                    <div className="md:py-12">
                        <article className="space-y-4 text-gray-600">
                            <h2 className="text-3xl font-bold sm:text-4xl grid">
                                <span className="text-black text-2xl">
                                    {bio.name}
                                </span>
                                <span className="text-gray-500">
                                    {bio.title}
                                </span>
                            </h2>
                            <p>{bio.tagline}</p>

                            <p>{bio.description}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
