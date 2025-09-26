"use client";

import MyProfile from "../components/MyProfile";
import SideRail from "../components/SideRail";

export default function ContactMePage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย: MyProfile */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง: เนื้อหา */}
      <section className="max-w-3xl w-full flex-1">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Contact <span className="text-[#FF5C00]">Me</span>
        </h2>
        <p className="mt-4 text-xl text-neutral-300">Let&apos;s get in touch!</p>

        {/* Form */}
        <form
          className="mt-10 space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            // คุณค่อยผูก action/submit ภายหลังได้
          }}
        >
          {/*  Email / Phone */}
          <div className="grid md:grid-cols-2 gap-10">
            <label className="block">
              <span className="text-[#FF5C00]">Email</span>
              <input
                type="email"
                className="mt-2 w-full bg-transparent outline-none border-b border-neutral-600/60 focus:border-[#FF5C00] py-2 transition"
                required
              />
            </label>

            <label className="block">
              <span className="text-[#FF5C00]">Phone</span>
              <input
                type="tel"
                className="mt-2 w-full bg-transparent outline-none border-b border-neutral-600/60 focus:border-[#FF5C00] py-2 transition"
              />
            </label>
          </div>

          {/* Name / Adress */}
          <div className="grid md:grid-cols-2 gap-10">
            <label className="block">
              <span className="text-[#FF5C00]">Name</span>
              <input
                type="text"
                className="mt-2 w-full bg-transparent outline-none border-b border-neutral-600/60 focus:border-[#FF5C00] py-2 transition"
              />
            </label>

            <label className="block">
              <span className="text-[#FF5C00]">Adress</span>
              <input
                type="text"
                className="mt-2 w-full bg-transparent outline-none border-b border-neutral-600/60 focus:border-[#FF5C00] py-2 transition"
              />
            </label>
          </div>

          {/* Content */}
          <div>
            <label className="block">
              <span className="text-[#FF5C00]">Content</span>
              <textarea
                rows={6}
                className="mt-2 w-full bg-transparent outline-none border-b border-neutral-600/60 focus:border-[#FF5C00] py-2 transition resize-none"
              />
            </label>
          </div>

          {/* Newsletter */}
          <label className="mt-2 flex items-center gap-3 text-neutral-300 text-sm">
            <input
              type="checkbox"
              className="appearance-none h-4 w-4 rounded border border-neutral-500
                         checked:bg-[#FF5C00] checked:border-[#FF5C00] grid place-items-center"
            />
            I would like to receive the newsletter.
          </label>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-56 rounded-xl bg-[#FF5C00] py-3 font-semibold text-black
                         tracking-wide hover:opacity-90 active:translate-y-[1px] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* ขวา: SideRail */}
      <SideRail />
    </div>
  );
}