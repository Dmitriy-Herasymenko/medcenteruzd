import { useTranslation } from "next-i18next";

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  duration: string;
  doctors?: string[];
}

export const useServices = (): Service[] => {
  const { t } = useTranslation("common");

  const services: Service[] = [
    {
      id: 1,
      title: t("pricePage.1.title"),
      shortDescription: t("pricePage.1.shortDescription"),
      description: t("pricePage.1.description"),
      price: "400",
      duration: "30",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 2,
      title: t("pricePage.2.title"),
      shortDescription: t("pricePage.2.shortDescription"),
      description: t("pricePage.2.description"),
      price: "450",
      duration: "25",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 3,
      title: t("pricePage.3.title"),
      shortDescription: t("pricePage.3.shortDescription"),
      description: t("pricePage.3.description"),
      price: "800",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 4,
      title: t("pricePage.4.title"),
      shortDescription: t("pricePage.4.shortDescription"),
      description: t("pricePage.4.description"),
      price: "900",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 5,
      title: t("pricePage.5.title"),
      shortDescription: t("pricePage.5.shortDescription"),
      description: t("pricePage.5.description"),
      price: "500",
      duration: "20",
      doctors: [t("pricePage.doctorIgor")]
    },
    {
      id: 6,
      title: t("pricePage.6.title"),
      shortDescription: t("pricePage.6.shortDescription"),
      description: t("pricePage.6.description"),
      price: "700",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 7,
      title: t("pricePage.7.title"),
      shortDescription: t("pricePage.7.shortDescription"),
      description: t("pricePage.7.description"),
      price: "700",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 8,
      title: t("pricePage.8.title"),
      shortDescription: t("pricePage.8.shortDescription"),
      description: t("pricePage.8.description"),
      price: "1000",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 9,
      title: t("pricePage.9.title"),
      shortDescription: t("pricePage.9.shortDescription"),
      description: t("pricePage.9.description"),
      price: "600",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 10,
      title: t("pricePage.10.title"),
      shortDescription: t("pricePage.10.shortDescription"),
      description: t("pricePage.10.description"),
      price: "600",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 11,
      title: t("pricePage.11.title"),
      shortDescription: t("pricePage.11.shortDescription"),
      description: t("pricePage.11.description"),
      price: "1000",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 12,
      title: t("pricePage.12.title"),
      shortDescription: t("pricePage.12.shortDescription"),
      description: t("pricePage.12.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 13,
      title: t("pricePage.13.title"),
      shortDescription: t("pricePage.13.shortDescription"),
      description: t("pricePage.13.description"),
      price: "600",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 14,
      title: t("pricePage.14.title"),
      shortDescription: t("pricePage.14.shortDescription"),
      description: t("pricePage.14.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 15,
      title: t("pricePage.15.title"),
      shortDescription: t("pricePage.15.shortDescription"),
      description: t("pricePage.15.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 16,
      title: t("pricePage.16.title"),
      shortDescription: t("pricePage.16.shortDescription"),
      description: t("pricePage.16.description"),
      price: "500",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 17,
      title: t("pricePage.17.title"),
      shortDescription: t("pricePage.17.shortDescription"),
      description: t("pricePage.17.description"),
      price: "500",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 18,
      title: t("pricePage.18.title"),
      shortDescription: t("pricePage.18.shortDescription"),
      description: t("pricePage.18.description"),
      price: "600",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 19,
      title: t("pricePage.19.title"),
      shortDescription: t("pricePage.19.shortDescription"),
      description: t("pricePage.19.description"),
      price: "600",
      duration: "20",
      doctors: [t("pricePage.doctorOlena")]
    },
    {
      id: 20,
      title: t("pricePage.20.title"),
      shortDescription: t("pricePage.20.shortDescription"),
      description: t("pricePage.20.description"),
      price: "600",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 21,
      title: t("pricePage.21.title"),
      shortDescription: t("pricePage.21.shortDescription"),
      description: t("pricePage.21.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 22,
      title: t("pricePage.22.title"),
      shortDescription: t("pricePage.22.shortDescription"),
      description: t("pricePage.22.description"),
      price: "500",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 23,
      title: t("pricePage.23.title"),
      shortDescription: t("pricePage.23.shortDescription"),
      description: t("pricePage.23.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 24,
      title: t("pricePage.24.title"),
      shortDescription: t("pricePage.24.shortDescription"),
      description: t("pricePage.24.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 25,
      title: t("pricePage.25.title"),
      shortDescription: t("pricePage.25.shortDescription"),
      description: t("pricePage.25.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 26,
      title: t("pricePage.26.title"),
      shortDescription: t("pricePage.26.shortDescription"),
      description: t("pricePage.26.description"),
      price: "450",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 27,
      title: t("pricePage.27.title"),
      shortDescription: t("pricePage.27.shortDescription"),
      description: t("pricePage.27.description"),
      price: "400",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    },
    {
      id: 28,
      title: t("pricePage.28.title"),
      shortDescription: t("pricePage.28.shortDescription"),
      description: t("pricePage.28.description"),
      price: "500",
      duration: "20",
      doctors: [t("pricePage.doctorIgor"), t("pricePage.doctorOlena")]
    }
  ];

  return services;
};
