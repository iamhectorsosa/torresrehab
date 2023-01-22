import Meta from "../components/Meta";
import Reviews from "../components/Home/Reviews";
import { InferGetStaticPropsType } from "next";
import { getPages, getReviews } from "../lib/sanity-queries";

export default function Home({
    pages,
    reviews,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Meta
                title={"Reviews"}
                keywords={"Torres, Mobility, Fitness, Training, Portugal"}
                description={"Reviews about Torres Training"}
                baseUrl={"https://torres-rehab.vercel.app"}
                path={"/reviews"}
                image={"/home.png"}
            />
            <section className="container-width space-y-12 py-12">
                <Reviews reviews={reviews} page={pages[2]} />
            </section>
        </>
    );
}

export async function getStaticProps() {
    const pages = await getPages();
    const reviews = await getReviews();

    return {
        props: {
            pages,
            reviews,
        },
        revalidate: 60,
    };
}
