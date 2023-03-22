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
        <div>
          {services.map((i, index) => (
            <div className="" key={index}>
              <div className="grid md:grid-cols-2 md:place-content-center mb-6 md:gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={i.name}
                  src={i.image}
                  className="rounded md:h-[450px] w-full max-w-none md:max-w-sm object-cover md:mx-auto shadow-xl"
                />

                <div className="space-y-4 py-6 text-left">
                  <span className="block text-5xl text-slate-900 font-bold font-headings md:inline mr-2 opacity-75">
                    0{index + 1}
                  </span>
                  <Link
                    href={`/services#${i.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <ProseH2 className="text-5xl md:text-6xl inline md:block ">
                      {i.name}
                    </ProseH2>
                  </Link>
                  <ProseLead>{i.tagline}</ProseLead>
                  <Link
                    className="block"
                    tabIndex={-1}
                    href={`/services#${i.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <Button variant="subtle" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
