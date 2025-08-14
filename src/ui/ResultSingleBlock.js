import React from "react";
import EntryBadge from "./EntryBadge";
export default function ResultSingleBlock({
  title,
  description,
  icon,
  isMobile,
}) {
  return (
    <div
      className={`flex flex-col p-6 justify-start items-start text-left gap-2 flex-1 ${
        isMobile && "flex-col items-center justify-center p-3"
      }`}
    >
      <div>
        <EntryBadge
          name={icon}
          className="w-14 h-14 mb-2 mobile:w-10 mobile:h-10"
        />
      </div>
      <div
        className={`text-[1.5rem] font-bold leading-[1.2] tracking-[-0.0075rem] ${
          isMobile && "text-center"
        }`}
      >
        {title}
      </div>
      <div
        className={`text-[0.875rem] font-medium leading-[1.3] tracking-[-0.01313rem] ${
          isMobile && "text-center"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
