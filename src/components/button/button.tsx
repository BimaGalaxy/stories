import React from 'react';
import './button.css';

interface ButtonProps {
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={[
        `hover:scale-105 transition-all duration-400 rounded-full shadow`,
        `storybook-button-${size}`,
        `storybook-button-${variant}`,
      ].join(" ")}
      onClick={onClick}
    >
      <p className="font-semibold">{label}</p>
    </button>
  );
};