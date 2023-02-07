import { About } from "@/sanity/schemas/about";
import { PortableText } from "@portabletext/react";

export default function Component({ bio }: { bio: About }) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1">
          <article className="space-y-4">
            <header className="space-y-2  sm:text-center">
              <div className="font-bold grid">
                <h2 className="text-black text-2xl sm:text-4xl">{bio.name}</h2>
                <h3 className="text-gray-500 text-3xl sm:text-5xl">
                  {bio.title}
                </h3>
              </div>
              <p>{bio.tagline}</p>
            </header>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={bio.name}
              src={bio.image}
              className="max-h-60 md:max-h-96 w-full object-cover rounded"
            />
            <div className="prose prose-slate min-w-full text-slate-800">
              <PortableText value={bio.description} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
