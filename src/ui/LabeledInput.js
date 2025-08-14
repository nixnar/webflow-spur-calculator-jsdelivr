import React from "react";

export default function LabeledInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  error,
}) {
  const inputClasses = `w-full border-[2px] rounded-[0.625rem] px-4 py-3 text-[1rem] focus:outline-none ${
    error
      ? "border-red-600 focus:border-red-600"
      : "border-black focus:border-blue-600"
  }`;

  return (
    <div>
      <label htmlFor={name} className="block text-[1rem] font-semibold mb-2">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={inputClasses}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
