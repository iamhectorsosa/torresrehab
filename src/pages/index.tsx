import Bio from "../components/Home/Bio";
import Reviews from "../components/Home/Reviews";
import Meta from "../components/Meta";
import FAQ from "../components/Home/FAQ";
import Contact from "../components/Home/Contact";
import Services from "../components/Home/Services";
import { InferGetStaticPropsType } from "next";
import {
  getBio,
  getFAQs,
  getPages,
  getReviews,
  getServices,
} from "@/sanity/queries";
import Layout from "@/components/Layout/Layout";

export default function Home({
  bio,
  pages,
  services,
  reviews,
  questions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta />
      <Layout bio={bio} services={services}>
        <div className="container-width space-y-12 py-16">
          <Bio bio={bio} />
          <Services services={services} page={pages[0]} />
          <Reviews reviews={reviews} page={pages[2]} />
          <FAQ questions={questions} limit={2} page={pages[3]} />
          <Contact bio={bio} page={pages[4]} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const bio = await getBio();
  const pages = await getPages();
  const services = await getServices();
  const reviews = await getReviews();
  const questions = await getFAQs();

  return {
    props: {
      bio,
      pages,
      services,
      reviews,
      questions,
    },
    revalidate: 60,
  };
}
