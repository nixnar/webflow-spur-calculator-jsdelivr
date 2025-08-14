import React from "react";
import EntryBadge from "./EntryBadge";
export default function InputTitle({
  children,
  icon,
  secondaryText,
  isMobile,
}) {
  const titleRef = React.useRef(null);
  const [isMultiline, setIsMultiline] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      if (!titleRef.current) return;
      const el = titleRef.current;
      const computedLineHeight = parseFloat(
        window.getComputedStyle(el).lineHeight
      );
      const isWrapped = el.offsetHeight > computedLineHeight * 1.2; // small buffer
      setIsMultiline(isWrapped);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [children]);

  return (
    <div className=" flex flex-col gap-[0.12rem]">
      <div
        className={`flex gap-[0.62rem] ${
          isMultiline ? "items-start" : "items-center"
        } ${isMobile && "flex-col items-center justify-center text-center"}`}
      >
        <EntryBadge
          name={icon}
          className={`${isMultiline ? "mt-[0.125rem]" : ""} min-w-6 min-h-6`}
        />
        <p
          ref={titleRef}
          className={`text-black text-[1.5rem] leading-[1.25] font-semibold ${
            isMobile && "text-center"
          }`}
        >
          {children}
        </p>
      </div>
      <div
        className={`text-gray-500 text-[1rem] leading-[1.4] font-normal ${
          isMobile && "text-center"
        }`}
      >
        {secondaryText}
      </div>
    </div>
  );
}
