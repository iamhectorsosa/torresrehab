import { Questions } from "@/sanity/schemas/faqs";
import { Pages } from "@/sanity/schemas/pages";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Link from "next/link";

import { Button } from "../UI/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLead,
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

export default function Component({
  questions,
  limit,
  page,
}: {
  questions: Questions[];
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
        <div className="space-y-4">
          {questions.slice(0, limit ?? undefined).map((i, index) => (
            <details
              key={index}
              className="group [&_summary::-webkit-details-marker]:hidden"
              open={i.expanded}
            >
              <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 dark:bg-slate-800">
                <TypographyH3>{i.question}</TypographyH3>
                <svg
                  className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="p-4">
                <PortableText value={i.answer} components={components} />
              </div>
            </details>
          ))}
        </div>
      </article>
      <footer className="grid place-content-center gap-6 justify-items-center">
        {limit ? (
          <Link tabIndex={-1} href="/faq">
            <Button variant="subtle" size="lg">
              Go to our Frequently Asked Questions
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
