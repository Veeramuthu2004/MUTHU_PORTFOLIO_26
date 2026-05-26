import React from "react";
import "./ToggleSwitch.css";

/**
 * ToggleSwitch (Tailwind friendly)
 * Props:
 * - checked: boolean
 * - onChange: function(newBool)
 * - disabled: boolean
 * - id: string
 * - size: 'sm' | 'md' | 'lg'
 */
export default function ToggleSwitch({
  checked = false,
  onChange = () => {},
  disabled = false,
  id,
  size = "md",
}) {
  const sizes = {
    sm: { track: "w-10 h-6 p-1", thumb: "w-4 h-4", translate: "translate-x-4" },
    md: { track: "w-12 h-7 p-1", thumb: "w-5 h-5", translate: "translate-x-5" },
    lg: {
      track: "w-14 h-8 p-1.5",
      thumb: "w-6 h-6",
      translate: "translate-x-6",
    },
  };
  const s = sizes[size] || sizes.md;

  function toggle() {
    if (disabled) return;
    onChange(!checked);
  }

  function onKeyDown(e) {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange(!checked);
    }
  }

  const sizeClass = size === "sm" ? "ts-sm" : size === "lg" ? "ts-lg" : "ts-md";

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      onClick={toggle}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={`ts-toggle ${sizeClass} ${checked ? "ts-checked" : ""} ${disabled ? "ts-disabled" : ""}`}
    >
      <span className="ts-thumb" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 6L9 17l-5-5"
            stroke="#0b2734"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="sr-only">{checked ? "On" : "Off"}</span>
    </button>
  );
}
