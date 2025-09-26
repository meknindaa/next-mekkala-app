"use client";

import MyProfile from "../components/MyProfile";
import SideRail from "../components/SideRail";

export default function EduExpPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย: MyProfile */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง */}
      <section className="max-w-3xl flex-1">
        <h2 className="text-3xl font-bold text-neutral-200">
          Education & <span className="text-[#FF5C00]">Experience</span>
        </h2>

        {/* 2022 - Present */}
        <div className="mt-8">
          <p className="text-[#FF5C00] font-semibold">2022 - Present</p>
          <p className="mt-1 font-bold">UI/UX Designer</p>
          <p className="text-neutral-400 text-sm">Freelance</p>
          <p className="mt-2 font-bold">Fullstack Web Developer</p>
          <p className="text-neutral-400 text-sm">Freelance</p>
        </div>

        {/* 2022 - 2025 */}
        <div className="mt-8">
          <p className="text-[#FF5C00] font-semibold">2022 - 2025</p>
          <p className="mt-1 font-bold">
            Bachelor Degree in Technology Digital and Innovation
          </p>
          <p className="text-neutral-400 text-sm">
            Southeast Asia University
          </p>
        </div>

        {/* 2016 - 2021 */}
        <div className="mt-8">
          <p className="text-[#FF5C00] font-semibold">2016 - 2021</p>
          <p className="mt-1 font-bold">High school</p>
          <p className="text-neutral-400 text-sm">Nakornpathom School</p>
        </div>
      </section>

      {/* ขวา: SideRail */}
      <SideRail />
    </div>
  );
}