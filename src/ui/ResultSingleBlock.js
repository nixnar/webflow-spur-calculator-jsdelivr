import React from "react";
import EntryBadge from "./EntryBadge";
export default function ResultSingleBlock({ title, description, icon }) {
  return (
    <div className="flex flex-col p-6 justify-start items-start text-left gap-2 flex-1">
      <div>
        <EntryBadge name={icon} className="w-14 h-14 mb-2" />
      </div>
      <div className="text-[1.5rem] font-bold leading-[1.2] tracking-[-0.0075rem]">
        {title}
      </div>
      <div className="text-[0.875rem] font-medium leading-[1.3] tracking-[-0.01313rem]">
        {description}
      </div>
    </div>
  );
}
