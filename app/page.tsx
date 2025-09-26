"use client";

import MyProfile from "./components/MyProfile"; 
import SideRail from "./components/SideRail"; 

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง*/}
      <section className="max-w-3xl flex-1">
        <p className="text-xl text-neutral-300">
          Lets Work <span className="text-[#FF5C00]">Together !</span>
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
          Hi From <span className="text-[#FF5C00]">Yourname</span>,<br />
          Interactive Designer & Fullstack<br />
          Web Developer
        </h1>

        <p className="mt-6 text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
          tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
          architecto earum voluptates obcaecati corrupti voluptatem.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8">
          <div>
            <div className="text-5xl text-[#FF5C00] font-semibold">3+</div>
            <div className="mt-2 text-neutral-400 text-sm">
              Years of<br />Experience
            </div>
          </div>
          <div>
            <div className="text-5xl text-[#FF5C00] font-semibold">10+</div>
            <div className="mt-2 text-neutral-400 text-sm">
              Projects<br />Completed
            </div>
          </div>
        </div>
      </section>

      {/* ขวา */} 
      <SideRail />
    </div>
  );
}