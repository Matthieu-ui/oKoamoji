import { useState, useEffect } from "react";

const Toast = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 1600);
      return () => clearTimeout(t);
    }
  }, [message]);

  if (!visible) return null;

  return (
    <div
      style={{ fontFamily: "monospace" }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50
        neu-card text-skin-accent
        px-5 py-2.5 text-sm tracking-wide"
    >
      {message}
    </div>
  );
};

export default Toast;
