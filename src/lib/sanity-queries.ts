import sanity from "./sanity-client";
import {
    About,
    Services,
    Pages,
    Incentives,
    Reviews,
    Questions,
} from "./types";

const bioFields = `{
    name,
    title,
    'image': image.asset->url,
    tagline,
    description,
    weekdaySchedule,
    weekendSchedule,
    phoneNumber,
    email,
    instagram,
    facebook,
}`;

const allPostsQuery = `*[_type == "about" && !(_id in path("drafts.**"))][0] | ${bioFields}`;

export async function getBio() {
    return (await sanity.fetch(allPostsQuery)) as About;
}

const pageFields = `{
    order,
    title,
    headline,
    tagline,
    description,
    keywords,
}`;

const allPages = `*[_type == "pages" && !(_id in path("drafts.**"))] | order(order asc) ${pageFields}`;

export async function getPages() {
    return (await sanity.fetch(allPages)) as Pages;
}

const servicesFields = `{
    order,
    name,
    tagline,
    description,
    'image': image.asset->url,
    location,
    time,
    href
}`;

const allServices = `*[_type == "services" && !(_id in path("drafts.**"))] | order(order asc) ${servicesFields}`;

export async function getServices() {
    return (await sanity.fetch(allServices)) as Services;
}

const incentivesFields = `{
    order,
    name,
    tagline,
    description,
    'image': image.asset->url,
    location,
    time,
    href
}`;

const allIncentives = `*[_type == "incentives" && !(_id in path("drafts.**"))] | order(order asc) ${incentivesFields}`;

export async function getIncentives() {
    return (await sanity.fetch(allIncentives)) as Incentives;
}

const reviewsFields = `{
    read,
    title,
    message,
    name,
    date
}`;

const allReviews = `*[_type == "reviews" && !(_id in path("drafts.**"))] | order(_createdAt desc) ${reviewsFields}`;

export async function getReviews() {
    return (await sanity.fetch(allReviews)) as Reviews;
}

const faqFields = `{
    order,
    expanded,
    question,
    answer
}`;

const allFAQs = `*[_type == "questions" && !(_id in path("drafts.**"))] | order(order asc) ${faqFields}`;

export async function getFAQs() {
    return (await sanity.fetch(allFAQs)) as Questions;
}
