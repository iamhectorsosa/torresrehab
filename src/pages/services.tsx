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
        <div className="space-y-6">
          <header className="pb-2">
            <h2 className="text-3xl font-bold sm:text-4xl text-center">
              {pages[0].headline}
            </h2>

            <p className="text-center pt-4 text-lg text-gray-700">
              {pages[0].tagline}
            </p>
          </header>
          <div>
            {services.map((i, index) => (
              <div key={index} className="space-y-4 md:space-y-6 py-4">
                <header className="flex flex-col justify-center sm:items-center gap-2">
                  <h2 className="text-4xl font-bold md:text-5xl">{i.name}</h2>
                  <p className="flex sm:gap-2 flex-col sm:flex-row text-gray-500">
                    <span>Location: {i.location}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>Time: {i.time}</span>
                  </p>
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
                    <ActionButton href={i.href} label="Book an appointment" />
                  </div>
                  <div className="prose prose-slate min-w-full text-slate-800 md:max-h-[27.5rem] md:overflow-scroll">
                    <PortableText value={i.description} />
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
