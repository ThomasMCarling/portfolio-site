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
import { InternalNavigationMenuLink } from "~/components/navigation-menu/internal-link";
import { List, Root } from "~/components/navigation-menu/primitives";

export const Header = ({ className }: { className: string }) => {
  return (
    <header
      className={cn(
        "mt-1 flex h-12 w-full items-center justify-between gap-3 pt-3",
        className,
      )}
    >
      <div className="sm:hidden">
        <LeftDrawer>
          <Root orientation="vertical" className="relative h-full w-full">
            <List className="group flex h-[80dvh] min-h-72 list-none flex-col items-center justify-center gap-3 pb-12 pl-2 pr-4">
              {internalLinks}
              <div className="h-10"></div>
              <NavigationMenuLink route={env.LINKEDIN_URL}>
                LinkedIn
              </NavigationMenuLink>
              <NavigationMenuLink route={env.GITHUB_URL}>
                GitHub
              </NavigationMenuLink>
              <NavigationMenuLink route={env.SOURCE_URL}>
                Source
              </NavigationMenuLink>
            </List>
          </Root>
        </LeftDrawer>
      </div>
      <NavigationMenu ariaLabel="Main">
        <NavigationMenuList>{internalLinks}</NavigationMenuList>
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

const internalLinks = (
  <>
    <InternalNavigationMenuLink route="/">Home</InternalNavigationMenuLink>
    <InternalNavigationMenuLink route="/about">
      About
    </InternalNavigationMenuLink>
  </>
);
