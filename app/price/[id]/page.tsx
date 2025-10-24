"use client";

import { useServices } from "../data";
import { useParams } from "next/navigation";
import { useTranslation } from "next-i18next";


const ServiceDetailPage = () => {
    const { t } = useTranslation("common");
    const services = useServices();
    const params = useParams();
    if (!params?.id) {
        return <p className="text-center py-10">Невідомий ID послуги</p>;
    }

    const id = +params.id;

    const service = services.find((s) => s.id === id);

    if (!service) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-10 text-center">
                <p className="text-xl font-semibold">Послуга не знайдена</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            <p className="mb-6">{service.description}</p>

            <div className="mb-4">
                <span className="font-semibold">{t("pricePage.price")}:</span>{service.price} {t("pricePage.uah")}
            </div>
            <div className="mb-4">
                <span className="font-semibold">{t("pricePage.duration")}: </span>{service.duration} {t("pricePage.min")}
            </div>
            <div className="mb-4">
                <strong>{t("pricePage.doctors")}:</strong> {service.doctors?.join(", ") || "Не вказано"}
            </div>
        </div>
    );
};

export default ServiceDetailPage;
