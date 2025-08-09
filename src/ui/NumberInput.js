import React from "react";

export default function NumberInput({ value, setValue, valueName, min, max }) {
  const inputRef = React.useRef(null);
  const [input, setInput] = React.useState(String(value ?? 0));

  // Keep UI text synced with value unless the user is actively clearing
  React.useEffect(() => {
    const active = document.activeElement === inputRef.current;
    if (!active || input !== "") {
      setInput(String(value ?? 0));
    }
  }, [value]);

  const handleChange = (e) => {
    const raw = e.target.value;
    // only digits
    const digits = raw.replace(/[^0-9]/g, "");
    if (digits === "") {
      setInput("");
      // allow empty field; keep state as 0 underneath
      setValue((prev) => ({ ...prev, [valueName]: 0 }));
      return;
    }
    let num = parseInt(digits, 10);
    // prevent typing beyond max
    if (typeof max === "number" && num > max) {
      num = max;
    }
    setInput(String(num));
    const clamped = Math.max(
      min,
      typeof max === "number" ? Math.min(max, num) : num
    );
    setValue((prev) => ({ ...prev, [valueName]: clamped }));
  };

  const handleBlur = () => {
    if (input === "") setInput("0");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.currentTarget.blur();
  };

  return (
    <div className="w-full flex gap-1 border-[2px] border-black rounded-[0.625rem] px-4 py-3 focus-within:border-blue-600 text-[1rem] font-medium leading-[1.3] tracking-[-0.0075rem] items-center">
      {/* Prefix */}
      <span className="text-black select-none">$</span>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-full bg-transparent outline-none text-black"
        aria-label="number input"
      />
    </div>
  );
}
