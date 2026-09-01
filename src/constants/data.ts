import type { Property } from "@/components/property/data-column";
import {
  IconBuildingEstate,
  IconMessages,
  IconCalendarCheck,
  IconChartLine,
  IconPhoneCall,
} from "@tabler/icons-react";
import { MessageCircle, Zap, PhoneCall, Headset, Home, User, Shield, Headphones, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  UserRoundPlus,
  WandSparkles,
  BadgeDollarSign,
  Banknote,
} from "lucide-react";
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

export const propertListing: Property[] = [
  {
    id: 1,
    featured: true,
    status: "Available",
    title: "3 House In One Row, At Mountain Jill",
    location: "New York, Gym location",
    price: "$6,000",
    type: "APARTMENT",
    yearBuilt: 2000,
    billingPeriod: null,
    description:
      "A stylish family home with well-designed spaces, modern architecture, and premium amenities. Ideal for comfortable urban living with easy access to nearby facilities.",
    bedrooms: 3,
    bathrooms: 3,
    toilets: 4,
    parkingSpace: 2,
    landSize: 550,
    amenities: [
      "Swimming Pool",
      "Cinema Room",
      "Luxury Kitchen",
      "Guest Room",
      "Private Parking",
      "Garden Area",
    ],
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
    description:
      "A spacious apartment property featuring multiple bedrooms, modern finishes, and excellent living areas. Perfect for families seeking a large and comfortable residence.",

    bedrooms: 7,
    type: "HOUSE",
    yearBuilt: 2026,
    bathrooms: 5,
    toilets: 6,
    parkingSpace: 4,
    landSize: 800,

    amenities: [
      "Infinity Pool",
      "Private Gym",
      "Smart Home Automation",
      "Large Garden",
      "Luxury Lounge",
      "24/7 Concierge Service",
    ],
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
    ],
  },

  {
    id: 3,
    featured: true,
    status: "Available",
    title: "Modern 4 Bedroom Family Home",
    location: "Green Estate, Real Estate Town",
    price: "$8,500",
    billingPeriod: null,
    description:
      "A contemporary family home combining functionality and elegance. Built with quality materials, generous rooms, and a welcoming atmosphere for everyday living.",
    bedrooms: 4,
    bathrooms: 4,
    type: "HOUSE",
    yearBuilt: 2025,
    toilets: 5,
    parkingSpace: 3,
    landSize: 720,
    amenities: [
      "Swimming Pool",
      "Cinema Room",
      "Luxury Kitchen",
      "Guest Room",
      "Private Parking",
      "Garden Area",
    ],

    images: [
      {
        id: 12,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        order: 1,
      },
      {
        id: 13,
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        order: 2,
      },
      {
        id: 14,
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        order: 3,
      },
      {
        id: 15,
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        order: 4,
      },
      {
        id: 16,
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        order: 5,
      },
    ],
  },

  {
    id: 4,
    featured: false,
    status: "Pending",
    title: "Luxury 5 Bedroom Duplex",
    location: "Palm Estate, Real Estate City",
    price: "$4,500",
    billingPeriod: "mo",
    description:
      "A luxury duplex offering spacious bedrooms, premium interiors, ample parking, and a refined lifestyle experience in a quiet residential neighbourhood.",
    bedrooms: 5,
    bathrooms: 5,
    toilets: 6,
    parkingSpace: 4,
    type: "OFFICE",
    yearBuilt: 2024,
    landSize: 950,

    amenities: [
      "Infinity Pool",
      "Private Gym",
      "Smart Home Automation",
      "Large Garden",
      "Luxury Lounge",
      "24/7 Concierge Service",
    ],
    images: [
      {
        id: 17,
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        order: 1,
      },
      {
        id: 18,
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        order: 2,
      },
      {
        id: 19,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        order: 3,
      },
      {
        id: 20,
        url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
        order: 4,
      },
      {
        id: 21,
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        order: 5,
      },
    ],
  },

  {
    id: 5,
    featured: true,
    status: "Available",
    title: "6 Bedroom Premium Villa",
    location: "Lake View Estate, New York",
    price: "$15,000",
    billingPeriod: null,
    description:
      "An exclusive premium villa designed for luxury living with expansive spaces, elegant finishes, and top-class facilities for families who value comfort and privacy.",
    bedrooms: 6,
    bathrooms: 6,
    toilets: 7,
    parkingSpace: 5,
    landSize: 1200,
    type: "APARTMENT",
    yearBuilt: 2024,
    amenities: [
      "Elevator Access",
      "Fitness Center",
      "Balcony",
      "24/7 Security",
      "Central Air Conditioning",
      "Covered Parking",
    ],
    images: [
      {
        id: 22,
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        order: 1,
      },
      {
        id: 23,
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
        order: 2,
      },
      {
        id: 24,
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        order: 3,
      },
      {
        id: 25,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        order: 4,
      },
      {
        id: 26,
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
        order: 5,
      },
    ],
  },
];

export const metrics = [
  {
    title: "Total Leads",
    value: "1,248",
    icon: UserRoundPlus,
    changeText: "+12.5% from last month",
  },
  {
    title: "Conversion Rate",
    value: "18.4%",
    icon: WandSparkles,
    changeText: "+2.1% from last month",
  },
  {
    title: "Avg. Deal Size",
    value: "$450k",
    icon: BadgeDollarSign,
    changeText: "No change",
  },
  {
    title: "Closed Revenue",
    value: "$4.2M",
    icon: Banknote,
    changeText: "+8.4% from last month",
  },
];

export const customers = [
  {
    name: "Sarah Okafor",
    customerType: "High-Net-Worth",
    image: "/images/sarah-okafor.jpg",
    phone: "+234 803 123 4567",
    email: "sarah.o@example.com",
    location: "Lagos, NG",
    activeLeads: 3,
    lastInteraction: {
      date: "Today, 10:42 AM",
      activity: "Property Viewing",
    },
    assignedAgent: {
      name: "David Ade",
      initials: "DA",
    },
  },
  {
    name: "Tolu Adebayo",
    customerType: "Corporate Client",
    image: "/images/tolu-adebayo.jpg",
    phone: "+234 812 987 6543",
    email: "t.adebayo@techcorp.ng",
    location: "Abuja, NG",
    activeLeads: 1,
    lastInteraction: {
      date: "Yesterday",
      activity: "Contract Sent",
    },
    assignedAgent: {
      name: "Mary Kalu",
      initials: "MK",
    },
  },
  {
    name: "Chidi Eze",
    customerType: "Investor",
    image: "/images/chidi-eze.jpg",
    phone: "+234 905 555 1234",
    email: "chidi.investments@mail.com",
    location: "Port Harcourt, NG",
    activeLeads: 5,
    lastInteraction: {
      date: "Oct 12, 2023",
      activity: "Call Logged",
    },
    assignedAgent: {
      name: "David Ade",
      initials: "DA",
    },
  },
  {
    name: "Aisha Bello",
    customerType: "First-time Buyer",
    image: "/images/aisha-bello.jpg",
    phone: "+234 701 222 3344",
    email: "a.bello92@gmail.com",
    location: "Kano, NG",
    activeLeads: 0,
    lastInteraction: {
      date: "Oct 10, 2023",
      activity: "Email Sent",
    },
    assignedAgent: {
      name: "Mary Kalu",
      initials: "MK",
    },
  },
  {
    name: "Femi Olatunji",
    customerType: "Commercial",
    image: "/images/femi-olatunji.jpg",
    phone: "+234 809 888 7766",
    email: "femi@olatunji-holdings.com",
    location: "Ibadan, NG",
    activeLeads: 2,
    lastInteraction: {
      date: "Oct 05, 2023",
      activity: "AI Summary Generated",
    },
    assignedAgent: {
      name: "David Ade",
      initials: "DA",
    },
  },
];

export const billingInvoice =[
  {
    "invoice": "INV-2026-08",
    "billingDate": "Aug 16, 2026",
    "plan": "Professional",
    "amount": 75000,
    "paymentMethod": "•••• 4821",
    "status": "Successful"
  },
  {
    "invoice": "INV-2026-07",
    "billingDate": "Jul 16, 2026",
    "plan": "Professional",
    "amount": 75000,
    "paymentMethod": "•••• 4821",
    "status": "Successful"
  },
  {
    "invoice": "INV-2026-06",
    "billingDate": "Jun 16, 2026",
    "plan": "Starter",
    "amount": 25000,
    "paymentMethod": "•••• 4821",
    "status": "Successful"
  }
]






export const teamStats =[ 
    {
      id: 1,
      title: "Total Members",
      value: 8,
      icon: User,
      badge: "+2 this month",
    },
    {
      id: 2,
      title: "Admins",
      value: 2,
      icon: Shield,
      badge: null,
    },
    {
      id: 3,
      title: "Agents",
      value: 5,
      icon: Headphones,
      badge: null,
    },
    {
      id: 4,
      title: "Pending Invitations",
      value: 3,
      icon: Mail,
      badge: null,
    },
  ]

export const teamData = [

{
      id: 1,
      name: "Daniel Adeyemi",
      email: "daniel@settlla.com",
      avatar: "/images/team/daniel.jpg",
      role: "Owner",
      assignedProperties: 42,
      activeLeads: 12,
      status: "Active",
      lastActive: "Just now",
    },
    {
      id: 2,
      name: "Sarah Okafor",
      email: "sarah.o@settlla.com",
      avatar: "/images/team/sarah.jpg",
      role: "Admin",
      assignedProperties: 156,
      activeLeads: 45,
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: 3,
      name: "Chinedu Obi",
      email: "chinedu@settlla.com",
      avatar: null,
      role: "Agent",
      assignedProperties: 14,
      activeLeads: 28,
      status: "Inactive",
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Ada Williams",
      email: "ada.w@settlla.com",
      avatar: "/images/team/ada.jpg",
      role: "Agent",
      assignedProperties: 31,
      activeLeads: 52,
      status: "Active",
      lastActive: "Yesterday",
    },
  ]
