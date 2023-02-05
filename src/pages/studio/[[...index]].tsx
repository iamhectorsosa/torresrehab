import { NextStudio } from "next-sanity/studio";
import Meta from "@/components/Meta";
import config from "@/sanity/config";

export default function StudioPage() {
  return (
    <>
      <Meta title="Studio" />
      <NextStudio config={config} />
    </>
  );
}
