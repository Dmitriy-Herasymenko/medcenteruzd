"use client";

import React from "react";
import { useDoctor } from "../data/doctors";
import Image from "next/image";
import CertificatesSlider from "@/components/CertificatesSlider";
import { useTranslation } from "react-i18next";


export default function DoctorPage({ params }) {
  const { t } = useTranslation("common");
  const { slug } = React.use(params);
  const doctor = useDoctor(slug);

  if (!doctor) return <div>{t("doctorNotFound")}</div>;

  return (
    <section className="min-h-screen py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="h-full">
          <Image
            src={doctor.photo}
            alt={doctor.name}
            width={500}
            height={600}
            className="rounded-xl object-cover "
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">{doctor.name}</h1>

            <div className="text-lg space-y-2">
              <p><strong>{t("doctors.specialtyLabel")}</strong> {doctor.specialty}</p>
              <p><strong>{t("doctors.experienceLabel")}</strong> {doctor.experience}</p>
              <p><strong>{t("doctors.practiceLabel")}</strong> {doctor.practice}</p>
              <p><strong>{t("doctors.emailLabel")}</strong> {doctor.email}</p>
              <p><strong>{t("doctors.phoneLabel")}</strong> {doctor.phone}</p>
              <p><strong>{t("doctors.aboutLabel")}</strong> {doctor.about}</p>

              <p><strong>{t("doctors.specializationsLabel")}</strong></p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-lg">
                {doctor.specializations.map((item, i) => (
                  <li key={i} className="list-disc list-inside">{item}</li>
                ))}
              </ul>

              <a
                href={`tel:${doctor.phone.replace(/\s+/g, "")}`}
                className="mt-4 cursor-pointer inline-flex items-center justify-center font-medium rounded-md transition duration-300 shadow-sm bg-primary hover:bg-[#126fe6] text-white px-5 py-2 text-base"
              >
                {t("btn")}
              </a>
            </div>
          </div>

        </div>
      </div>


      <div className="max-w-6xl mx-auto mt-14 mb-12">


        <CertificatesSlider certificates={doctor?.certificates} />

      </div>
    </section>
  );
}
