"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Напрямки УЗД" },
  { href: "/doctors", label: "Лікарі" },
  { href: "/price", label: "Прайс" },
  { href: "/contacts", label: "Контакти" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("uk");
  const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
 
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/imgs/logo-kabinet-kobyliaka-1.png"
            alt="Медцентр УЗД"
            width={140}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop menu */}
  

        {/* Actions (Desktop) */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 text-sm font-semibold uppercase hover:text-[#133b88] transition-colors text-[14px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
          <button className="bg-[#133b88] hover:bg-[#1b4cb0] rounded-full text-white text-sm px-5 py-2 font-medium shadow-sm transition cursor-pointer">
            Записатися
          </button>

          {/* Language Switch */}
          <div className="hidden md:flex items-center gap-1 border rounded-full bg-gray-50 hover:bg-gray-100 transition px-2 py-1 cursor-pointer">
            {["uk", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`w-7 h-7 cursor-pointer flex items-center justify-center rounded-full text-[13px] font-medium transition ${
                  lang === l
                    ? "bg-[#133b88] text-white"
                    : "text-gray-600 hover:text-[#133b88]"
                }`}
              >
                {l === "uk" ? "UA" : "EN"}
              </button>
            ))}
          </div>

          {/* Themes Switch */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-700 transition cursor-pointer"
          >
            {theme === "light" ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow animate-slide-down">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700 hover:text-[#133b88]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/appointment"
              className="mt-4 block text-center bg-[#133b88] text-white rounded-full py-2 font-medium hover:bg-[#1b4cb0] transition"
              onClick={() => setMenuOpen(false)}
            >
              Записатися
            </Link>

            {/* Мова + тема */}
            <div className="flex justify-center items-center gap-3 mt-4">
              <div className="flex items-center gap-1 border rounded-full bg-gray-50 hover:bg-gray-100 transition px-2 py-1">
                {["uk", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-medium transition ${
                      lang === l
                        ? "bg-[#133b88] text-white"
                        : "text-gray-600 hover:text-[#133b88]"
                    }`}
                  >
                    {l === "uk" ? "UA" : "EN"}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-700 transition"
              >
                {theme === "light" ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
