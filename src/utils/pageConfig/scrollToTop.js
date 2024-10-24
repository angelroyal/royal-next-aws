"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// SCROLL

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export function ScrollButton() {
  const ButtonUp = `${process.env.NEXT_PUBLIC_URL}icons/arrows/up-100-cle.svg`;

  const [isOccult, setOccult] = useState(false);

  const handleScrollTop = async () => {
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const maxHeight = 200;

      setOccult(scrollY > maxHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isOccult && (
      <div onClick={handleScrollTop}>
        <Image
          src={ButtonUp}
          alt="ButtonUpScroll"
          width={50}
          height={50}
          className="fixed bottom-[9rem] right-[14px] width-[50px] h-[50px] flex justify-center items-center cursor-pointer z-[1000]"
        />
      </div>
    )
  );
}
