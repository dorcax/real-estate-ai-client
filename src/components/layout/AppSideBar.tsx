

import {
  IconCalendar,
  IconChartBar,
  IconDashboard,
  IconEye,
  IconFolder,
  IconListDetails,
  IconUser,
  IconUsers
} from "@tabler/icons-react";
import * as React from "react";

import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { House } from "lucide-react";

const data={
  user: {
name: "shadcn",
email: "m@example.com",
avatar: "/avatars/shadcn.jpg",
},
navMain:[
  {
    title: "Overview",
    url:"/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: IconChartBar,
  },
  {
    title: "Listings",
    url: "/dashboard/property-listing",
    icon: IconFolder,
  },
  {
    title: "Marketplace",
    url: "#",
    icon: IconListDetails,
  },
  {
    title: "Call Log",
    url: "#",
    icon: IconUsers,
  },
  {
    title: "Viewings",
    url: "#",
    icon: IconEye,
  },
  {
    title: "Schedule",
    url: "#",
    icon: IconCalendar,
  },
  {
    title: "Clients",
    url: "#",
    icon: IconUser,
  },
],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className=" data-[slot=sidebar-menu-button]:p-1.5!">
              {/* <a href="#">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-sm font-semibold">Estate Call</span>
              </a> */}
              <div className="flex items-center gap-2">
                {/* <IconInnerShadowTop className="h-6 w-6" /> */}

                <House/>

                <span className="font-medium text-sm">Estate Call</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
