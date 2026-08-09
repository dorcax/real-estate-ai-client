import {
  IconBuildingEstate,
  IconMessages,
  IconCalendarCheck,
  IconChartLine,
  IconPhoneCall,
} from "@tabler/icons-react";
import { MessageCircle, Zap, PhoneCall, Headset, Home} from "lucide-react";
import type { LucideIcon } from "lucide-react";
export const dashboardStats = [
  {
    title: "Active Listings",
    value: 248,
    trend: "+12%",
    description: "Compared to last month",
    icon: IconBuildingEstate,
    gradient: "before:from-[#FF416C] before:to-[#FF4B2B]", // Hot Pink → Red-Orange
  },
  {
    title: "Total Conversations",
    value: 1842,
    trend: "+18%",
    description: "Client interactions this month",
    icon: IconMessages,
    gradient: "before:from-[#00DBDE] before:to-[#FC00FF]", // Cyan → Magenta (electric)
  },
  {
    title: "Viewing Bookings",
    value: 96,
    trend: "+8%",
    description: "Scheduled property inspections",
    icon: IconCalendarCheck,
    gradient: "before:from-[#A8FF78] before:to-[#78FFD6]", // Lime → Mint (neon green)
  },
  {
    title: "Conversation Rate",
    value: "74.5%",
    trend: "+5.2%",
    description: "Lead conversion from inquiries",
    icon: IconChartLine,
    gradient: "before:from-[#F5576C] before:to-[#F093FB]", // Pink → Soft Lavender
  },
  {
    title: "Average Call Duration",
    value: "06:42",
    trend: "+1:15",
    description: "Average agent-client call time",
    icon: IconPhoneCall,
    gradient: "before:from-[#4FACFE] before:to-[#00F2FE]", // Deep Blue → Bright Cyan
  },
];

export const gradientMap = {
  "Active Listings": "from-[#FF416C] to-[#FF4B2B]",
  "Total Conversations": "from-[#00DBDE] to-[#FC00FF]",
  "Viewing Bookings": "from-[#A8FF78] to-[#78FFD6]",
  "Conversation Rate": "from-[#F5576C] to-[#F093FB]",
  "Average Call Duration": "from-[#4FACFE] to-[#00F2FE]",
};



interface ActivityItem {
  label: string;
  value: number;
  icon: LucideIcon;
}

export const todaysActivity: ActivityItem[] = [
  { label: "Today's Calls", value: 8, icon: MessageCircle },
  { label: "This Week", value: 8, icon: Zap },
  { label: "Callbacks Requested", value: 0, icon: PhoneCall },
  { label: "Active Agents", value: 2, icon: Headset },
  { label: "Available Listings", value: 3, icon: Home },
];