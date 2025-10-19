"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SpecialistsSlider from "../components/SpecialistsSlider";
import { useTranslation } from "react-i18next";

function HeroSection(t: (key: string) => string) {
  return (
    <section className="relative min-h-screen bg-[#133b88] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/imgs/home-kobyliak-igor-2.png"
          alt="УЗД діагностика"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {t("mainPage.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 ">
          {t("mainPage.subtitle")}
        </p>
        <Link
          href="/appointment"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          {t("mainPage.btn")}
        </Link>
      </div>
    </section>

  )
}

function AboutAndWhySection(t: (key: string) => string) {
  const items = [
    {
      title: t("mainPage.experiencedSpecialistsTitle"),
      description: t("mainPage.experiencedSpecialistsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: t("mainPage.modernEquipmentTitle"),
      description: t("mainPage.modernEquipmentDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: t("mainPage.wideRangeTitle"),
      description: t("mainPage.wideRangeDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: t("mainPage.comfortableConditionsTitle"),
      description: t("mainPage.comfortableConditionsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
  ];

  return (
    <section className="relative  py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 ">
          <div className="relative h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/imgs/uzd_pechinky.jpg"
              alt="Медичний центр УЗД"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5  text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#133b88] ">
              {t("mainPage.aboutUs")}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold">
              {t("mainPage.modernCenterTitle")}
            </h3>
            <p className="leading-relaxed ">
              {t("mainPage.centerDescription")}
            </p>
            <p className="leading-relaxed ">
              {t("mainPage.experiencedDoctors")}
            </p>

            <button className="bg-[#133b88] hover:bg-[#1b4cb0] text-white px-8 py-3 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              {t("mainPage.btnAboutUs")}
            </button>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#133b88]">
            {t("mainPage.whyChooseUs")}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto">
            {t("mainPage.whyChooseUsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#133b88] rounded-2xl shadow-md hover:shadow-xl p-6  text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection(t: (key: string) => string) {
  const items = [
    {
      title: t("mainPage.servicesSoftTissuesTitle"),
      description: t("mainPage.servicesSoftTissuesDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400,
      waitTime: 29
    },
    {
      title: t("mainPage.servicesHeartTitle"),
      description: t("mainPage.servicesHeartDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 450,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesLiverElastographyTitle"),
      description: t("mainPage.servicesLiverElastographyDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 800,
      waitTime: 10
    },
    {
      title: t("mainPage.servicesJointsTitle"),
      description: t("mainPage.servicesJointsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 500,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesLimbVesselsTitle"),
      description: t("mainPage.servicesLimbVesselsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400 + 400,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesNeckHeadVesselsTitle"),
      description: t("mainPage.servicesNeckHeadVesselsDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 1000,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesLymphNodesTitle"),
      description: t("mainPage.servicesLymphNodesDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesObGynTitle"),
      description: t("mainPage.servicesObGynDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 3100,
      waitTime: 60
    },
    {
      title: t("mainPage.servicesInternalOrgansTitle"),
      description: t("mainPage.servicesInternalOrgansDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 1500,
      waitTime: 30
    },
    {
      title: t("mainPage.servicesThyroidTitle"),
      description: t("mainPage.servicesThyroidDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 400,
      waitTime: 15
    },
    {
      title: t("mainPage.servicesUrinaryTitle"),
      description: t("mainPage.servicesUrinaryDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 1250,
      waitTime: 45
    },
    {
      title: t("mainPage.servicesBreastTitle"),
      description: t("mainPage.servicesBreastDescription"),
      imgUrl: "/imgs/icon_logomed-3_50.svg",
      price: 500,
      waitTime: 15
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section className="bg-[#edf5fd] dark:bg-gray-900  py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold mb-12 text-[#133b88]">{t("mainPage.ultrasoundServicesTitle")}</h2>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 `}
        style={{ maxHeight: showAll ? `${items.length * 400}px` : "850px" }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#133b88] rounded-[20px] shadow-md p-6 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Image src={item.imgUrl} alt={item.title} width={40} height={40} className="object-contain" />
            </div>
            <h3 className="text-lg dark:text-white font-semibold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-600 dark:text-white text-sm leading-relaxed">{item.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-bold">💰 Ціна: <span className="font-medium text-gray-900 dark:text-white font-bold">{item.price} грн</span></span>
              <span className="font-bold">⏱️ Очікування: <span className="font-medium text-gray-900 dark:text-white">{item.waitTime} хв</span></span>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка “Показати ще / Згорнути” */}
      <div className="mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#133b88] hover:bg-[#1b4cb0] text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 font-semibold cursor-pointer"
        >
          {showAll ? t("mainPage.collapse") : t("mainPage.showMore")}
        </button>
      </div>
    </section>
  );
}

function SpecialistsSection(t: (key: string) => string) {
  const specialists = [
    {
      name: t("mainPage.specialist1Name"),
      specialization: t("mainPage.specialist1Specialization"),
      experience: t("mainPage.specialist1Experience"),
      practiceSince: t("mainPage.specialist1PracticeSince"),
      email: t("mainPage.specialist1Email"),
      phone: t("mainPage.specialist1Phone"),
      image: "/imgs/kobyliak-igor-an-2048x1695.webp"
    },
    {
      name: t("mainPage.specialist2Name"),
      specialization: t("mainPage.specialist2Specialization"),
      experience: t("mainPage.specialist2Experience"),
      practiceSince: t("mainPage.specialist2PracticeSince"),
      email: t("mainPage.specialist2Email"),
      phone: t("mainPage.specialist2Phone"),
      image: "/imgs/kobyliak-olena-2-2048x1695.webp"
    }
  ];

  return (
    <section className="py-16 px-12">
      <SpecialistsSlider slides={specialists} />
    </section>
  );
}

function TestimonialsSection(t: (key: string) => string) {
  const testimonials = [
    { name: t("mainPage.testimonial1Name"), feedback: t("mainPage.testimonial1Feedback") },
    { name: t("mainPage.testimonial2Name"), feedback: t("mainPage.testimonial2Feedback") },
    { name: t("mainPage.testimonial3Name"), feedback: t("mainPage.testimonial3Feedback") },
    { name: t("mainPage.testimonial4Name"), feedback: t("mainPage.testimonial4Feedback") },
    { name: t("mainPage.testimonial5Name"), feedback: t("mainPage.testimonial5Feedback") },
    { name: t("mainPage.testimonial6Name"), feedback: t("mainPage.testimonial6Feedback") }
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-[#edf5fd] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#133b88] mb-12">
          Відгуки наших пацієнтів
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-[#133b88] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >

              <div className="absolute -top-4 left-6 text-5xl text-[#133b88]/20 select-none">
                “
              </div>

              <p className="text-gray-700 dark:text-white text-lg italic mb-6 leading-relaxed">
                {testimonial.feedback}
              </p>
              <p className="text-gray-900 dark:text-white  font-semibold text-right">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {

  const { t } = useTranslation("common");

  return (
    <div className="space-y-16">

      {HeroSection(t)}
      {AboutAndWhySection(t)}
      {ServicesSection(t)}
      {SpecialistsSection(t)}
      {TestimonialsSection(t)}
    </div>
  );
}
