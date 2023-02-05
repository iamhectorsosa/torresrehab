import Meta from "../components/Meta";
import FAQ from "../components/Home/FAQ";
import { InferGetStaticPropsType } from "next";
import { getBio, getFAQs, getPages, getServices } from "@/sanity/queries";
import Footer from "../components/Navigation/Footer";

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
      <section className="container-width space-y-12 py-12">
        <FAQ questions={questions} page={pages[3]} />
      </section>
      <Footer bio={bio} services={services} />
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
