import { cn } from "~/shadcn/lib/utils";
import { Trigger, Portal, Overlay, Content } from "./vaul";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Root as DrawerRoot } from "./root";
import type { ReactNode } from "react";

export const LeftDrawer = ({ children }: { children: ReactNode }) => (
  <DrawerRoot>
    <Trigger
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium",
        "transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none",
        "dark:bg-zinc-950",
        "dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        "select-none",
      )}
    >
      <HamburgerMenuIcon className="size-5" />
      <span className="sr-only">Open menu</span>
    </Trigger>
    <Portal>
      <Overlay className="fixed inset-0 z-50 bg-black/80 sm:hidden" />
      <Content className="fixed inset-y-0 left-0 z-50 flex w-auto rounded-r-[10px] border border-zinc-200 bg-white px-3 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:hidden">
        {children}
      </Content>
    </Portal>
  </DrawerRoot>
);
