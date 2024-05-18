import clsx from "clsx";
import { type ReactNode } from "react";

export const Svg = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    {children}
  </svg>
);
