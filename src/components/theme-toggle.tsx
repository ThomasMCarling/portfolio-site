"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "~/shadcn/components/ui/button";
import { Moon } from "./svg/moon";
import { Sun } from "./svg/sun";
import { DropdownMenuContent } from "./dropdown-menu/content";
import { DropdownMenuItem } from "./dropdown-menu/item";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Moon className="hidden size-5 dark:block" />
          <Sun className="size-5 dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
