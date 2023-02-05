import { Questions } from "@/sanity/schemas/faqs";
import { Pages } from "@/sanity/schemas/pages";
import { PortableText } from "@portabletext/react";
import { nanoid } from "nanoid";

import ActionButton from "../UI/ActionButton";
import GetInTouch from "../UI/GetInTouch";

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
      <header>
        <h2 className="text-3xl font-bold sm:text-4xl text-center">
          {page.headline}
        </h2>
        {!limit && (
          <p className="text-center pt-4 text-lg text-gray-700">
            {page.tagline}
          </p>
        )}
      </header>
      <div className="space-y-4">
        {questions.slice(0, limit ?? undefined).map((i) => (
          <details
            key={nanoid()}
            className="group [&_summary::-webkit-details-marker]:hidden"
            open={i.expanded}
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
              <h2 className="font-medium text-gray-900">{i.question}</h2>

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
            <div className="px-4 mt-4 min-w-full leading-relaxed text-gray-700 prose prose-slate">
              <PortableText value={i.answer} />
            </div>
          </details>
        ))}
      </div>
      <footer className="flex flex-col justify-center gap-6 items-center">
        {limit ? (
          <ActionButton href="/faq" label="Go to Frequently Asked Questions" />
        ) : (
          <GetInTouch
            href="/contact"
            buttonLabel="Send a message"
            text="Have questions? Send us a message using the button below"
          />
        )}
      </footer>
    </div>
  );
}
