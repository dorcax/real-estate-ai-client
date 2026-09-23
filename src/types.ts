export type PropertyType = "APARTMENT" | "HOUSE" | "LAND" | "OFFICE" | "SHOP";

export type PropertyPurpose = "SELL" | "RENT" | "LEASE";

export type PropertyStatus =
  | "DRAFT"
  | "AVAILABLE"
  | "PENDING"
  | "SOLD"
  | "RENTED";

export const propertyType = [
  { label: "House", value: "HOUSE" },
  { label: "Land", value: "LAND" },
  { label: "Apartment", value: "APARTMENT" },
  { label: "Office", value: "OFFICE" },
  { label: "Shop", value: "SHOP" },
  { label: "Warehouse", value: "WAREHOUSE" },
  { label: "Commercial", value: "COMMERCIAL" },
];

export const propertyPurpose = [
  { label: "Rent", value: "RENT" },
  { label: "Sell", value: "SELL" },
  { label: "Lease", value: "LEASE" },
];

export type PropertyFormValues = {
  title: string;
  description: string;
  price: number;
 
  address: string;
  city: string;
  state: string;

  postalCode?: string;

  propertyType: PropertyType;
  propertyPurpose: PropertyPurpose;
 

  bedrooms?: number;
  bathrooms?: number;
  toilets?: number;
  parkingSpace?: number;

  landSize?: number;
  buildingSize?: number;
  yearBuilt?: number;

  amenities: string[];

  attachmentsId: string[];

  isFeatured: boolean;
};

export type PropertyImage = {
  id: number;
  url: string;
  order: number;
};

export type Property = {
  id: number;
  featured: boolean;
  status: "Available" | "Pending" | "Sold" | "Rented";
  description: string;
  title: string;
  location: string;
  price: string;
  amenities: string[];

  billingPeriod: string | null;

  bedrooms: number;
  bathrooms: number;
  toilets: number;
  type: PropertyType
  yearBuilt: number;
  parkingSpace: number;
  landSize: number;

  attachmentsId: PropertyImage[];
};



export type BillingHistory = {
  invoice: string
  billingDate: string
  plan: "Professional" | "Starter"
  amount: number
  paymentMethod: string
  status: "Successful"
}


export type TeamRole = "OWNER" | "ADMIN" | "CUSTOMER"

export type MemberStatus = "Active" | "Inactive"

export type TeamStat = {
  id: number
  title:
    | "Total Members"
    | "Admins"
    | "Agents"
    | "Pending Invitations"
  value: number
  icon:string
  badge: string | null
}

export type TeamMember = {
  id: number
  name: string
  email: string
  avatar: string 
  role: TeamRole
  assignedProperties: number
  activeLeads: number
  status: MemberStatus
  lastActive: string
}

