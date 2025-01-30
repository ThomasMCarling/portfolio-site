import { Item, Link as RadixLink } from "./primitives";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "~/shadcn/lib/utils";

export const SubNavigationMenuLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Item>
    <Link href={href} legacyBehavior passHref>
      <RadixLink
        className={cn(
          "bg-white hover:bg-zinc-100 focus:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800",
          "data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50",
          "hover:text-zinc-900 focus:text-zinc-900 dark:hover:text-zinc-50 dark:focus:text-zinc-50",
          "group inline-flex items-center justify-start gap-3 transition-colors",
          "h-9 w-full rounded-md p-1 px-5 text-sm font-medium",
          "disabled:pointer-events-none disabled:opacity-50",
          "select-none focus:outline-none",
        )}
      >
        {children}
      </RadixLink>
    </Link>
  </Item>
);
