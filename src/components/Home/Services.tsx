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
              <div className="grid lg:grid-cols-2 lg:place-content-center py-9">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={i.name}
                  src={i.image}
                  className="rounded lg:h-[450px] w-full max-w-none lg:max-w-sm object-cover md:mx-auto shadow-xl"
                />

                <div className="space-y-4 py-6 md:text-center lg:text-left">
                  <span className="text-5xl text-slate-900 font-bold font-headings inline mr-2 opacity-75">
                    0{index + 1}
                  </span>
                  <Link
                    href={`/services#${i.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <ProseH2 className="text-5xl lg:text-6xl inline lg:block ">
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
