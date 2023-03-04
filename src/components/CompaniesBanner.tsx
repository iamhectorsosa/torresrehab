import { ProseSmall } from "./UI/typography";

export default function CompaniesBanner() {
  return (
    <div className="grid place-content-center gap-4 pb-3">
      <ProseSmall className="text-center opacity-70 font-bold uppercase tracking-wider">
        Specialized from the following institutes
      </ProseSmall>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo-1.png"
          alt="Pro Sport Academy"
          className="mix-blend-multiply max-w-[100px] max-h-[80px] grayscale brightness-50"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo-2.webp"
          alt="Pro Sport Academy"
          className="mix-blend-multiply max-w-[100px] max-h-[80px] grayscale contrast-125"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo-3.jpeg"
          alt="Pro Sport Academy"
          className="mix-blend-multiply max-w-[100px] max-h-[80px] grayscale"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo-4.png"
          alt="Pro Sport Academy"
          className="mix-blend-multiply max-w-[100px] max-h-[80px] grayscale contrast-125"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo-5.jpeg"
          alt="Pro Sport Academy"
          className="mix-blend-multiply max-w-[100px] max-h-[80px] grayscale"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/logo-6.png"
          alt="Pro Sport Academy"
          className="mix-blend-multiply max-w-[100px] max-h-[80px] grayscale"
        />
      </div>
    </div>
  );
}
