import sanityClient from "@sanity/client";

const sanity = sanityClient({
    projectId: "g5udunwt",
    dataset: "production",
    apiVersion: "2021-10-21",
    token: `${process.env.SANITY_WEBSITE_EDITOR_TOKEN}`,
    useCdn: false,
});

export default sanity;
