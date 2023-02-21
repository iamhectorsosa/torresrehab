import { InferGetStaticPropsType } from "next";
import Incentives from "../components/Home/Incentives";
import Meta from "../components/Meta";
import Footer from "../components/Layout/Footer";
import ActionButton from "../components/UI/ActionButton";
import { getBio, getIncentives, getPages, getServices } from "@/sanity/queries";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLead,
  TypographyList,
  TypographyP,
  TypographySmall,
} from "@/components/UI/typography";
import { Button } from "@/components/UI/button";

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
      <strong className="font-semibold">{children}</strong>
    ),
  },
};

export default function Home({
  bio,
  pages,
  services,
  incentives,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta
        title={pages[0].title}
        keywords={pages[0].keywords}
        description={pages[0].description}
        baseUrl={"https://torres-rehab.vercel.app"}
        path={"/services"}
        image={"/home.png"}
      />
      <section className="container-width space-y-12 py-12">
        <div className="space-y-6">
          <header className="md:text-center space-y-2">
            <TypographyH1> {pages[0].headline}</TypographyH1>
            <TypographyLead> {pages[0].tagline}</TypographyLead>
          </header>
          <div>
            {services.map((i, index) => (
              <div key={index} className="space-y-4 md:space-y-6 py-4">
                <header className="flex flex-col justify-center sm:items-center gap-2">
                  <TypographyH1 id={i.name.toLowerCase().replaceAll(" ", "-")}>
                    {i.name}
                  </TypographyH1>
                  <TypographySmall>
                    <div className="flex sm:gap-2 flex-col sm:flex-row text-gray-500">
                      <span>Location: {i.location}</span>
                      <span className="hidden sm:inline">·</span>
                      <span>Time: {i.time}</span>
                    </div>
                  </TypographySmall>
                </header>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className={`space-y-4 ${
                      index % 2 === 0 ? "md:order-last" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={i.name}
                      src={i.image}
                      className="min-h-80 md:h-96 w-full object-cover rounded"
                    />
                    <div>
                      <a
                        tabIndex={-1}
                        target="_blank"
                        rel="noreferrer"
                        href={i.href}
                      >
                        <Button variant="subtle">Book an appointment</Button>
                      </a>
                    </div>
                  </div>
                  <div className="py-2 md:max-h-[27.5rem] md:overflow-scroll">
                    <PortableText
                      value={i.description}
                      components={components}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-6">
            <Incentives incentives={incentives} page={pages[1]} />
          </div>
        </div>
      </section>
      <Footer bio={bio} services={services} />
    </>
  );
}

export async function getStaticProps() {
  const bio = await getBio();
  const pages = await getPages();
  const services = await getServices();
  const incentives = await getIncentives();

  return {
    props: {
      bio,
      pages,
      services,
      incentives,
    },
    revalidate: 60,
  };
}
