import React from "react";

export default function SingleEntry({ children, isMobile }) {
  return (
    <div className={`w-full flex flex-col ${isMobile ? "gap-3" : "gap-5"}`}>
      {children}
    </div>
  );
}
