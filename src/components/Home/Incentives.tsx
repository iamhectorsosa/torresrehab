import { Incentives } from "@/sanity/schemas/incentives";
import { Pages } from "@/sanity/schemas/pages";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../UI/button";
import { ProseH1, ProseLead, ProseP } from "../UI/typography";

export default function Component({
  incentives,
  limit,
  page,
}: {
  incentives: Incentives[];
  limit?: number;
  page: Pages[number];
}) {
  return (
    <section className="space-y-8">
      <article className="space-y-6">
        <header className="md:text-center space-y-2">
          <ProseH1 id="benefits">{page.headline}</ProseH1>
          <ProseLead>{page.tagline}</ProseLead>
        </header>
        <dl className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {incentives.slice(0, limit ?? undefined).map((i, index) => (
            <div key={index} className="relative">
              <dt>
                <CheckIcon
                  className="absolute mt-1 h-6 w-6"
                  aria-hidden="true"
                />
                <span>{i.headline}</span>
              </dt>
              <dd className="ml-10">
                <ProseP>{i.description}</ProseP>
              </dd>
            </div>
          ))}
        </dl>
      </article>
      <footer className="grid place-content-center gap-6 justify-items-center">
        {limit ? (
          <Link tabIndex={-1} href="/services#benefits">
            <Button variant="subtle" size="lg">
              Learn more about our the benefits
            </Button>
          </Link>
        ) : (
          <>
            <ProseLead>
              More questions? Send us a message using the button below
            </ProseLead>
            <Link tabIndex={-1} href="/contact">
              <Button variant="subtle" size="lg">
                Send a message
              </Button>
            </Link>
          </>
        )}
      </footer>
    </section>
  );
}
