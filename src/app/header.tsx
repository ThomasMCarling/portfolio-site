"use client";

import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

export const Header = ({ className }: { className: string }) => {
  return (
    <header className={cn("flex w-full justify-between gap-3 pt-4", className)}>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(([title, route]) => (
            <NavigationMenuItem key={title}>
              <Link href={route} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle />
    </header>
  );
};

const links = [
  ["Home", "/"],
  ["About", "/about"],
] as const;
