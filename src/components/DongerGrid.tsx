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

interface Props {
  dongers: string[];
}

const DongerGrid = ({ dongers }: Props) => {
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex flex-wrap gap-2 my-6">
        {dongers.map((donger, index) => (
          <button
            key={index}
            title="Click to copy"
            className="border border-skin-line px-2 py-1 text-sm font-mono
              hover:border-skin-accent hover:text-skin-accent hover:bg-skin-card
              active:opacity-60 cursor-pointer transition-colors duration-75
              bg-transparent text-skin-base"
            onClick={() => copyToClipboard(donger, setMessage)}
          >
            {donger}
          </button>
        ))}
      </div>
      <Toast message={message} />
    </>
  );
};

export default DongerGrid;
