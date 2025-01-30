import { cn } from "~/shadcn/lib/utils";
import { Content, Item, Sub, Trigger } from "./primitives";
import { type ReactNode } from "react";

export const SubNavigationMenu = ({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) => {
  return (
    <Item>
      <Trigger
        className={cn(
          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium",
          "transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none",
          "disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50 dark:bg-zinc-950",
          "dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50",
          "dark:data-[state=open]:bg-zinc-800/50",
        )}
      >
        {trigger}
      </Trigger>
      <Content
        className={cn(
          "right-0 top-0 w-full",
          "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in",
          "data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52",
          "data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52",
          "data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        )}
      >
        <Sub defaultValue="a">
          <ul className="flex w-36 flex-col items-stretch p-1">{children}</ul>
        </Sub>
      </Content>
    </Item>
  );
};
