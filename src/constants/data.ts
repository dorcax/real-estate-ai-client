import type { Property } from "@/components/property/data-column";
import {
  IconBuildingEstate,
  IconMessages,
  IconCalendarCheck,
  IconChartLine,
  IconPhoneCall,
} from "@tabler/icons-react";
import { MessageCircle, Zap, PhoneCall, Headset, Home } from "lucide-react";
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


export const properties = [
  {
    id: 1,

    featured: true,

    status: "Available",

    title: "3 House In One Row, At Mountain Jill",

    location: "New York, Gym location",

    price: "$6,000",

    billingPeriod: null,

    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",

    stats: {
      firstIconCount: 4,

      secondIconCount: 7,
    },
  },

  {
    id: 2,

    featured: true,

    status: "Available",

    title: "7 Bedrooms Apartment House At Mountain",

    location: "Real Estate Ave, Real Estate AI",

    price: "$2,000",

    billingPeriod: "mo",

    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",

    stats: {
      firstIconCount: 5,

      secondIconCount: 5,
    },
  },

  {
    id: 3,

    featured: true,

    status: "Available",

    title: "16 Bedrooms Home New",

    location: "Real Estate Ave, Real Estate Town",

    price: "$50,000",

    billingPeriod: null,

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

    stats: {
      firstIconCount: 9,

      secondIconCount: 9,
    },
  },

  {
    id: 4,

    featured: true,

    status: "Pending",

    title: "3 Bed Rooms High Mountain Property",

    location: "Real Estate Ave, Real Estate Town",

    price: "$4,500",

    billingPeriod: "mo",

    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",

    stats: {
      firstIconCount: 8,

      secondIconCount: 8,
    },
  },
];

export const recentViewings = [
  {
    id: 1,
    initials: "US",
    name: "User One",
    phone: "0000000000",
    budget: "Budget: 5000000",
    date: "Jul 14, 2026",
    time: "7:31 PM",
    status: "pending",
  },
  {
    id: 2,
    initials: "CA",
    name: "David Hanson",
    phone: "0000000000",
    budget: "Budget: 5000000",
    date: "Jul 14, 2026",
    time: "5:00 PM",
    status: "cancelled",
  },
  {
    id: 3,
    initials: "US",
    name: "User Three",
    phone: "23456789",
    budget: "Budget: Enough",
    date: "Jul 14, 2026",
    time: "5:30 PM",
    status: "confirmed",
  },
];

export const propertyStats = [
  {
    id: 1,
    title: "Total Listings",
    value: 4,
    color: "text-red-900",
  },
  {
    id: 2,
    title: "Available",
    value: 3,
    color: "text-red-900",
  },
  {
    id: 3,
    title: "Pending / Active",
    value: 1,
    color: "text-orange-500",
  },
  {
    id: 4,
    title: "Sold / Rented",
    value: 0,
    color: "text-violet-600",
  },
];


export const propertListing = [
  {
    id: 1,
    featured: true,
    status: "Available",
    title: "3 House In One Row, At Mountain Jill",
    location: "New York, Gym location",
    price: "$6,000",
    billingPeriod: null,

    images: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        order: 1,
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        order: 2,
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        order: 3,
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        order: 4,
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        order: 5,
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        order: 6,
      },
    ],

    
  },

  {
    id: 2,
    featured: true,
    status: "Available",
    title: "7 Bedrooms Apartment House At Mountain",
    location: "Real Estate Ave, Real Estate AI",
    price: "$2,000",
    billingPeriod: "mo",

    images: [
      {
        id: 7,
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        order: 1,
      },
      {
        id: 8,
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        order: 2,
      },
      {
        id: 9,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        order: 3,
      },
      {
        id: 10,
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        order: 4,
      },
      {
        id: 11,
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        order: 5,
      },
    ]},

  
];