"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Прокрутити вгору"
          className=" cursor-pointer fixed bottom-6 right-6 z-50  text-white bg-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
}
