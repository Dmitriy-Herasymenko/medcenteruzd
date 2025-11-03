"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons({
  phone = "+380674935104",
}: {
  phone?: string;
}) {
let sanitizedPhone = phone.replace(/[^\d+]/g, "");
if (!sanitizedPhone.startsWith("+")) {
  sanitizedPhone = "+38" + sanitizedPhone;
}

  return (
    <>
      <a
        href={`tel:${sanitizedPhone}`}
        aria-label="Call"
        className={`
          fixed z-50 bottom-18 right-5
          w-12 h-12 rounded-full
          flex items-center justify-center
          text-white shadow-lg
          bg-green-500
          transition-all duration-300
          hover:scale-110
        `}
      >
        <span
          className={`
            absolute w-16 h-16 rounded-full 
            animate-phone-pulse opacity-75 bg-green-400
          `}
        ></span>
        <FaPhoneAlt className="w-6 h-6 relative z-10" />
      </a>

    </>
  );
}
