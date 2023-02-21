import { Pages } from "@/sanity/schemas/pages";
import { Reviews } from "@/sanity/schemas/reviews";
import dayjs from "dayjs";
import Link from "next/link";
import { Button } from "../UI/button";
import { TypographyH1, TypographyLead } from "../UI/typography";

export default function Component({
  reviews,
  limit,
  page,
}: {
  reviews: Reviews[];
  limit?: number;
  page: Pages[number];
}) {
  return (
    <div
      className={`bg-gray-50 dark:bg-slate-800 rounded px-4 sm:px-6 ${
        limit ? "space-y-6 py-8" : "space-y-8 py-12"
      }`}
    >
      <header className="md:text-center space-y-2">
        <TypographyH1>{page.headline}</TypographyH1>
        <TypographyLead>{page.tagline}</TypographyLead>
      </header>
      {limit ? (
        <div className="lg:col-span-2 lg:mx-0">
          <div className="carousel gap-4">
            {reviews.slice(0, limit).map((i, index) => (
              <div key={index} className="carousel-item">
                <blockquote className="max-w-sm sm:max-w-md bg-white dark:bg-slate-900/75 p-10">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
                      {i.title}
                    </h3>
                    <p className="text-gray-600">{i.message}</p>
                    <p className="text-gray-500 uppercase text-sm tracking-wide">
                      - {i.name} · {dayjs(i.date).format("DD MMM YYYY")}
                    </p>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {reviews.map((i, index) => (
            <div key={index}>
              <blockquote className="bg-white dark:bg-slate-900/75 p-10 rounded">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-pink-600 dark:text-slate-200">
                    {i.title}
                  </h3>
                  <p className="text-gray-600">{i.message}</p>
                  <p className="text-gray-500 uppercase text-xs tracking-wide">
                    - {i.name} · {dayjs(i.date).format("DD MMM YYYY")}
                  </p>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      )}
      <footer className="grid place-content-center gap-6 justify-items-center">
        {limit ? (
          <Link tabIndex={-1} href="/reviews">
            <Button variant="subtle" size="lg">
              Read more reviews
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
