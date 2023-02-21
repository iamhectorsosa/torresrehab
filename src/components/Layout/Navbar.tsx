import Link from "next/link";
import { navItems } from "../../lib/config";
import { nanoid } from "nanoid";
import { Button } from "../UI/button";
import { TypographyH1 } from "../UI/typography";
import { useState } from "react";

export default function Navbar({}: {}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`sticky top-0 bg-white dark:bg-slate-900 z-10 shadow-sm ${
        isOpen ? "h-screen" : ""
      }`}
    >
      <div className="navigation-width">
        <div className="flex items-center justify-between">
          <Link href="/">
            <TypographyH1>
              <span className="hidden sm:inline">Torres</span>
              <span className="inline sm:hidden">T.</span> Rehab
            </TypographyH1>
          </Link>
          <nav aria-label="Site Nav" className="hidden md:flex items-center">
            {navItems.map(({ href, label }) => (
              <Link tabIndex={-1} href={href} key={nanoid()}>
                <Button variant="ghost">{label}</Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              tabIndex={-1}
              target="_blank"
              rel="noreferrer"
              href="https://hectorsosa.me"
            >
              <Button className="hidden md:inline-flex">Book Now</Button>
            </a>
            <Button
              className="h-10 w-10 p-0 inline-flex md:hidden"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 h-full">
          <nav aria-label="Site Nav" className="flex flex-col p-4 gap-4">
            {navItems.map(({ href, label }) => (
              <Link tabIndex={-1} href={href} key={nanoid()}>
                <Button
                  className="w-full text-3xl font-zilla py-8 px-6"
                  size="lg"
                  variant="ghost"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {label}
                </Button>
              </Link>
            ))}
            <a
              tabIndex={-1}
              target="_blank"
              rel="noreferrer"
              href="https://hectorsosa.me"
            >
              <Button
                className="w-full text-3xl font-zilla py-8 px-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                Book Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
