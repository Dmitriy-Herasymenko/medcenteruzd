import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiViber } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <Image
          src="/imgs/logo-kabinet-kobyliaka-1.png"
          alt="Медцентр УЗД"
          width={250}
          height={250}
          className="h-12 w-auto"
        />
        <div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Контакти
          </h3>
          <p className="text-gray-600 mt-1">
            Тел: <a href="tel:+380674935104" className="hover:underline">+38 067 493 51 04</a>
          </p>
          <p className="text-gray-600">м. Умань, вул. Шевченка, 50</p>

          <p className="text-gray-600 mt-1">
            Email: <a href="mailto:medcenteruzd@gmail.com" className="hover:underline">medcenteruzd@gmail.com</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Інформація
          </h3>
          <ul className="space-y-2">
            <li><Link href="/services">Послуги</Link></li>
            <li><Link href="/doctors">Лікарі</Link></li>
            <li><Link href="/contacts">Контакти</Link></li>
            <li><Link href="/blog">Статі</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Соціальні мережі
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Viber"
            >
              <SiViber size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
