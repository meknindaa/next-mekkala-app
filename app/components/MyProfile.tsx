"use client";

import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa6";
import picpro from "../../images/me.jpg";

export default function MyProfile() {
  const name = "Mekkala";
  const studentId = "6552410007";
  const role = "Fullstack Web Developer";

  return (
    <aside
      className="w-full max-w-[300px] rounded-2xl overflow-hidden
                 bg-neutral-900 text-neutral-200 shadow-lg text-center
                 flex flex-col items-center p-6 space-y-4"
    >
      {/* ชื่อ */}
      <h2 className="text-2xl font-semibold">
        <span className="text-[#FF5C00]">M</span>
        {name.slice(1)}
      </h2>

      {/* รูป */}
      <Image
        src={picpro}
        alt="Profile"
        width={220}
        height={220}
        className="rounded-xl object-cover"
        priority
      />

      {/* Student ID / Role */}
      <div className="space-y-1">
        <p className="text-sm text-white">
          STU ID: <span className="tracking-wider">{studentId}</span>
        </p>
        <p className="text-sm text-neutral-400">{role}</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-2 text-xl">
        <a href="https://facebook.com" target="_blank" className="hover:text-[#1877f2] transition">
          <FaFacebookF />
        </a>
        <a href="https://x.com" target="_blank" className="hover:text-white transition">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-[#0A66C2] transition">
          <FaLinkedinIn />
        </a>
        <a href="https://google.com" target="_blank" className="hover:text-red-500 transition">
          <FaGoogle />
        </a>
      </div>

      {/* ปุ่ม Hire Me */}
      <button
        className="mt-4 w-full rounded-xl bg-[#FF5C00] py-2.5
                   text-black font-semibold tracking-wide
                   hover:opacity-90 active:scale-95 transition"
      >
        HIRE ME !
      </button>
    </aside>
  );
}
