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
    <footer aria-label="Site Footer" className=" lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="px-6 py-16 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div>
              <ProseSmall>
                <span className="uppercase">Get in touch</span>
              </ProseSmall>
              <ProseStrong>
                <a
                  href={`tel:${bio.phoneNumber}`}
                  className="block hover:opacity-75 w-fit"
                >
                  {bio.phoneNumber}
                </a>
              </ProseStrong>
            </div>
            <div className="mt-4 space-y-1">
              <ProseSmall>Monday to Friday: {bio.weekdaySchedule}</ProseSmall>
              <ProseSmall>Weekends: {bio.weekendSchedule}</ProseSmall>
            </div>

            <ul className="flex gap-6 mt-8">
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

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div>
              <p className="font-medium">Services</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  {services.map(({ name }, index) => (
                    <li key={index}>
                      <Link
                        className=" transition hover:opacity-75"
                        href={`/services`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium">More</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  {navItems
                    .filter(({ label }) => label !== "Services")
                    .map(({ href, label }, index) => (
                      <li key={index}>
                        <Link
                          className=" transition hover:opacity-75"
                          href={href}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-200 dark:border-gray-500">
          <div className="sm:flex sm:items-center sm:justify-between">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <Link href="/faq" className="transition hover:opacity-75">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </nav>

            <p className="mt-8 text-xs  sm:mt-0">
              &copy; {dayjs().format("YYYY")} Fabio Torres. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
