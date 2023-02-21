import sanity from "./client";
import { About } from "./schemas/about";
import { Questions } from "./schemas/faqs";
import { Incentives } from "./schemas/incentives";
import { Pages } from "./schemas/pages";
import { Reviews } from "./schemas/reviews";
import { Services } from "./schemas/services";

const bioFields = `{
    name,
    title,
    'image': image.asset->url,
    tagline,
    bio,
    description,
    weekdaySchedule,
    weekendSchedule,
    phoneNumber,
    email,
    instagram,
    facebook,
}`;

const allPostsQuery = `*[_type == "about" && !(_id in path("drafts.**"))][0] | ${bioFields}`;

export async function getBio(): Promise<About> {
  return await sanity.fetch(allPostsQuery);
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

export async function getPages(): Promise<Pages[]> {
  return await sanity.fetch(allPages);
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

export async function getServices(): Promise<Services[]> {
  return await sanity.fetch(allServices);
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

export async function getIncentives(): Promise<Incentives[]> {
  return await sanity.fetch(allIncentives);
}

const reviewsFields = `{
    read,
    title,
    message,
    name,
    date
}`;

const allReviews = `*[_type == "reviews" && !(_id in path("drafts.**"))] | order(_createdAt desc) ${reviewsFields}`;

export async function getReviews(): Promise<Reviews[]> {
  return await sanity.fetch(allReviews);
}

const faqFields = `{
    order,
    expanded,
    question,
    answer
}`;

const allFAQs = `*[_type == "questions" && !(_id in path("drafts.**"))] | order(order asc) ${faqFields}`;

export async function getFAQs(): Promise<Questions[]> {
  return await sanity.fetch(allFAQs);
}
