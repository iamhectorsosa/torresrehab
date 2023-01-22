import Bio from "../components/Home/Bio";
import Reviews from "../components/Home/Reviews";
import Meta from "../components/Meta";
import FAQ from "../components/Home/FAQ";
import Contact from "../components/Home/Contact";
import Incentives from "../components/Home/Incentives";
import Services from "../components/Home/Services";
import { InferGetStaticPropsType } from "next";
import {
    getBio,
    getFAQs,
    getIncentives,
    getPages,
    getReviews,
    getServices,
} from "../lib/sanity-queries";
import Footer from "../components/Navigation/Footer";

export default function Home({
    bio,
    pages,
    services,
    incentives,
    reviews,
    questions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Meta />
            <section className="container-width space-y-12 py-12">
                <Bio bio={bio} />
                <Services services={services} page={pages[0]} />
                <Incentives incentives={incentives} limit={3} page={pages[1]} />
                <Reviews reviews={reviews} limit={3} page={pages[2]} />
                <FAQ questions={questions} limit={2} page={pages[3]} />
                <Contact bio={bio} page={pages[4]} />
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
    const reviews = await getReviews();
    const questions = await getFAQs();

    return {
        props: {
            bio,
            pages,
            services,
            incentives,
            reviews,
            questions,
        },
        revalidate: 60,
    };
}
