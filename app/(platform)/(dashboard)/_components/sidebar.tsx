"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { DEFAULT_ORG_ID } from "@/lib/constants";

import { NavItem } from "./nav-item";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(DEFAULT_ORG_ID);

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspace</span>
      </div>
      <Accordion
        type="multiple"
        defaultValue={[DEFAULT_ORG_ID]}
        className="space-y-2"
      >
        <NavItem
          isActive={isActive}
          isExpanded={true}
          organization={{
            id: DEFAULT_ORG_ID,
            name: "MyTracker Workspace",
            slug: "default",
            imageUrl: "",
          }}
          onExpand={() => {}}
        />
      </Accordion>
    </>
  );
};
