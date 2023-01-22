import Meta from "../components/Meta";
import FAQ from "../components/Home/FAQ";
import { InferGetStaticPropsType } from "next";
import { getFAQs, getPages } from "../lib/sanity-queries";

export default function Home({
    pages,
    questions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Meta
                title={"FAQ"}
                keywords={"Torres, Mobility, Fitness, Training, Portugal"}
                description={"FAQ about Torres Training"}
                baseUrl={"https://torres-rehab.vercel.app"}
                path={"/faq"}
                image={"/home.png"}
            />
            <section className="container-width space-y-12 py-12">
                <FAQ questions={questions} page={pages[3]} />
            </section>
        </>
    );
}

export async function getStaticProps() {
    const pages = await getPages();
    const questions = await getFAQs();

    return {
        props: {
            pages,
            questions,
        },
        revalidate: 60,
    };
}
