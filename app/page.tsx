import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "УЗД органів малого тазу",
    description: "Безпечне та безболісне дослідження.",
  },
  {
    title: "УЗД щитовидної залози",
    description: "Швидка та точна діагностика.",
  },
  {
    title: "Еластографія печінки",
    description: "Оцінка стану печінки без інвазивних процедур.",
  },
];

const testimonials = [
  { name: "Юлія", feedback: "Безмежно вдячна за тепле ставлення та професіоналізм." },
  { name: "Василь", feedback: "Мудрий, знаючий, досвідчений лікар." },
  { name: "Наталія", feedback: "Дуже гарний лікар!" },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16">
        <div className="absolute inset-0">
          <Image
            src="/imgs/hero-image.jpg"
            alt="УЗД діагностика"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            УЗД діагностика в м. Умань
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Точні результати, професійний підхід, комфортні умови
          </p>
          <Link
            href="/appointment"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            Записатися на прийом
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Наші послуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Відгуки наших пацієнтів</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex-1"
              >
                <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Зв'язатися з нами</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
            <h3 className="text-xl font-semibold mb-4">Контакти</h3>
            <p>📍 м. Умань, вул. Центральна, 1</p>
            <p>📞 +38 (067) 123 45 67</p>
            <p>📧 info@medcenteruzd.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
            <h3 className="text-xl font-semibold mb-4">Графік роботи</h3>
            <p>🕗 Пн-Пт: 08:00 - 18:00</p>
            <p>🕗 Сб: 08:00 - 14:00</p>
            <p>🕗 Нд: Вихідний</p>
          </div>
        </div>
      </section>
    </div>
  );
}
