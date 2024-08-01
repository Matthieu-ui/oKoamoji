import { slugifyStr } from "@utils/slugify";
// import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}
const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(`Copied: "${text}"`); // Debugging message
      alert(`Copied: "${text}"`); // Alert message
      // Alternatively, show a custom UI element for feedback
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
};

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium pb-3 hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      {/* <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} /> */}
      <div className="flex flex-wrap gap-2">
        {description.split("|").map((phrase, index) => (
          <span
            key={index}
            className="flex-grow border border-gray-300 rounded-md px-2 py-1 text-center transition transform hover:border-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => copyToClipboard(phrase)}
          >
            {phrase}
          </span>
        ))}
      </div>
    </li>
  );
}
