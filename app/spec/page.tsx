"use client";

import MyProfile from "../components/MyProfile";
import SideRail from "../components/SideRail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

export default function SpecPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย: MyProfile */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง */}
      <section className="max-w-3xl flex-1">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#FF5C00]">Specializations</span>
        </h2>

        <div className="mt-8 space-y-6">
          {/* Card 1 */}
          <article className="relative rounded-2xl border border-[#FF5C00]/70 bg-neutral-900/40 p-5">
            <h3 className="font-semibold">Front end-developer</h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
              Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.
            </p>
            <span className="absolute right-4 top-4 text-[#FF5C00]">
              <FontAwesomeIcon icon={faCode} />
            </span>
          </article>

          {/* Card 2 */}
          <article className="relative rounded-2xl border border-[#FF5C00]/70 bg-neutral-900/40 p-5">
            <h3 className="font-semibold">UI/UX Designer</h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
              UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.
            </p>
            <span className="absolute right-4 top-4 text-[#FF5C00]">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </article>

          {/* Card 3 */}
          <article className="relative rounded-2xl border border-[#FF5C00]/70 bg-neutral-900/40 p-5">
            <h3 className="font-semibold">Graphic designer</h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
              As a graphic designer, I transform ideas into visually striking and impactful designs.
            </p>
            <span className="absolute right-4 top-4 text-[#FF5C00]">
              <FontAwesomeIcon icon={faFeatherPointed} />
            </span>
          </article>
        </div>
      </section>

      {/* ขวา: SideRail */}
      <SideRail />
    </div>
  );
}