import React from "react";

export default function Dropdown({ value, setValue, valueName, options }) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const selected = options.find((o) => o.value === value) || options[0];
  const [highlightIndex, setHighlightIndex] = React.useState(
    Math.max(
      0,
      options.findIndex((o) => o.value === value)
    )
  );

  // Close on outside click
  React.useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const commit = (option) => {
    setValue((prev) => ({ ...prev, [valueName]: option.value }));
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (
      !open &&
      (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")
    ) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      commit(options[highlightIndex]);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className="w-full flex items-center justify-between border-[2px] border-black rounded-[0.625rem] px-4 py-3 text-[1rem] font-medium leading-[1.3] tracking-[-0.0075rem] bg-white focus:outline-none focus:border-blue-600"
      >
        <span>{selected.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          className={`${open ? "rotate-180" : ""} transition-transform`}
        >
          <path
            d="M5 7.69995L10 12.7L15 7.69995"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-10 mt-2 w-full max-h-64 overflow-auto bg-white border-[2px] border-blue-600 rounded-[0.625rem] shadow-sm"
        >
          {options.map((option, idx) => {
            const active = idx === highlightIndex;
            const isSelected = option.value === selected.value;
            return (
              <li
                role="option"
                aria-selected={isSelected}
                key={option.value}
                className={`px-4 py-2 cursor-pointer text-[1rem] leading-[1.3] tracking-[-0.0075rem] ${
                  active ? "bg-gray-100" : "bg-white"
                } ${isSelected ? "font-semibold" : "font-medium"}`}
                onMouseEnter={() => setHighlightIndex(idx)}
                onClick={() => commit(option)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
