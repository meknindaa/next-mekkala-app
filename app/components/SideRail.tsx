"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faSquare,
  faChartBar,
  faFolderOpen,
  faScrewdriverWrench,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export default function SideRail() {
  const path = usePathname();

  const activeStyle = "ring-2 ring-[#ff6a1a] text-[#ff6a1a]";
  const normalStyle = "text-neutral-300 group-hover:text-white";

  return (
    <aside
      aria-label="Side rail"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50
                 h-[80vh] w-14 rounded-[2rem]
                 border border-neutral-700/40 bg-neutral-900/40
                 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                 flex flex-col items-center justify-center gap-6"
    >
      {/* Home */}
      <Link
        href="/"
        aria-label="Home"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faHouse}
          className={`text-[20px] transition-colors ${
            path === "/" ? activeStyle : normalStyle
          }`}
        />
      </Link>

      {/* About */}
      <Link
        href="/aboutme"
        aria-label="About"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/aboutme" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faUser}
          className={`text-[20px] transition-colors ${
            path === "/aboutme" ? activeStyle : normalStyle
          }`}
        />
      </Link>

      {/* Education */}
      <Link
        href="/eduexp"
        aria-label="Education"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/eduexp" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faSquare}
          className={`text-[20px] transition-colors ${
            path === "/eduexp" ? activeStyle : normalStyle
          }`}
        />
      </Link>

      {/* Specialization */}
      <Link
        href="/spec"
        aria-label="Specialization"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/spec" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faChartBar}
          className={`text-[20px] transition-colors ${
            path === "/spec" ? activeStyle : normalStyle
          }`}
        />
      </Link>

      {/* Projects */}
      <Link
        href="/projects"
        aria-label="Projects"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/projects" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faFolderOpen}
          className={`text-[20px] transition-colors ${
            path === "/projects" ? activeStyle : normalStyle
          }`}
        />
      </Link>

      {/* Skills */}
      <Link
        href="/skills"
        aria-label="Skills"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/skills" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faScrewdriverWrench}
          className={`text-[20px] transition-colors ${
            path === "/skills" ? activeStyle : normalStyle
          }`}
        />
      </Link>

      {/* Contact */}
      <Link
        href="/contactme"
        aria-label="Contact"
        className={`group grid place-items-center h-11 w-11 rounded-xl transition-all duration-150 hover:bg-white/10 ${
          path === "/contactme" ? "ring-2 ring-[#ff6a1a]" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faCommentDots}
          className={`text-[20px] transition-colors ${
            path === "/contactme" ? activeStyle : normalStyle
          }`}
        />
      </Link>
    </aside>
  );
}