import { About } from "@/sanity/schemas/about";
import { PortableText } from "@portabletext/react";
import { portableTextComponents, ProseH1, ProseH3 } from "../UI/typography";

export default function Component({ bio }: { bio: About }) {
  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={bio.name}
          src={bio.image}
          className="max-h-60 md:max-h-96 w-full object-cover rounded shadow-lg"
        />
        <div>
          <ProseH3>{bio.name}</ProseH3>
          <ProseH1>{bio.title}</ProseH1>
          <div className="py-2">
            <PortableText value={bio.bio} components={portableTextComponents} />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <PortableText
          value={bio.description}
          components={portableTextComponents}
        />
      </div>
    </section>
  );
}
