import Meta from "../components/Meta";
import FAQ from "../components/Home/FAQ";
import { InferGetStaticPropsType } from "next";
import { getBio, getFAQs, getPages, getServices } from "@/sanity/queries";
import Layout from "@/components/Layout/Layout";

export default function Home({
  bio,
  pages,
  questions,
  services,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta
        title={pages[3].title}
        keywords={pages[3].keywords}
        description={pages[3].description}
        baseUrl={"https://torres-rehab.vercel.app"}
        path={"/faq"}
        image={"/home.png"}
      />
      <Layout bio={bio} services={services}>
        <section className="container-width space-y-12 py-16">
          <FAQ questions={questions} page={pages[3]} />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const bio = await getBio();
  const pages = await getPages();
  const questions = await getFAQs();
  const services = await getServices();

  return {
    props: {
      bio,
      pages,
      questions,
      services,
    },
    revalidate: 60,
  };
}
