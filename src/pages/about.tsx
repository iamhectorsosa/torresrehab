import Bio from "../components/Home/Bio";
import Meta from "../components/Meta";
import { InferGetStaticPropsType } from "next";
import { getBio, getPages, getServices } from "@/sanity/queries";
import Layout from "@/components/Layout/Layout";
import { PortableText } from "@portabletext/react";
import {
  portableTextComponents,
  ProseH1,
  ProseH3,
  ProseH4,
  ProseLead,
  ProseSmall,
  ProseSubtle,
} from "@/components/UI/typography";
import CompaniesBanner from "@/components/CompaniesBanner";

export default function Home({
  bio,
  pages,
  services,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta
        title={pages[4].title}
        keywords={pages[4].keywords}
        description={pages[4].description}
        baseUrl={"https://torres-rehab.vercel.app"}
        path={"/contact"}
        image={"/home.png"}
      />
      <Layout bio={bio} services={services}>
        <div className="container-width space-y-12 py-16">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={bio.name}
              src={bio.image}
              className="w-full max-w-[180px] md:max-w-xs aspect-square object-cover rounded-full shadow-xl"
            />
            <header className="space-y-1 md:col-span-2">
              <ProseH3>{bio.name}</ProseH3>
              <ProseH1>{bio.title}</ProseH1>
              <ProseLead>{bio.tagline}</ProseLead>
            </header>
          </div>
          <CompaniesBanner />

          <div className="py-2 space-y-6">
            <PortableText
              value={bio.description}
              components={portableTextComponents}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const bio = await getBio();
  const pages = await getPages();
  const services = await getServices();

  return {
    props: {
      bio,
      pages,
      services,
    },
    revalidate: 60,
  };
}
