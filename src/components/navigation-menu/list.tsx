import { List } from "./primitives";
import { type ReactNode } from "react";

export const NavigationMenuList = ({ children }: { children: ReactNode }) => (
  <List className="group flex list-none items-center justify-center gap-1 space-x-1 pr-5">
    {children}
  </List>
);
