"use client";
import { usePathname } from "next/navigation";
import { NavigationMenuLink } from "./link";
import { cn } from "~/lib/utils";
import type { ReactNode } from "react";

export const InternalNavigationMenuLink = ({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) => {
  const currentPath = usePathname();
  return (
    <NavigationMenuLink
      className={cn(
        currentPath === route &&
          "text-blue-800 hover:text-blue-800 focus:text-blue-800 dark:text-blue-500 dark:hover:text-blue-500 dark:focus:text-blue-500",
      )}
      route={route}
    >
      {children}
    </NavigationMenuLink>
  );
};
