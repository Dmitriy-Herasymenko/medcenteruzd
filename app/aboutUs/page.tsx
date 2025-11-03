"use client"
import { useState } from "react";
import Modal from "@/components/Modal";
import AppointmentForm from "@/components/AppointmentForm";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";


export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation("common");
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-4xl mx-auto">
                {/* Заголовок */}
                <h1 className="heading-h1 font-bold text-center mb-8">
                    {t("aboutUsPage.title")}
                </h1>

                {/* Основна інформація */}
                <section className="bg-white rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h2 className="heading-h2 mb-4">
                        {t("aboutUsPage.subtitle")}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{t("aboutUsPage.description")}</p>
                </section>

                {/* Мета */}
                <section className="bg-white rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h2 className="heading-h2 mb-4">{t("aboutUsPage.goalTitle")}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{t("aboutUsPage.goalText")}</p>
                </section>

                {/* Ключові аспекти місії */}
                <section className="bg-white rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h3 className="heading-h2 mb-6">{t("aboutUsPage.missionTitle")}</h3>
                    <ul className="space-y-4 text-gray-700 list-disc pl-6 leading-relaxed">
                        {(t("aboutUsPage.missionList", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* Реалізація місії */}
                <section className="bg-white rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h3 className="heading-h2 mb-6">{t("aboutUsPage.howTitle")}</h3>
                          <ul className="space-y-4 text-gray-700 list-disc pl-6 leading-relaxed">
                        {(t("aboutUsPage.howList", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* Заключний блок */}
                <section className="text-center mt-12">
                    <p className="text-lg text-gray-800 font-medium mb-6">{t("aboutUsPage.conclusion")}</p>
                    <Button
                        variant="primary" onClick={() => setIsModalOpen(true)} size="lg"
                    >
                        {t("aboutUsPage.btn")}
                    </Button>

                </section>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AppointmentForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </main>
    );
}
