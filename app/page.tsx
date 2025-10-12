import Image from "next/image";
import Link from "next/link";

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

function ServicesSection() {
  const items = [
    {
      title: "УЗД м’яких тканин:",
      description:
        "Ультразвукове дослідження (УЗД) м’яких тканин – це безпечний, безболісний і високоінф...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД серця",
      description:
        "Особливістю УЗД в нашому Центрі є те, що і діти і дорослі можуть пройти обстеження в ...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Еластографія печінки",
      description:
        "Еластографія печінки – це неінвазивний метод ультразвукового дослідження, який дозвол...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД суглобів",
      description:
        "Ультразвукове дослідження (УЗД) суглобів – це безпечний та інформативний метод діагно...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД судин кінцівок",
      description:
        "Ультразвукове дослідження (УЗД) судин кінцівок – це безпечний та інформативний метод ...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД судин шиї та голови",
      description:
        "Ультразвукове дослідження (УЗД) судин шиї та голови – це безпечний та інформативний м...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД лімфатичних вузлів",
      description:
        "Ультразвукове дослідження (УЗД) лімфатичних вузлів – це безпечний та інформативний ме...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "Акушерство та гінекологія",
      description:
        "Ультразвукове дослідження (УЗД) матки та яєчників та вагітності по триместрам – це бе...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД внутрішніх органів",
      description:
        "Ультразвукове дослідження (УЗД) внутрішніх органів – це безпечний, безболісний і широ...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД щитовидної залози",
      description:
        "Ультразвукове дослідження (УЗД) щитоподібної залози – це безпечний і безболісний мето...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД сечостатевої системи",
      description:
        "УЗД сечостатевої системи – це важливий метод діагностики, який дозволяє виявити захво...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
    {
      title: "УЗД молочних залоз",
      description:
        "Ультразвукове дослідження (УЗД) молочних залоз – це безпечний і безболісний метод діа...",
      imgUrl: "/imgs/icon_logomed-3_50.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Послуги УЗД
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
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

function SpecialistsSection() {

  return (
    <section className="bg-[#edf5fd] py-16 px-12">
      <h2 className="text-3xl font-bold text-center mb-12">Кваліфіковані спеціалісти УЗД</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/kobyliak-igor-an-2048x1695.webp"
            alt="Медичний центр УЗД"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4 md:pl-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Кобиляк Ігор Анатолійович
          </h3>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Спеціальність:</p>

            Лікар терапевт, лікар з ультразвукової діагностики
          </span>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Досвід:</p>

            Лікар терапевт вищої категорії, лікар УЗД вищої категорії
          </span>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Практика:</p>

            з 1993
          </span>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Е-пошта:</p>

            medcenteruzd@gmail.com

          </span>
          <div className="text-gray-600 leading-relaxed">
            <p className="font-bold">Телефон:</p>
            +38 067 493 51 04
          </div>
          <button className="bg-[#133b88] px-6 py-2 text-white font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:text-black transition cursor-pointer">
            Записатися
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">

        <div className="space-y-4 md:pl-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Кобиляк Олена Олексіївна
          </h3>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Спеціальність:</p>

            Лікар ультразвукової діагностики
          </span>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Досвід:</p>

            Лікар УЗД 1 категорії
          </span>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Практика:</p>

            З 2010 року
          </span>
          <span className="text-gray-600 leading-relaxed">
            <p className="font-bold">Е-пошта:</p>


            Kobilyakelena@gmail.com

          </span>
          <div className="text-gray-600 leading-relaxed">
            <p className="font-bold">Телефон:</p>
            +38 067 123 45 67
          </div>
          <button className="bg-[#133b88] px-6 py-2 text-white font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:text-black transition cursor-pointer">
            Записатися
          </button>
        </div>

        <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/kobyliak-olena-2-2048x1695.webp"
            alt="Медичний центр УЗД"
            fill
            className="object-cover"
            priority
          />
        </div>


      </div>

    </section>
  );
}


function TestimonialsSection() {
  const testimonials = [
    { name: "Юлія", feedback: "Безмежно вдячна за тепле ставлення та професіоналізм." },
    { name: "Василь", feedback: "Мудрий, знаючий, досвідчений лікар." },
    { name: "Наталія", feedback: "Дуже гарний лікар!" },
    { name: "Юлія", feedback: "Безмежно вдячна за тепле ставлення та професіоналізм." },
    { name: "Василь", feedback: "Мудрий, знаючий, досвідчений лікар." },
    { name: "Наталія", feedback: "Дуже гарний лікар!" },
  ];
  return (
    <section className="px-12 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Відгуки наших пацієнтів</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex-1"
            >
              <p className="text-lg italic mb-4">{`"${testimonial.feedback}"`}</p>
              <p className="font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <div className="space-y-16">

      {HeroSection()}
      {WhyChooseUsSection()}
      {AboutUsSection()}
      {ServicesSection()}
      {SpecialistsSection()}
      {TestimonialsSection()}
    </div>
  );
}
