"use client";

import type { HTMLAttributes } from "react";
import type { IconType } from "react-icons";

type SkillOrbProps = HTMLAttributes<HTMLDivElement> & {
  icon: IconType;
  label: string;
  value: number; // 0-100
};

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Skill({
  icon: Icon,
  label,
  value,
  className,
  ...rest
}: SkillOrbProps) {
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div
      {...rest}
      className={cx("group flex flex-col items-center cursor-pointer", className)}
      aria-label={`${label} ${pct} percent`}
    >
      <div
        className={cx(
          "size-40 rounded-full inline-grid place-items-center",
          "border border-zinc-700/70 transition-colors duration-300",
          "group-hover:border-sky-400/60"
        )}
      >
        <div className="flex flex-col items-center gap-3">
          <Icon className="h-[3.75rem] w-[3.75rem] text-white transition-colors duration-300 group-hover:text-sky-400" />
          <span className="font-medium text-[#FF5C00]">{pct}%</span>
        </div>
      </div>

      <p className="mt-3 text-center text-sm text-zinc-200">{label}</p>
    </div>
  );
}