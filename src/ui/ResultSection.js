import React from "react";
import EntryBadge from "./EntryBadge";
export default function ResultSection({
  color,
  icon,
  title,
  description,
  children,
  bottomText,
  bottomTextLink,
}) {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${color} border-2 rounded-[0.75rem] py-8 px-6 w-full`}
    >
      <div className="flex items-center gap-2">
        <EntryBadge name={icon} />
        <p className="text-[1.25rem] font-semibold leading-[1.3]">{title}</p>
      </div>
      <div className="flex items-center">{children}</div>
      {bottomText && (
        <a
          href={bottomTextLink}
          className="text-[1rem] font-semibold leading-[1] tracking-[-0.0225rem] underline p-3"
        >
          {bottomText}
        </a>
      )}
    </div>
  );
}
