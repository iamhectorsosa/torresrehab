import { nanoid } from "nanoid";
import { InferGetStaticPropsType } from "next";
import Incentives from "../components/Home/Incentives";
import Meta from "../components/Meta";
import Footer from "../components/Navigation/Footer";
import ActionButton from "../components/UI/ActionButton";
import { getBio, getIncentives, getPages, getServices } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";

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
        <div className="space-y-12">
          <header className="pb-2">
            <h2 className="text-3xl font-bold sm:text-4xl text-center">
              {pages[0].headline}
            </h2>

            <p className="text-center pt-4 text-lg text-gray-700">
              {pages[0].tagline}
            </p>
          </header>
          <div className="space-y-12 sm:space-y-8">
            {services.map((i, index) => (
              <div
                className="grid sm:grid-cols-5 sm:items-center
                             gap-4"
                key={nanoid()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={i.name}
                  src={i.image}
                  className={`min-h-60 w-full object-cover sm:col-span-3 rounded ${
                    index % 2 === 0 ? "sm:order-last" : ""
                  }`}
                />
                <div className="space-y-3 sm:col-span-2">
                  <h2 className="text-2xl font-bold sm:text-3xl">{i.name}</h2>
                  <div className="grid sm:grid-cols-2 text-sm">
                    <p className="text-gray-700">Location: {i.location}</p>
                    <p className="text-gray-700">Time: {i.time}</p>
                  </div>
                  <div className="prose prose-slate min-w-full text-slate-800">
                    <PortableText value={i.description} />
                  </div>
                  <ActionButton href={i.href} label="Book Now" />
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
