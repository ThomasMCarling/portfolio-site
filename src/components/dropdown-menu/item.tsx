import { Item } from "@radix-ui/react-dropdown-menu";
import { type MouseEventHandler, type ReactNode } from "react";
import { cn } from "~/lib/utils";

export const DropdownMenuItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => (
  <Item
    onClick={onClick}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
    )}
  >
    {children}
  </Item>
);
