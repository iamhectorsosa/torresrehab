import { type SanityDocument } from "@sanity/client";
import { BulbOutlineIcon } from "@sanity/icons";
import { z } from "zod";
import type { TypedObject } from "@portabletext/types";

const faqsSchema = z.object({
  order: z.number(),
  expended: z.boolean(),
  question: z.string(),
});

export type Questions = SanityDocument &
  z.infer<typeof faqsSchema> & { answer: TypedObject | TypedObject[] };

const faqs = {
  name: "questions",
  type: "document",
  title: "FAQs",
  icon: BulbOutlineIcon,
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "expanded",
      title: "Expanded",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
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
      question: "question",
      order: "order",
      expanded: "expanded",
    },
    prepare({ question, order, expanded }: Record<string, string>) {
      return {
        title: question,
        subtitle: `${order} - ${expanded}`,
      };
    },
  },
};

export default faqs;
