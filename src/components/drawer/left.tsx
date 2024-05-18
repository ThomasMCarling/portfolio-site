import { cn } from "~/lib/utils";
import { Root as DrawerRoot, Trigger, Portal, Overlay, Content } from "./vaul";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavigationMenuLink } from "../navigation-menu/link";
import { List, Root as NavRoot } from "../navigation-menu/primitives";

export const LeftDrawer = () => (
  <DrawerRoot direction="left">
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
    </Trigger>
    <Portal>
      <Overlay className="fixed inset-0 z-50 bg-black/80 sm:hidden" />
      <Content className="fixed inset-y-0 left-0 z-50 flex w-auto rounded-r-[10px] border border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:hidden">
        <NavRoot orientation="vertical" className="relative h-full w-full">
          <List className="group flex h-[80dvh] min-h-72 list-none flex-col items-center justify-center gap-3 pb-12 pl-2 pr-4">
            <NavigationMenuLink route="/">Home</NavigationMenuLink>
            <NavigationMenuLink route="/about">About</NavigationMenuLink>
            <div className="h-10"></div>
            <NavigationMenuLink route="https://www.linkedin.com/in/thomas-carling-257b4b233">
              LinkedIn
            </NavigationMenuLink>
            <NavigationMenuLink route="https://github.com/ThomasMCarling">
              GitHub
            </NavigationMenuLink>
            <NavigationMenuLink route="https://github.com/ThomasMCarling/portfolio-site">
              Source
            </NavigationMenuLink>
          </List>
        </NavRoot>
        <div className="my-auto mr-4 h-32 w-2 rounded-full bg-zinc-100 dark:bg-zinc-800" />
      </Content>
    </Portal>
  </DrawerRoot>
);
