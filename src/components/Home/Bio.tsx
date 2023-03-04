import { About } from "@/sanity/schemas/about";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import CompaniesBanner from "../CompaniesBanner";
import { Button } from "../UI/button";
import {
  portableTextComponents,
  ProseH1,
  ProseH3,
  ProseLead,
} from "../UI/typography";

export default function Component({ bio }: { bio: About }) {
  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={bio.name}
          src={bio.image}
          className="max-h-60 md:max-h-96 w-full object-cover rounded shadow-xl"
        />
        <div className="space-y-2">
          <header>
            <ProseH3>{bio.name}</ProseH3>
            <ProseH1 className="text-5xl lg:text-6xl">{bio.title}</ProseH1>
          </header>
          <ProseLead>{bio.tagline}</ProseLead>
          <Link tabIndex={-1} href="/about" className="block w-fit">
            <Button variant="subtle" size="lg">
              Learn more about me
            </Button>
          </Link>
        </div>
      </div>
      <div className="pt-4">
        <CompaniesBanner />
      </div>
    </section>
  );
}
