import { Link } from "react-router-dom";
import {
  IconCirclePlusFilled,
  IconChevronDown,
  IconMail,
  type Icon,
} from "@tabler/icons-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url?: string;
  icon?: Icon;
  items?: { title: string; url: string }[];
};

export function NavMain({ items }: { items: NavItem[] }) {
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
    {},
  );

  const toggle = (title: string) =>
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <SidebarGroup className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <SidebarGroupContent className="flex flex-col gap-2 min-h-0 flex-1 overflow-hidden">
        <SidebarMenu className="shrink-0">
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-[#c0c1ff] text-[#1000A9] hover:bg-[#222a3d] hover:text-[#dae2fd]"
            >
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>

            <Button
              size="icon"
              className="size-8 bg-[#464554] text-[#dae2fd] border-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu
          className="min-h-0 flex-1 overflow-y-auto  [&::-webkit-scrollbar]:hidden  mt-3"
        >
          {items.map((item) =>
            item.items && item.items.length > 0 ? (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className="capitalize text-xs font-normal w-full"
                  onClick={() => toggle(item.title)}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <IconChevronDown
                    size={14}
                    className={`ml-auto transition-transform duration-200 ${
                      openGroups[item.title] ? "rotate-180" : ""
                    }`}
                  />
                </SidebarMenuButton>

                {openGroups[item.title] && (
                  <SidebarMenuSub>
                    {item.items.map((sub) => (
                      <SidebarMenuSubItem key={sub.title}>
                        <SidebarMenuSubButton
                          asChild
                          className="text-xs text-[#dae2fd] "
                        >
                          <Link to={sub.url}>{sub.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className="capitalize text-xs font-normal"
                >
                  <Link
                    to={item.url ?? "#"}
                    className="flex text-xs  gap-2"
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ),
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
