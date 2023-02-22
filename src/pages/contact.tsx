import { InferGetStaticPropsType } from "next";
import Contact from "../components/Home/Contact";
import Meta from "../components/Meta";
import { getBio, getPages, getServices } from "@/sanity/queries";
import Layout from "@/components/Layout/Layout";

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
        <section className="container-width space-y-12 py-12">
          <Contact bio={bio} page={pages[4]} />
        </section>
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
