import { Incentives } from "@/sanity/schemas/incentives";
import { Pages } from "@/sanity/schemas/pages";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../UI/button";
import { TypographyH1, TypographyLead, TypographyP } from "../UI/typography";

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
    <div className="space-y-8">
      <article className="space-y-6">
        <header className="md:text-center space-y-2">
          <TypographyH1>{page.headline}</TypographyH1>
          <TypographyLead>{page.tagline}</TypographyLead>
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
                <TypographyP>{i.description}</TypographyP>
              </dd>
            </div>
          ))}
        </dl>
      </article>
      <footer className="grid place-content-center gap-6 justify-items-center">
        {limit ? (
          <Link tabIndex={-1} href="/services">
            <Button variant="subtle" size="lg">
              Learn more about our the benefits
            </Button>
          </Link>
        ) : (
          <>
            <TypographyLead>
              More questions? Send us a message using the button below
            </TypographyLead>
            <Link tabIndex={-1} href="/contact">
              <Button variant="subtle" size="lg">
                Send a message
              </Button>
            </Link>
          </>
        )}
      </footer>
    </div>
  );
}
