"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SpecialistsSlider from "../components/SpecialistsSlider";

function HeroSection() {
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

      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          УЗД діагностика в м. Умань
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
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

  )
}

function WhyChooseUsSection() {
  const items = [
    {
      title: "Досвідчені фахівці:",
      description:
        "Наші лікарі-діагности мають глибокі знання та великий досвід проведення досліджень.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Сучасне обладнання:",
      description:
        "Ми використовуємо новітні УЗД-апарати, що забезпечують точність та якість зображення.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Широкий спектр досліджень:",
      description:
        "Пропонуємо УЗД будь-яких органів і систем — від загальних до спеціалізованих обстежень.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Комфортні умови:",
      description:
        "Ми створюємо приємну атмосферу, щоб процедура проходила спокійно і без стресу.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Чому обирають нас
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className=" top-4 left-4">
              <Image
                src={item?.imgUrl}
                alt={item?.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutUsSection() {

  return (
    <section className="container mx-auto px-4 py-16 bg-[#edf5fd]">
      <h2 className="text-3xl font-bold text-center mb-12">Про нас</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="relative max-w-[530px]  md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/uzd_pechinky.jpg"
            alt="Медичний центр УЗД"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Сучасний медичний центр УЗД у м. Умань
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Наш медичний центр спеціалізується на проведенні ультразвукових
            досліджень із застосуванням сучасного обладнання. Ми прагнемо
            забезпечити кожному пацієнту точну діагностику, комфортні умови та
            професійне обслуговування.
          </p>
          <p className="text-gray-600 leading-relaxed">
            У нас працюють досвідчені лікарі, які дбають про ваш комфорт та
            якість обстеження. Ми постійно вдосконалюємося, щоб відповідати
            найвищим стандартам медичних послуг.
          </p>
          <button className=" bg-[#133b88] px-6 py-2 text-white cursor-pointer font-semibold rounded-[20px] shadow-lg hover:bg-gray-100 hover:text-black">Записатися</button>
        </div>
      </div>
    </section>
  );
}


function AboutAndWhySection() {
  const items = [
    {
      title: "Досвідчені фахівці",
      description:
        "Наші лікарі мають глибокі знання та великий досвід проведення досліджень.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Сучасне обладнання",
      description:
        "Ми використовуємо новітні УЗД-апарати для максимально точної діагностики.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Широкий спектр досліджень",
      description:
        "Пропонуємо УЗД будь-яких органів і систем — від загальних до спеціалізованих обстежень.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Комфортні умови",
      description:
        "Ми створюємо приємну атмосферу, щоб процедура проходила спокійно і без стресу.",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
  ];

  return (
    <section className="relative  py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="relative h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/imgs/uzd_pechinky.jpg"
              alt="Медичний центр УЗД"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-[#133b88]">
              Про нас
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold">
              Сучасний медичний центр УЗД у м. Умань
            </h3>
            <p className="leading-relaxed text-gray-600">
              Наш медичний центр спеціалізується на проведенні ультразвукових
              досліджень із застосуванням сучасного обладнання. Ми прагнемо
              забезпечити кожному пацієнту точну діагностику, комфортні умови та
              професійне обслуговування.
            </p>
            <p className="leading-relaxed text-gray-600">
              У нас працюють досвідчені лікарі, які дбають про ваш комфорт та
              якість обстеження. Ми постійно вдосконалюємося, щоб відповідати
              найвищим стандартам медичних послуг.
            </p>

            <button className="bg-[#133b88] hover:bg-[#1b4cb0] text-white px-8 py-3 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Записатися
            </button>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#133b88]">
            Чому обирають нас
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Ми поєднуємо професіоналізм, сучасне обладнання та турботу про
            пацієнтів — щоб кожен отримав якісне та комфортне обстеження.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300"
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// function ServicesSection() {
//   const items = [
//     {
//       title: "УЗД м’яких тканин:",
//       description:
//         "Ультразвукове дослідження (УЗД) м’яких тканин – це безпечний, безболісний і високоінф...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД серця",
//       description:
//         "Особливістю УЗД в нашому Центрі є те, що і діти і дорослі можуть пройти обстеження в ...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "Еластографія печінки",
//       description:
//         "Еластографія печінки – це неінвазивний метод ультразвукового дослідження, який дозвол...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД суглобів",
//       description:
//         "Ультразвукове дослідження (УЗД) суглобів – це безпечний та інформативний метод діагно...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД судин кінцівок",
//       description:
//         "Ультразвукове дослідження (УЗД) судин кінцівок – це безпечний та інформативний метод ...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД судин шиї та голови",
//       description:
//         "Ультразвукове дослідження (УЗД) судин шиї та голови – це безпечний та інформативний м...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД лімфатичних вузлів",
//       description:
//         "Ультразвукове дослідження (УЗД) лімфатичних вузлів – це безпечний та інформативний ме...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "Акушерство та гінекологія",
//       description:
//         "Ультразвукове дослідження (УЗД) матки та яєчників та вагітності по триместрам – це бе...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД внутрішніх органів",
//       description:
//         "Ультразвукове дослідження (УЗД) внутрішніх органів – це безпечний, безболісний і широ...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД щитовидної залози",
//       description:
//         "Ультразвукове дослідження (УЗД) щитоподібної залози – це безпечний і безболісний мето...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД сечостатевої системи",
//       description:
//         "УЗД сечостатевої системи – це важливий метод діагностики, який дозволяє виявити захво...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//     {
//       title: "УЗД молочних залоз",
//       description:
//         "Ультразвукове дослідження (УЗД) молочних залоз – це безпечний і безболісний метод діа...",
//       imgUrl: "/imgs/icon_logomed-3_50.svg",
//     },
//   ];

//   return (
//     <section className="bg-[#edf5fd] py-16 px-12">
//       <h2 className="text-3xl font-bold text-center mb-12">
//         Послуги УЗД
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md p-6 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             <div className=" top-4 left-4">
//               <Image
//                 src={item?.imgUrl}
//                 alt={item?.title}
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             </div>
//             <div className="mt-3">
//               <h3 className="text-xl font-semibold mb-3 text-gray-800">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function ServicesSection() {
  const items = [
    { title: "УЗД м’яких тканин", description: "Безпечне, безболісне дослідження м’яких тканин.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД серця", description: "Для дітей та дорослих — оцінка стану серцево-судинної системи.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "Еластографія печінки", description: "Неінвазивна оцінка стану тканини печінки.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД суглобів", description: "Діагностика захворювань опорно-рухового апарату.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД судин кінцівок", description: "Дослідження кровообігу у венах і артеріях кінцівок.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД судин шиї та голови", description: "Перевірка кровопостачання мозку та артерій.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД лімфатичних вузлів", description: "Безпечна діагностика збільшених лімфатичних вузлів.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "Акушерство та гінекологія", description: "Обстеження вагітності та жіночої репродуктивної системи.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД внутрішніх органів", description: "Комплексне дослідження органів черевної порожнини.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД щитовидної залози", description: "Перевірка структури та розміру залози.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД сечостатевої системи", description: "Діагностика захворювань сечового міхура, нирок, простати.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
    { title: "УЗД молочних залоз", description: "Профілактичне обстеження для жінок будь-якого віку.", imgUrl: "/imgs/icon_logomed-3_50.svg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 8);

  return (
    <section className="bg-[#edf5fd] py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold mb-12 text-[#133b88]">Послуги УЗД</h2>


      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700  ${showAll ? "max-h-[4000px]" : "max-h-[1100px]"
          }`}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow-md p-6 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Кнопка “Показати ще” */}
      <div className="mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#133b88] hover:bg-[#1b4cb0] text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 font-semibold cursor-pointer"
        >
          {showAll ? "Згорнути" : "Показати ще"}
        </button>
      </div>
    </section>
  );
}


function SpecialistsSection() {
  const specialists = [
    {
      name: "Кобиляк Ігор Анатолійович",
      specialization: "Лікар терапевт, лікар з ультразвукової діагностики",
      experience: "Лікар терапевт вищої категорії, лікар УЗД вищої категорії",
      practiceSince: "1993",
      email: "medcenteruzd@gmail.com",
      phone: "+38 067 493 51 04",
      image: "/imgs/kobyliak-igor-an-2048x1695.webp",
    },
    {
      name: "Кобиляк Олена Олексіївна",
      specialization: "Лікар ультразвукової діагностики",
      experience: "Лікар УЗД 1 категорії",
      practiceSince: "2010",
      email: "Kobilyakelena@gmail.com",
      phone: "+38 067 123 45 67",
      image: "/imgs/kobyliak-olena-2-2048x1695.webp",
    }
  ];
  return (
    <section className="py-16 px-12">
      <SpecialistsSlider slides={specialists} />
    </section>
  );
}


function TestimonialsSection() {
  const testimonials = [
    { name: "Юлія", feedback: "Безмежно вдячна за тепле ставлення та професіоналізм." },
    { name: "Василь", feedback: "Мудрий, знаючий, досвідчений лікар." },
    { name: "Наталія", feedback: "Дуже гарний лікар!" },
    { name: "Олександр", feedback: "Відмінне обслуговування та турбота про пацієнтів." },
    { name: "Ірина", feedback: "Рекомендую всім, хто цінує професіоналізм." },
    { name: "Максим", feedback: "Дуже привітний та уважний персонал." },
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-[#edf5fd]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#133b88] mb-12">
          Відгуки наших пацієнтів
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              {/* Лапки */}
              <div className="absolute -top-4 left-6 text-5xl text-[#133b88]/20 select-none">
                “
              </div>

              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                {testimonial.feedback}
              </p>
              <p className="text-gray-900 font-semibold text-right">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="space-y-16">

      {HeroSection()}
      {/* {WhyChooseUsSection()}
      {AboutUsSection()} */}
      {AboutAndWhySection()}
      {ServicesSection()}
      {SpecialistsSection()}
      {TestimonialsSection()}
    </div>
  );
}
