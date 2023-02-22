import Meta from "../components/Meta";
import Reviews from "../components/Home/Reviews";
import { InferGetStaticPropsType } from "next";
import { getBio, getPages, getReviews, getServices } from "@/sanity/queries";
import Layout from "@/components/Layout/Layout";

export default function Home({
  bio,
  pages,
  reviews,
  services,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta
        title={pages[2].title}
        keywords={pages[2].keywords}
        description={pages[2].description}
        baseUrl={"https://torres-rehab.vercel.app"}
        path={"/reviews"}
        image={"/home.png"}
      />
      <Layout bio={bio} services={services}>
        <section className="container-width space-y-12 py-12">
          <Reviews reviews={reviews} page={pages[2]} />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const bio = await getBio();
  const pages = await getPages();
  const reviews = await getReviews();
  const services = await getServices();

  return {
    props: {
      bio,
      pages,
      reviews,
      services,
    },
    revalidate: 60,
  };
}
