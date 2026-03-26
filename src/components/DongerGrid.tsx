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
            className="neu-btn px-3 py-1.5 text-sm font-mono
              cursor-pointer text-skin-base hover:text-skin-accent"
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
