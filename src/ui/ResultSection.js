import React from "react";
import EntryBadge from "./EntryBadge";
export default function ResultSection({
  color,
  icon,
  title,
  children,
  bottomText,
  bottomTextLink,
  isMobile,
}) {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${color} border-2 rounded-[0.75rem] w-full ${
        isMobile ? "py-4 px-3" : "py-8 px-6"
      }`}
    >
      <div className={`flex items-center gap-2 ${isMobile ? "flex-col" : ""}`}>
        <EntryBadge name={icon} />
        <p className="text-[1.25rem] font-semibold leading-[1.3] mobile:text-[1rem]">
          {title}
        </p>
      </div>
      <div className="flex items-center mobile:flex-col">{children}</div>
      {bottomText && (
        <a
          href={bottomTextLink}
          className="text-[1rem] font-semibold leading-[1] tracking-[-0.0225rem] underline p-3 mobile:text-[0.25rem]"
        >
          {bottomText}
        </a>
      )}
    </div>
  );
}
