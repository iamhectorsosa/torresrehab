import dayjs from "dayjs";
import { navItems } from "../../lib/config";
import {
  AiOutlineCompass,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Social } from "../../lib/types";
import { ReactNode } from "react";
import Link from "next/link";
import { About } from "@/sanity/schemas/about";
import { Services } from "@/sanity/schemas/services";
import { ProseStrong, ProseSmall } from "../UI/typography";

function getIcon(social: Social["type"]): ReactNode {
  switch (social) {
    case "Location":
      return <AiOutlineCompass className="w-6 h-6" />;
    case "Facebook":
      return <AiOutlineFacebook className="w-6 h-6" />;
    case "Instagram":
      return <AiOutlineInstagram className="w-6 h-6" />;
    case "LinkedIn":
      return <AiOutlineLinkedin className="w-6 h-6" />;
    case "Email":
      return <AiOutlineMail className="w-6 h-6" />;
    case "Phone":
      return <AiOutlinePhone className="w-6 h-6" />;
  }
}

export default function Footer({
  bio,
  services,
}: {
  bio: About;
  services: Services[];
}) {
  return (
    <footer aria-label="Site Footer" className="bg-slate-50 py-12">
      <div className="grid lg:grid-cols-2 gap-6 container-width">
        <div className="space-y-4">
          <div>
            <ProseSmall>
              <ProseStrong className="uppercase text-slate-600">
                Get in touch
              </ProseStrong>
            </ProseSmall>
            <ProseStrong className="text-2xl">
              <a
                href={`tel:${bio.phoneNumber}`}
                className="block hover:opacity-75 w-fit"
              >
                {bio.phoneNumber}
              </a>
            </ProseStrong>
          </div>
          <div className="space-y-1">
            <ProseSmall>Monday to Friday: {bio.weekdaySchedule}</ProseSmall>
            <ProseSmall>Weekends: {bio.weekendSchedule}</ProseSmall>
          </div>
          <ul className="flex gap-6 py-2">
            <li>
              <a
                href={bio.facebook}
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">{bio.facebook}</span>
                {getIcon("Facebook")}
              </a>
            </li>
            <li>
              <a
                href={bio.instagram}
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">{bio.instagram}</span>
                {getIcon("Instagram")}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${bio.email}`}
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">{bio.email}</span>
                {getIcon("Email")}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-9 lg:grid-cols-2">
          <div className="space-y-6">
            <ProseSmall>
              <ProseStrong className="uppercase text-slate-400">
                Services
              </ProseStrong>
            </ProseSmall>

            <ul className="space-y-4">
              {services.map(({ name }, index) => (
                <li key={index}>
                  <Link
                    className=" transition hover:opacity-75"
                    href={`/services#${name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <ProseSmall>{name}</ProseSmall>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <ProseSmall>
              <ProseStrong className="uppercase text-slate-400">
                More
              </ProseStrong>
            </ProseSmall>

            <ul className="space-y-4">
              <li>
                <Link className=" transition hover:opacity-75" href={`/about`}>
                  <ProseSmall>About me</ProseSmall>
                </Link>
              </li>
              {navItems
                .filter(({ label }) => label !== "Services")
                .map(({ href, label }, index) => (
                  <li key={index}>
                    <Link className=" transition hover:opacity-75" href={href}>
                      <ProseSmall>{label}</ProseSmall>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 max-w-5xl mx-auto my-4" />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between container-width gap-4">
        <Link className="transition hover:opacity-75 block" href="/faq">
          <ProseSmall className="text-xs">
            Frequently Asked Questions
          </ProseSmall>
        </Link>

        <ProseSmall className="text-xs">
          &copy; {dayjs().format("YYYY")} Fabio Torres. All rights reserved.
        </ProseSmall>
      </div>
    </footer>
  );
}
