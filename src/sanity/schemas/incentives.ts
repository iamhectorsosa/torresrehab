import { type SanityDocument } from "@sanity/client";
import { CheckmarkIcon } from "@sanity/icons";
import { z } from "zod";

const incentivesSchema = z.object({
  order: z.number(),
  headline: z.string(),
  description: z.string(),
});

export type Incentives = SanityDocument & z.infer<typeof incentivesSchema>;

const incentives = {
  name: "incentives",
  type: "document",
  title: "Incentives",
  icon: CheckmarkIcon,
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
      headline: "headline",
      order: "order",
    },
    prepare({ headline, order }: Record<string, string>) {
      return {
        title: headline,
        subtitle: order,
      };
    },
  },
};

export default incentives;
