"use client";
import { usePathname } from "next/navigation";
import { type ReactNode, useLayoutEffect, useState } from "react";
import { Drawer } from "vaul";

export const Root = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Drawer.Root
      dismissible={true}
      open={open}
      onOpenChange={setOpen}
      direction="left"
    >
      {children}
    </Drawer.Root>
  );
};
