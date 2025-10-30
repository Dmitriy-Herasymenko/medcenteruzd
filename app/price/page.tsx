"use client";
import React from "react";
import { useServices } from "./data";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";

const ServicesPage: React.FC = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const services = useServices();
    const handleRowClick = (id: number) => {
        router.push(`/price/${id}`);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="heading-h1 mb-6 text-center">{t("pricePage.title")}</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                    <thead className="bg-primary">
                        <tr>
                            <th className="px-4 py-2 text-left text-white font-medium">{t("pricePage.service")}</th>
                            {/* <th className="px-4 py-2 text-center text-white font-medium">{t("pricePage.description")}</th>
                            <th className="px-4 py-2 text-center text-white font-medium">{t("pricePage.duration")}</th> */}
                            <th className="px-4 py-2  text-left text-white font-medium">{t("pricePage.uah")}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white  divide-y divide-gray-200">
                        {services.map((service) => (
                            <tr
                                key={service.id}
                                onClick={() => handleRowClick(service.id)}
                                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200 cursor-pointer text-left">
                                <td className="px-4 py-3 ">{service.title}</td>
                                {/* <td className="px-4 py-3">{service.shortDescription}</td>
                                <td className="px-4 py-3">{service.duration} {t("pricePage.min")}</td> */}
                                <td className="px-4 py-3">{service.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServicesPage;
