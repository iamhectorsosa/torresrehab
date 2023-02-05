import { type SanityDocument } from "@sanity/client";
import { CommentIcon } from "@sanity/icons";
import { z } from "zod";

const messagesSchema = z.object({
  read: z.boolean(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
  date: z.string(),
});

export type Messages = SanityDocument & z.infer<typeof messagesSchema>;

const messages = {
  name: "messages",
  type: "document",
  title: "Messages",
  icon: CommentIcon,
  fields: [
    {
      name: "read",
      title: "Read",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
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
      name: "name",
      read: "read",
    },
    prepare({ name, read }: Record<string, string>) {
      return {
        title: name,
        subtitle: `${read ? "Read ✅" : "Unread ✉️"}`,
      };
    },
  },
};

export default messages;
