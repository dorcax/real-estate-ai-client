

import {
  IconCalendar,
  IconChartBar,
  IconDashboard,
  IconEye,
  IconFolder,
  IconListDetails,
  IconUser,
  IconUsers,
  IconWorld
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
    title: "create property",
    url: "/dashboard/create-property",
    icon: IconUsers,
  },
  {
    title: "Listings",
    url: "/dashboard/property-listing",
    icon: IconFolder,
  },
  {
    title: "Marketplace",
    url: "/dashboard/marketplace",
    icon: IconListDetails,
  },

  {
    title: "Team",
    url: "/dashboard/team",
    icon: IconEye,
  },
  {
    title: "Schedule",
    url: "/dashboard/schedule",
    icon: IconCalendar,
  },
  {
    title: "Customers",
    url: "/dashboard/customer",
    icon: IconUser,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: IconUser,
  },
  {
    title: "Setting",
    url: "#",
    icon: IconUser,
  },
  {
    title:'Website configuration',
    icon:IconWorld,
    items:[
      {
          title: "overview",
          url: "/dashboard/website-overview",
        },
      {
          title: "general information",
          url: "/dashboard/general-information",
        },
        {
          title: "Branding",
          url: "/dashboard/website/branding",
        },
        {
          title: "Homepage",
          url: "/dashboard/website/homepage",
        },
        {
          title: "Properties",
          url: "/dashboard/website/properties",
        },
        {
          title: "About Us",
          url: "/dashboard/website/about",
        },
        {
          title: "Contact",
          url: "/dashboard/website/contact",
        },
        {
          title: "SEO & Social",
          url: "/dashboard/website/seo",
        },
    ]
  }
],
}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className="h-svh bg-[#060E20] text-[#DAE2FD] [&_[data-sidebar=sidebar]]:bg-[#060E20]"
    >
      <SidebarHeader className="shrink-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="data-[slot=sidebar-menu-button]:p-1.5!">
              <div className="flex items-center gap-2">
                <House />
                <span className="font-medium text-sm">Estate Call</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="!min-h-0 !flex-1 !overflow-y-auto !overflow-x-hidden">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter className="shrink-0">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
