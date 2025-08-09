import React from "react";

export default function Slider({
  value,
  setValue,
  valueName,
  singular,
  plural,
  min,
  max,
}) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const sliderRef = React.useRef(null);

  // Update input value when prop value changes
  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Calculate percentage for slider position
  const percentage = ((value - min) / (max - min)) * 100;

  // Handle slider drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderValue(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Update slider value based on mouse position
  const updateSliderValue = (e) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    const newValue = Math.round(min + (percentage / 100) * (max - min));

    setValue((prev) => ({ ...prev, [valueName]: newValue }));
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Update value immediately if it's a valid number within range
    const numValue = parseInt(newValue);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      setValue((prev) => ({ ...prev, [valueName]: numValue }));
    }
  };

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(min, Math.min(max, numValue));
      setValue((prev) => ({ ...prev, [valueName]: clampedValue }));
      setInputValue(clampedValue);
    } else {
      setInputValue(value);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  // Add global mouse event listeners when dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="w-full py-4 select-none flex gap-6">
      {/* Slider Container */}
      <div className="relative w-full">
        {/* Slider Track Container - Extended clickable area */}
        <div
          ref={sliderRef}
          className="relative w-full py-3 cursor-pointer"
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Actual Track */}
          <div className="relative w-full h-[0.38rem] bg-gray-300 rounded-full">
            {/* Filled Track */}
            <div
              className={`absolute h-full bg-blue-600 rounded-full ${
                isDragging ? "" : "transition-all duration-150"
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Slider Handle */}
          <div
            className={`absolute w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg transform -translate-y-1/2 -translate-x-3 cursor-grab ${
              isDragging
                ? "cursor-grabbing scale-110"
                : "transition-all duration-150"
            } ${isHovering && !isDragging ? "scale-110" : ""}`}
            style={{ left: `${percentage}%`, top: "50%" }}
          >
            {/* Hover Tooltip */}
            {(isHovering || isDragging) && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2  text-black bg-white border-2 border-black rounded-[0.375rem] text-[1rem] leading-[1.2] tracking-[-0.0075rem] font-medium px-2 py-[0.38rem] whitespace-nowrap">
                {value} {value <= 1 ? singular : plural}
              </div>
            )}
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>
            {min} {min <= 1 ? singular : plural}
          </span>
          <span>
            {max} {max <= 1 ? singular : plural}
          </span>
        </div>
      </div>

      {/* Input Field */}
      <div className="flex items-center justify-end">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyPress={handleInputKeyPress}
          min={min}
          max={max}
          className="w-[4rem] px-2 py-2 text-center border-[2px] border-black rounded-[0.5rem] focus:border-blue-600 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
}
