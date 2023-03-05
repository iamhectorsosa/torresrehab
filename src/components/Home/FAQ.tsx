import { Questions } from "@/sanity/schemas/faqs";
import { Pages } from "@/sanity/schemas/pages";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { Button } from "../UI/button";
import ResizablePanel from "../UI/resizablePanel";
import {
  portableTextComponents,
  ProseH1,
  ProseH4,
  ProseLead,
} from "../UI/typography";

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
    <section className="space-y-8">
      <article className="space-y-6">
        <header className="md:text-center space-y-2">
          <ProseH1>{page.headline}</ProseH1>
          <ProseLead>{page.tagline}</ProseLead>
        </header>
        <div className="space-y-4">
          {questions.slice(0, limit ?? undefined).map((i, index) => (
            <div key={index}>
              <ResizablePanel>
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open={limit ? false : i.expanded}
                >
                  <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 dark:bg-slate-800">
                    <ProseH4>{i.question}</ProseH4>
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
                    <PortableText
                      value={i.answer}
                      components={portableTextComponents}
                    />
                  </div>
                </details>
              </ResizablePanel>
            </div>
          ))}
        </div>
      </article>
      <footer className="grid place-content-center gap-6 justify-items-center">
        {limit ? (
          <Link tabIndex={-1} href="/faq">
            <Button variant="subtle" size="lg">
              Red more Frequently Asked Questions
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
