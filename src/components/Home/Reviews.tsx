import { Pages } from "@/sanity/schemas/pages";
import { Reviews } from "@/sanity/schemas/reviews";
import { useState } from "react";
import { Button } from "../UI/button";
import { SlidePanel } from "../UI/slidePanel";
import { ProseH1, ProseLead, ProseP, ProseSubtle } from "../UI/typography";

export default function Component({
  reviews,
  page,
}: {
  reviews: Reviews[];
  page: Pages[number];
}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="bg-gray-50 dark:bg-slate-800 rounded px-4 sm:px-6 space-y-6 py-8">
        <header className="md:text-center space-y-2">
          <ProseH1>{page.headline}</ProseH1>
          <ProseLead>{page.tagline}</ProseLead>
        </header>
        <SlidePanel>
          <blockquote className=" bg-white dark:bg-slate-700/75 p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-pink-500 dark:text-white sm:text-2xl">
                {reviews[count].title}
              </h3>
              <ProseP>{reviews[count].message}</ProseP>
              <ProseSubtle>
                - <span className="uppercase">{reviews[count].name}</span>
              </ProseSubtle>
            </div>
          </blockquote>
        </SlidePanel>
        <div className="flex lg:justify-center gap-2">
          <Button
            onClick={() => {
              if (count === 0) {
                setCount(reviews.length - 1);
              } else {
                setCount(count - 1);
              }
            }}
            variant="subtle"
            className="rounded-full h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Button>
          <Button
            onClick={() => {
              if (count === reviews.length - 1) {
                setCount(0);
              } else {
                setCount(count + 1);
              }
            }}
            variant="subtle"
            className="rounded-full h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
}
