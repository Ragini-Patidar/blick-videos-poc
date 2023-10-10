import React, { MouseEvent, forwardRef } from "react";
import "./button.scss";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  label: string;
  url?: string;
  handleClick?: (event: MouseEvent, label: string) => void;
  customClass?: string;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  (
    { label, url, handleClick, customClass, variant = "primary" }: ButtonProps,
    ref
  ) => {
    return (
      <div ref={ref} className="button-container">
        {!!url ? (
          <a href={url} className={`${customClass} ${variant}`}>
            {label}
          </a>
        ) : (
          <button
            onClick={(event: MouseEvent) => handleClick?.(event, label)}
            className={`${customClass} ${variant}`}
          >
            {label}
          </button>
        )}
      </div>
    );
  }
);

Button.displayName = "Button";
