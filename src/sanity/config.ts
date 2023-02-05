import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import about from "./schemas/about";
import faqs from "./schemas/faqs";
import incentives from "./schemas/incentives";
import messages from "./schemas/messages";
import pages from "./schemas/pages";
import reviews from "./schemas/reviews";
import services from "./schemas/services";

export const sanityConfig = {
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
};

export default defineConfig({
  basePath: sanityConfig.basePath,
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  title: "Torres Rehab",
  schema: {
    types: [about, faqs, incentives, messages, pages, reviews, services],
  },
  plugins: [deskTool()],
  document: {
    actions: (prev, context) => {
      return context.schemaType === "pages" || context.schemaType === "about"
        ? prev.filter((i) => i.action !== "delete")
        : prev;
    },
  },
});
