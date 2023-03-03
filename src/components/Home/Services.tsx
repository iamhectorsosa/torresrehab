import { Pages } from "@/sanity/schemas/pages";
import { type Services } from "@/sanity/schemas/services";
import Link from "next/link";

import { Button } from "../UI/button";
import { ProseH1, ProseH2, ProseLead, ProseSubtle } from "../UI/typography";
export default function Component({
  services,
  page,
}: {
  services: Services[];
  page: Pages[number];
}) {
  return (
    <section className="space-y-8">
      <article className="space-y-6">
        <header className="md:text-center space-y-2">
          <ProseH1>{page.headline}</ProseH1>
          <ProseLead>{page.tagline}</ProseLead>
        </header>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((i, index) => (
            <Link
              href={`/services#${i.name.toLowerCase().replaceAll(" ", "-")}`}
              key={index}
              className="rounded overflow-hidden shadow hover:shadow-lg transition-shadow dark:border dark:border-slate-600 dark:hover:border-slate-500 dark:transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={i.name}
                src={i.image}
                className="max-h-60 w-full object-cover"
              />
              <div className="space-y-3 p-4">
                <ProseH2>{i.name}</ProseH2>
                <ProseSubtle>{i.tagline}</ProseSubtle>
              </div>
            </Link>
          ))}
        </div>
      </article>
      <footer className="grid place-content-center">
        <Link tabIndex={-1} href="/services">
          <Button variant="subtle" size="lg">
            Explore our services
          </Button>
        </Link>
      </footer>
    </section>
  );
}
