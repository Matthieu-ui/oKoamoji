import { useState } from "react";
import Toast from "./Toast";

const copyToClipboard = (text: string, setMessage: (msg: string) => void) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => setMessage(`Copied: ${text}`))
      .catch(() => {
        fallbackCopy(text, setMessage);
      });
  } else {
    fallbackCopy(text, setMessage);
  }
};

const fallbackCopy = (text: string, setMessage: (msg: string) => void) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  setMessage(`Copied: ${text}`);
};

interface Frontmatter {
  title: string;
  description: string;
}

interface Props {
  href: string;
  frontmatter: Frontmatter;
  secHeading?: boolean;
}

const Card = ({ href, frontmatter, secHeading = true }: Props) => {
  const { title, description } = frontmatter;
  const [message, setMessage] = useState("");
  const previews = description.split("|").map(s => s.trim()).filter(Boolean).slice(0, 6);

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-sm font-mono text-skin-accent tracking-widest uppercase
          opacity-70 hover:opacity-100 transition-opacity duration-100
          focus-visible:no-underline"
      >
        {secHeading ? <h2>{title}</h2> : <h3>{title}</h3>}
      </a>
      <div className="flex flex-wrap gap-2 mt-2">
        {previews.map((phrase, index) => (
          <button
            key={index}
            title="Click to copy"
            className="neu-btn px-3 py-1.5 text-sm font-mono
              cursor-pointer text-skin-base hover:text-skin-accent"
            onClick={e => {
              e.preventDefault();
              copyToClipboard(phrase, setMessage);
            }}
          >
            {phrase}
          </button>
        ))}
      </div>
      <Toast message={message} />
    </li>
  );
};

export default Card;
