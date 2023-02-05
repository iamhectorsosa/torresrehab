import { type SanityDocument } from "@sanity/client";
import { DocumentsIcon } from "@sanity/icons";
import { z } from "zod";

const reviewsSchema = z.object({
  read: z.boolean(),
  title: z.string(),
  message: z.string(),
  name: z.string(),
  date: z.string(),
});

export type Reviews = SanityDocument & z.infer<typeof reviewsSchema>;

const reviews = {
  name: "reviews",
  type: "document",
  title: "Reviews",
  icon: DocumentsIcon,
  fields: [
    {
      name: "read",
      title: "Read",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
  ],
  orderings: [
    {
      title: "Read",
      name: "read",
      by: [{ field: "read", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      read: "read",
    },
    prepare({ title, read }: Record<string, string>) {
      return {
        title: title,
        subtitle: `${read ? "Read" : "Unread"}`,
      };
    },
  },
};

export default reviews;
