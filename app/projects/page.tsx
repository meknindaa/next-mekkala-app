"use client";

import MyProfile from "../components/MyProfile";
import SideRail from "../components/SideRail";

import Image from "next/image";

import pic from "../../images/pic.png";   
import play from "../../images/play.png"; 

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย: MyProfile */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง*/}
      <section className="max-w-3xl flex-1">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-[#FF5C00]">Projects</span>
        </h2>

        <h3 className="mt-6 text-xl font-semibold">
          Manage Task App - fullstack web development
        </h3>
        <p className="mt-2 text-neutral-400">
          Here&apos;s my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the responsive
          landing page in action!
        </p>

        {/* รูป */}
        <div className="relative mt-8 w-full max-w-2xl">
          <Image
            src={pic}
            alt="Project screenshot"
            className="rounded-lg shadow-lg"
          />
          <Image
            src={play}
            alt="Play button"
            width={80}
            height={80}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>

      {/* ขวา */}
      <SideRail />
    </div>
  );
}