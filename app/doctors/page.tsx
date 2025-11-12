"use client";

import Image from "next/image";
import Link from "next/link";
import { getDoctorsDara } from "./data/doctors";
import { useTranslation } from "react-i18next";

export default function DoctorsPage() {
  const { t } = useTranslation("common");
  const doctors = getDoctorsDara(t);
  return (
    <section className="min-h-screen py-12 px-6 md:px-16">
      <h1 className="heading-h1 text-center mb-12">{t("doctors.ourDoctors")}</h1>

      <div className="max-w-4xl mx-auto justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {doctors?.map((doc:any) => (
          <div
            key={doc.slug}
            className="bg-white dark:bg-[#133b88] rounded-[20px] shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="h-104 w-full overflow-hidden">
              <Image
                src={doc.photo}
                alt={doc.name}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">{doc.name}</h2>
              <p className="text-sm opacity-80 mb-4 leading-relaxed">
                {doc.specialty}
              </p>

              <Link
                href={`/doctors/${doc.slug}`}
                className="cursor-pointer inline-flex items-center justify-center font-medium rounded-md transition duration-300 shadow-sm bg-primary hover:bg-[#126fe6] text-white px-5 py-2 text-base"
              >
                {t("doctors.detailsLabel")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}