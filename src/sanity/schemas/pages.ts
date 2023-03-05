import { type SanityDocument } from "@sanity/client";
import { DocumentIcon } from "@sanity/icons";
import { z } from "zod";

const pagesSchema = z.object({
  order: z.number(),
  title: z.string(),
  headline: z.string(),
  tagline: z.string(),
  description: z.string(),
  keywords: z.string(),
});

export type Pages = SanityDocument & z.infer<typeof pagesSchema>;

const pages = {
  name: "pages",
  type: "document",
  title: "Pages",
  icon: DocumentIcon,
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      // readOnly: true,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      // readOnly: true,
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Description SEO",
      type: "string",
    },
    {
      name: "keywords",
      title: "Keywords SEO",
      type: "string",
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      headline: "headline",
    },
    prepare({ title, headline }: Record<string, string>) {
      return {
        title: title,
        subtitle: headline,
      };
    },
  },
};

export default pages;
