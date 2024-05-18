import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { NavigationMenuList } from "~/components/navigation-menu/list";
import { NavigationMenu } from "~/components/navigation-menu/root";
import { NavigationMenuLink } from "~/components/navigation-menu/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { cn } from "~/lib/utils";
import { SubNavigationMenu } from "~/components/navigation-menu/sub-root";
import { SubNavigationMenuLink } from "~/components/navigation-menu/sub-link";
import { Links } from "~/components/svg/links";

export const Header = ({ className }: { className: string }) => {
  return (
    <header className={cn("flex w-full justify-between gap-3 pt-4", className)}>
      <NavigationMenu ariaLabel="Main">
        <NavigationMenuList>
          <NavigationMenuLink route="/">Home</NavigationMenuLink>
          <NavigationMenuLink route="/about">About</NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink route="https://github.com/ThomasMCarling/portfolio-site">
              <CodeIcon className="h-[1.2rem] w-[1.2rem] transition-transform duration-500 group-data-[state=open]:rotate-180" />
              <span className="sr-only">Source code</span>
            </NavigationMenuLink>
            <SubNavigationMenu
              trigger={
                <>
                  <Links className="size-5" />
                  <span className="sr-only">External links</span>
                </>
              }
            >
              <SubNavigationMenuLink href="https://www.linkedin.com/in/thomas-carling-257b4b233">
                <LinkedInLogoIcon className="size-5" /> LinkedIn
              </SubNavigationMenuLink>
              <SubNavigationMenuLink href="https://github.com/ThomasMCarling">
                <GitHubLogoIcon className="size-5" /> Github
              </SubNavigationMenuLink>
            </SubNavigationMenu>
          </NavigationMenuList>
          <ThemeToggle />
        </NavigationMenu>
      </div>
    </header>
  );
};
