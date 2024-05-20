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
import { LeftDrawer } from "~/components/drawer/left";
import { env } from "~/env";

export const Header = ({ className }: { className: string }) => {
  return (
    <header
      className={cn(
        "mt-1 flex h-12 w-full items-center justify-between gap-3 pt-3",
        className,
      )}
    >
      <div className="sm:hidden">
        <LeftDrawer />
      </div>
      <NavigationMenu ariaLabel="Main">
        <NavigationMenuList>
          <NavigationMenuLink route="/">Home</NavigationMenuLink>
          <NavigationMenuLink route="/about">About</NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex">
        <NavigationMenu ariaLabel="">
          <NavigationMenuList>
            <NavigationMenuLink route={env.SOURCE_URL}>
              <CodeIcon className="size-5" />
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
              <SubNavigationMenuLink href={env.LINKEDIN_URL}>
                <LinkedInLogoIcon className="size-5" /> LinkedIn
              </SubNavigationMenuLink>
              <SubNavigationMenuLink href={env.GITHUB_URL}>
                <GitHubLogoIcon className="size-5" /> GitHub
              </SubNavigationMenuLink>
            </SubNavigationMenu>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
};
