"use client";

import { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Debounced visibility handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    setIsVisible(scrolled > 300);
  }, []);

  useEffect(() => {
    // Passive listener = better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            w-12 h-12 rounded-full shadow-lg bg-blue-700 text-white
            flex items-center justify-center transition-all duration-300
            hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400
            animate-fadeIn
          "
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
