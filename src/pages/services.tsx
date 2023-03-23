import { InferGetStaticPropsType } from "next";
import Meta from "../components/Meta";
import { getBio, getPages, getReviews, getServices } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/UI/button";
import Layout from "@/components/Layout/Layout";
import AppointmentModal from "@/components/Modals/AppointmentModal";
import {
  portableTextComponents,
  ProseH1,
  ProseLead,
  ProseSmall,
} from "@/components/UI/typography";
import Reviews from "@/components/Home/Reviews";
import Link from "next/link";

export default function Home({
  bio,
  pages,
  services,
  reviews,
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
      <Layout bio={bio} services={services}>
        <section className="container-width space-y-12 py-16">
          <div className="space-y-6">
            <header className="md:text-center space-y-2">
              <ProseH1>{pages[0].headline}</ProseH1>
              <ProseLead>{pages[0].tagline}</ProseLead>
            </header>
            <div className="space-y-6">
              {services.map((i, index) => (
                <div key={index} className="space-y-4 md:space-y-6 py-4">
                  <header className="flex flex-col justify-center sm:items-center gap-2">
                    <ProseH1 id={i.name.toLowerCase().replaceAll(" ", "-")}>
                      {i.name}
                    </ProseH1>
                    <ProseSmall>
                      <div className="flex sm:gap-2 flex-col sm:flex-row text-gray-500">
                        <span>Location: {i.location}</span>
                        <span className="hidden sm:inline">·</span>
                        <span>Time: {i.time}</span>
                      </div>
                    </ProseSmall>
                  </header>
                  <div className="flex flex-col items-start lg:flex-row gap-4">
                    <div
                      className={`space-y-4 lg:w-[50%] lg:sticky lg:top-32 ${
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
                        {i.name === "Osteopathy" ? (
                          <a
                            tabIndex={-1}
                            target="_blank"
                            rel="noreferrer"
                            href={i.href}
                          >
                            <Button variant="subtle">
                              Book an appointment
                            </Button>
                          </a>
                        ) : (
                          <AppointmentModal />
                        )}
                      </div>
                    </div>
                    <div className="py-2 lg:w-[50%]">
                      <PortableText
                        value={i.description}
                        components={portableTextComponents}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Reviews reviews={reviews} page={pages[2]} />
          <footer className="grid place-content-center gap-6 justify-items-center">
            <ProseLead>
              More questions? Send us a message using the button below
            </ProseLead>
            <Link tabIndex={-1} href="/contact">
              <Button variant="subtle" size="lg">
                Send a message
              </Button>
            </Link>
          </footer>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const bio = await getBio();
  const pages = await getPages();
  const services = await getServices();
  const reviews = await getReviews();

  return {
    props: {
      bio,
      pages,
      services,
      reviews,
    },
    revalidate: 60,
  };
}
