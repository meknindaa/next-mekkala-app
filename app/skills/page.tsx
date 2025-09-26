"use client";

import MyProfile from "../components/MyProfile";
import SideRail from "../components/SideRail";
import SkillOrb from "../components/Skill";

import { FaReact, FaFigma, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiHtml5 } from "react-icons/si";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white flex items-start justify-center px-6 py-10">
      {/* ซ้าย: MyProfile */}
      <div className="hidden lg:block w-[320px] mr-10">
        <MyProfile />
      </div>

      {/* กลาง: เนื้อหาสกิล */}
      <section className="max-w-3xl flex-1">
        <h1 className="text-4xl font-bold mb-12">
          My <span className="text-[#FF5C00]">Skills</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <SkillOrb icon={FaReact}    label="React"      value={60} />
          <SkillOrb icon={FaFigma}    label="Figma"      value={85} />
          <SkillOrb icon={SiHtml5}    label="HTML/CSS"   value={80} />
          <SkillOrb icon={SiNextdotjs} label="Next.js"   value={80} />
          <SkillOrb icon={FaNodeJs}   label="JavaScript" value={60} />
          <SkillOrb icon={FaGithub}   label="GitHub"     value={90} />
        </div>
      </section>

      {/* ขวา: SideRail */}
      <SideRail />
    </div>
  );
}