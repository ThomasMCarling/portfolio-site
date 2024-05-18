import { Content, DropdownMenuPortal } from "@radix-ui/react-dropdown-menu";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export const DropdownMenuContent = ({ children }: { children: ReactNode }) => (
  <DropdownMenuPortal>
    <Content
      align="end"
      className={cn(
        "data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90",
        "data-[side=bottom]:slide-in-from-top-4 ",
        "z-50 flex w-36 flex-col items-stretch overflow-hidden rounded-md border border-zinc-200 p-1",
        " mt-1 bg-white text-zinc-950 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
      )}
    >
      {children}
    </Content>
  </DropdownMenuPortal>
);
