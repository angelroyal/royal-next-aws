// DoneNotification.js
import React, { useState, useEffect } from "react";

export default function NotificationType({ type, title, message }) {
  const duration = 5000; // 5 seconds
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const icons = {
    success: "success.svg",
    warning: "warning.svg",
    error: "error.svg",
    info: "info.svg",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    const interval = setInterval(() => {
      setProgress((prev) => prev + 100 / (duration / 100));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-[369px] fixed top-5 right-5 z-50 bg-white shadow-xl py-[12px] px-[20px] rounded-t transform transition-transform translate-x-0 animate-slide-in">
      <div className="flex justify-start items-center">
        {/* ICON NOTIFICATION */}
        <div className="mr-[11.5px]">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}notifications/${icons[type]}`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} - ${title}`}
          />
        </div>

        <div className="w-[1px] h-[20px] bg-[#ebebeb] mr-[11.5px]"></div>

        {/* TEXT NOTIFICATION */}
        <div className="pr-[18px]">
          <div className="text-fs-16">{title}</div>
          <div className="text-fs-12 text-gry-70">{message}</div>
        </div>

        {/* CLOSE ICON */}
        <div>
          <img
          className="cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-50.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} - Close`}
            width={10}
            height={10}
            onClick={handleClose}
          />
        </div>
      </div>
      {/* LINE PROGRESS */}
      <div
        className="fixed bottom-0 left-0 h-1 bg-blue-500"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}

