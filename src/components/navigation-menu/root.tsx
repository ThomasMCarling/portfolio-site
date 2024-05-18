import * as React from "react";
import { cn } from "~/lib/utils";
import { type ReactNode } from "react";
import { Viewport, Root } from "./primitives";

export const NavigationMenu = ({
  ariaLabel,
  children,
}: {
  ariaLabel?: string;
  children: ReactNode;
}) => (
  <Root
    aria-label={ariaLabel}
    className="relative z-10 flex max-w-max flex-1 items-center justify-center"
  >
    {children}
    <div className="absolute right-0 top-full flex justify-center">
      <Viewport
        className={cn(
          "bg-white dark:bg-zinc-950",
          "text-zinc-950 dark:text-zinc-50",
          "border border-zinc-200 dark:border-zinc-800",
          "data-[state=open]:animate-in data-[state=open]:zoom-in-90",
          "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
          "h-[var(--radix-navigation-menu-viewport-height)]",
          "w-full md:w-[var(--radix-navigation-menu-viewport-width)]",
          "origin-top-center relative mt-1.5 overflow-hidden rounded-md shadow",
        )}
      />
    </div>
  </Root>
);
