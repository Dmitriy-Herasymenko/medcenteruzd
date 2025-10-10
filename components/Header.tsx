"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Напрямки УЗД" },
  { href: "/doctors", label: "Лікарі" },
  { href: "/about", label: "Про нас" },
  { href: "/price", label: "Прайс" },
  { href: "/blog", label: "Блог" },
  { href: "/faq", label: "Питання" },
  { href: "/contacts", label: "Контакти" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
  
        <Link href="/" className="flex items-center">
          <Image
            src="/imgs/logo-kabinet-kobyliaka-1.png"
            alt="Медцентр УЗД"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-6 uppercase font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-800 hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+380674935104"
            className="text-blue-600 font-semibold hover:underline"
          >
            +38 067 493 51 04
          </a>
          <Link
            href="/appointment"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Записатися
          </Link>
        </div> */}

        {/* MobileBtn */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* MobileNav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slide-down">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-800 font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+380674935104"
              className="mt-2 font-semibold text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              +38 067 493 51 04
            </a>
            <Link
              href="/appointment"
              className="px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Записатися
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
