import { type SanityDocument } from "@sanity/client";
import { ActivityIcon } from "@sanity/icons";
import { z } from "zod";
import type { TypedObject } from "@portabletext/types";

const servicesSchema = z.object({
  order: z.number(),
  name: z.string(),
  tagline: z.string(),
  image: z.string(),
  location: z.string(),
  time: z.string(),
  href: z.string().url(),
});

export type Services = SanityDocument &
  z.infer<typeof servicesSchema> & { description: TypedObject | TypedObject[] };

const services = {
  name: "services",
  type: "document",
  title: "Services",
  icon: ActivityIcon,
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "href",
      title: "External Link",
      type: "url",
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
      name: "name",
      order: "order",
    },
    prepare({ name, order }: Record<string, string>) {
      return {
        title: name,
        subtitle: order,
      };
    },
  },
};

export default services;
