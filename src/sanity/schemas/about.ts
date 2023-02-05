import { type SanityDocument } from "@sanity/client";
import { UserIcon } from "@sanity/icons";
import { z } from "zod";
import type { TypedObject } from "@portabletext/types";

const aboutSchema = z.object({
  name: z.string(),
  title: z.string(),
  image: z.string(),
  tagline: z.string(),
  weekdaySchedule: z.string(),
  weekendSchedule: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  instagram: z.string().url(),
  facebook: z.string().url(),
});

export type About = SanityDocument &
  z.infer<typeof aboutSchema> & { description: TypedObject | TypedObject[] };

const about = {
  name: "about",
  type: "document",
  title: "About",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
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
      name: "weekdaySchedule",
      title: "Weekday Schedule",
      type: "string",
    },
    {
      name: "weekendSchedule",
      title: "Weekend Schedule",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      name: "name",
      title: "title",
    },
    prepare({ name, title }: Record<string, string>) {
      return {
        title: name,
        subtitle: title,
      };
    },
  },
};

export default about;
