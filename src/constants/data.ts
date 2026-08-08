import {
  IconBuildingEstate,
  IconMessages,
  IconCalendarCheck,
  IconChartLine,
  IconPhoneCall,
} from "@tabler/icons-react";

export const dashboardStats = [
  {
    title: "Active Listings",
    value: 248,
    trend: "+12%",
    description: "Compared to last month",
    icon: IconBuildingEstate,
  },
  {
    title: "Total Conversations",
    value: 1842,
    trend: "+18%",
    description: "Client interactions this month",
    icon: IconMessages,
  },
  {
    title: "Viewing Bookings",
    value: 96,
    trend: "+8%",
    description: "Scheduled property inspections",
    icon: IconCalendarCheck,
  },
  {
    title: "Conversation Rate",
    value: "74.5%",
    trend: "+5.2%",
    description: "Lead conversion from inquiries",
    icon: IconChartLine,
  },
  {
    title: "Average Call Duration",
    value: "06:42",
    trend: "+1:15",
    description: "Average agent-client call time",
    icon: IconPhoneCall,
  },
];