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
        <section className="min-h-screen   py-12 px-6 md:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="heading-h1 font-bold text-center mb-8">
                    {t("aboutUsPage.title")}
                </h1>

                <div className="bg-white dark:bg-[#133b88]  rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h2 className="heading-h3 mb-4">
                        {t("aboutUsPage.subtitle")}
                    </h2>
                    <p className="mb-6 leading-relaxed">{t("aboutUsPage.description")}</p>
                </div>

                <div className="bg-white dark:bg-[#133b88] rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h2 className="heading-h3 mb-4">{t("aboutUsPage.goalTitle")}</h2>
                    <p className="mb-6 leading-relaxed">{t("aboutUsPage.goalText")}</p>
                </div>

                <div className="bg-white dark:bg-[#133b88] rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h3 className="heading-h3 mb-6">{t("aboutUsPage.missionTitle")}</h3>
                    <ul className="space-y-4  list-disc pl-6 leading-relaxed">
                        {(t("aboutUsPage.missionList", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

    
                <div className="bg-white dark:bg-[#133b88] rounded-2xl shadow p-8 md:p-12 mb-10">
                    <h3 className="heading-h3 mb-6">{t("aboutUsPage.howTitle")}</h3>
                          <ul className="space-y-4  list-disc pl-6 leading-relaxed">
                        {(t("aboutUsPage.howList", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-center mt-12">
                    <p className="heading-h3 mb-6">{t("aboutUsPage.conclusion")}</p>
                    <Button
                        variant="primary" onClick={() => setIsModalOpen(true)} size="lg"
                    >
                        {t("aboutUsPage.btn")}
                    </Button>

                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AppointmentForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </section>
    );
}
