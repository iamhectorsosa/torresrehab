import Link from "next/link";
import { navItems } from "../../lib/config";
import { Button } from "../UI/button";
import { ProseH1, ProseH2 } from "../UI/typography";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/UI/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Services } from "@/sanity/schemas/services";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar({ services }: { services: Services[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`sticky top-0 bg-white dark:bg-slate-900 z-10 shadow-sm h-fit`}
    >
      <div className="navigation-width">
        <div className="flex items-center justify-between">
          <Link href="/">
            <ProseH1 className="lg:text-4xl text-2xl">Torres Rehab</ProseH1>
          </Link>
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex items-center gap-2"
          >
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map(({ href, label }, index) => {
                  if (label === "Services") {
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 w-[500px]">
                            {services.map((i) => (
                              <ListItem
                                key={i.name}
                                href={`/services#${i.name
                                  .toLowerCase()
                                  .replaceAll(" ", "-")}`}
                                title={i.name}
                              >
                                {i.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={index}>
                      <Link href={href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-2">
            <a
              tabIndex={-1}
              target="_blank"
              rel="noreferrer"
              href="https://buk.pt/torresrehab"
            >
              <Button className="hidden lg:inline-flex">Book Now</Button>
            </a>
            <Button
              className="flex flex-col gap-2 w-10 h-10 p-2 lg:hidden"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`bg-slate-700 w-full h-0.5 transition-all ease-out ${
                  isOpen
                    ? "rotate-45 translate-y-[5px] translate-x-[0.5px]"
                    : ""
                }`}
              />
              <span
                className={`bg-slate-700 w-full h-0.5 transition-all ease-out ${
                  isOpen
                    ? "-rotate-45 -translate-y-[5px] translate-x-[0.5px]"
                    : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          open: {
            height: "100%",
            transition: {
              staggerChildren: 0.07,
              delayChildren: 0.2,
            },
          },
          closed: {
            height: "0",
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        className=" overflow-hidden"
      >
        <motion.ul
          variants={{
            open: {
              transition: { staggerChildren: 0.05, delayChildren: 0.01 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
          aria-label="Site Nav"
          className="flex flex-col p-4 gap-4"
        >
          {navItems.map(({ href, label }, index) => (
            <motion.li
              key={index}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                closed: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}
            >
              <Link tabIndex={-1} href={href}>
                <Button
                  className="w-full text-3xl font-zilla py-8 px-6"
                  size="lg"
                  variant="ghost"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ProseH2>{label}</ProseH2>
                </Button>
              </Link>
            </motion.li>
          ))}
          <motion.li
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
          >
            <a
              tabIndex={-1}
              target="_blank"
              rel="noreferrer"
              href="https://buk.pt/torresrehab"
            >
              <Button
                className="w-full text-3xl font-zilla py-8 px-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                <ProseH2>Book Now</ProseH2>
              </Button>
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
