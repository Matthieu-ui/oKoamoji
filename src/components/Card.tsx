import { useState } from "react";
import Toast from "./Toast";

const copyToClipboard = (text, setMessage) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`Copied: "${text}"`); // Debugging message
        setMessage(`Copied: "${text}"`);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err); // Error handling
        setMessage("Failed to copy text");
      });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log(`Copied (fallback): "${text}"`);
    setMessage(`Copied (fallback): "${text}"`);
  }
};

const Card = ({ href, frontmatter, secHeading = true }) => {
  const { title, description } = frontmatter;
  const [message, setMessage] = useState("");

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? <h2>{title}</h2> : <h3>{title}</h3>}
      </a>
      <div className="flex flex-wrap gap-2">
        {description.split("|").map((phrase, index) => (
          <span
            key={index}
            className="flex-grow border border-gray-300 rounded-md px-2 py-1 text-center transition transform hover:border-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => {
              console.log(`Clicked: ${phrase}`); // Debugging
              copyToClipboard(phrase, setMessage);
            }}
          >
            {phrase}
          </span>
        ))}
      </div>
      <Toast message={message} />
    </li>
  );
};

export default Card;
