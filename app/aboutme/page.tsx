"use client";

import MyProfile from "../components/MyProfile";
import SideRail from "../components/SideRail";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง */}
      <section className="max-w-3xl flex-1">
        <h2 className="text-2xl font-semibold text-neutral-200">
          About <span className="text-[#FF5C00]">Me</span>
        </h2>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-snug">
          I find fulfillment in blending<br />
          visual design with the power of<br />
          coding to create meaningful<br />
          experiences.
        </h1>

        <p className="mt-6 text-neutral-400 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
          tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
          architecto earum voluptates obcaecati corrupti voluptatem.
        </p>
        <p className="mt-4 text-neutral-400 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
          tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
          architecto earum voluptates obcaecati corrupti voluptatem.
        </p>
      </section>

      {/* ขวา */}
      <SideRail />
    </div>
  );
}