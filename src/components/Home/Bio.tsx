import { About } from "@/sanity/schemas/about";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyList,
  TypographyP,
} from "../UI/typography";

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    h4: ({ children }) => <TypographyH4>{children}</TypographyH4>,
    normal: ({ children }) => <TypographyP>{children}</TypographyP>,
  },
  list: {
    bullet: ({ children }) => <TypographyList>{children}</TypographyList>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-orange-200/50 dark:before:bg-orange-800/50 relative inline-block">
        <span className="relative">{children}</span>
      </strong>
    ),
  },
};

export default function Component({ bio }: { bio: About }) {
  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={bio.name}
          src={bio.image}
          className="max-h-60 md:max-h-96 w-full object-cover rounded"
        />
        <div>
          <h3 className="font-zilla text-2xl font-semibold tracking-tight">
            {bio.name}
          </h3>
          <h1 className="font-zilla text-4xl font-extrabold tracking-tight lg:text-5xl">
            {bio.title}
          </h1>
          <div className="py-2">
            <PortableText value={bio.bio} components={components} />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <PortableText value={bio.description} components={components} />
      </div>
    </section>
  );
}
