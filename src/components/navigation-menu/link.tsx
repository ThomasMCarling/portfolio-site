import { Item, Link as RadixLink } from "./primitives";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "~/shadcn/lib/utils";

export const NavigationMenuLink = ({
  route,
  className,
  children,
}: {
  route: string;
  children: ReactNode;
  className?: string;
}) => (
  <Item>
    <Link href={route} legacyBehavior passHref>
      <RadixLink
        className={cn(
          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium",
          "transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none",
          "disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50 dark:bg-zinc-950",
          "dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50",
          "select-none dark:data-[state=open]:bg-zinc-800/50",
          className,
        )}
      >
        {children}
      </RadixLink>
    </Link>
  </Item>
);
