import { useState, useEffect } from "react";

const Toast = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000); // Hide after 2 seconds
    }
  }, [message]);

  return (
    visible && (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
        {message}
      </div>
    )
  );
};

export default Toast;
