"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useSwipeable } from "react-swipeable";
import { useTranslation } from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CertificatesSlider({ certificates }) {
  const { t } = useTranslation("common");
  const [openIndex, setOpenIndex] = useState(null);

  const nextSlide = () => {
    setOpenIndex((prev) => (prev + 1) % certificates.length);
  };
  const prevSlide = () => {
    setOpenIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto mt-14 px-4">
      <h2 className="heading-h3 mb-6 text-center">{t("doctors.certificates")}</h2>

      <Slider {...settings}>
        {certificates.map((cert, i) => (
          <div key={i} className="px-2">
            <div
              onClick={() => setOpenIndex(i)}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer bg-white dark:bg-[#133b88]"
            >
              <div className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px]">
                <Image
                  src={cert.thumbnail || cert.full || cert}
                  alt={`certificate ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="100%"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {openIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            {...swipeHandlers}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50 cursor-pointer"
              onClick={() => setOpenIndex(null)}
            >
              ×
            </button>

            {/* Prev / Next Arrows тільки на десктопі */}
            <button
              className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl z-50 ursor-pointer"
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl z-50 ursor-pointer"
              onClick={nextSlide}
            >
              ›
            </button>

            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
              {certificates.map((cert, index) => (
                <Image
                  key={index}
                  src={cert.full || cert}
                  alt={`certificate ${index + 1}`}
                  fill
                  className={`object-contain absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === openIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
