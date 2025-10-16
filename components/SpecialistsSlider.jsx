
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function SpecialistsSlider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };
  const { t } = useTranslation("common");
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-[#133b88] text-center mb-8">
        {t("mainPage.qualifiedSpecialistsTitle")}
      </h2>
      <Slider {...settings} className="space-y-8">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className=" px-4"
          >
            {/* Картинка зліва */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 overflow-hidden  ">
              <Image
                src={s.image}
                alt={s.name}
                width={600}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
              <div className="w-full text-center md:text-start md:w-1/2 space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold">{s.name}</h3>

                <p className="">
                  <span className="font-bold">Спеціальність:</span> {s.specialization}
                </p>

                <p className="">
                  <span className="font-bold">Досвід:</span> {s.experience}
                </p>

                <p className="">
                  <span className="font-bold">Практика:</span> {s.practiceSince}
                </p>

                <p className="">
                  <span className="font-bold">Е-пошта:</span> {s.email}
                </p>

                <p className="">
                  <span className="font-bold">Телефон:</span> {s.phone}
                </p>

                <button className="bg-[#133b88] px-6 py-2 text-white font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:text-black transition cursor-pointer">
                  {t("btn")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>


    </>
  );
}
