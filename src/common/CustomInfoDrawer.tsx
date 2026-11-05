import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
//
import type { ReactNode } from "react";

import { usePopUpContext } from "@/context/PopUpContext";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type CustomInfoDrawerType = {
  imgUrl?: string;
  title?: string;
  children: ReactNode;
  description?: string;

  className?: string;
  close?: boolean;
};

const CustomInfoDrawer = ({
  title,
  children,
  description,
  className,
}: CustomInfoDrawerType) => {
  const { isDrawerOpen, closeDrawer } = usePopUpContext();
  const isMobile = useIsMobile();
  return (
    <Drawer
      open={isDrawerOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeDrawer();
        }
      }}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerContent
        className={cn("bg-[#222a3d] text-[#dae2fd]", className)}
      >
        {(title || description) && (
          <DrawerHeader>
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
        )}
        <div className="flex flex-col min-h-0 flex-1 overflow-hidden">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomInfoDrawer;
