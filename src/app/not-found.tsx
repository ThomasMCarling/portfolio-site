import { type Metadata } from "next";
import Link from "next/link";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 pt-[20dvh]">
        <div className="flex divide-x-2">
          <h1 className="pr-4 text-4xl font-extrabold tracking-tight  lg:text-5xl">
            404
          </h1>
          <h2 className="pl-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Not Found
          </h2>
        </div>
        <Link
          href="/"
          className={cn(
            "inline-flex h-12 w-max select-none items-center rounded-md  px-4 py-2 font-medium transition-colors",
            "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            "focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
            "data-[active]:bg-zinc-100/50",
          )}
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
