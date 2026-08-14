export type PropertyType = "APARTMENT" | "HOUSE" | "LAND" | "OFFICE" | "SHOP";

export type PropertyPurpose = "SELL" | "RENT" | "LEASE";

export type PropertyStatus =
  | "DRAFT"
  | "AVAILABLE"
  | "PENDING"
  | "SOLD"
  | "RENTED";

export const propertyPurpose = [
  { label: "Rent", value: "rent" },
  { label: "Sell", value: "sell" },
  { label: "Lease", value: "lease" },
];

export const propertyType = [
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Land", value: "land" },
  { label: "Office", value: "office" },
  { label: "Shop", value: "shop" },
];

export type PropertyFormValues = {
  title: string;

  description: string;

  price: number;

  currency: string;

  address: string;

  city?: string;

  state: string;

  country: string;

  postalCode?: string;

  latitude?: number;

  longitude?: number;

  propertyType: PropertyType;

  propertyPurpose: PropertyPurpose;

  propertyStatus: PropertyStatus;

  bedrooms?: number;

  bathrooms?: number;

  toilets?: number;

  parkingSpace?: number;

  landSize?: number;

  buildingSize?: number;

  yearBuilt?: number;

  amenities: string[];

  isFeatured: boolean;
  active: boolean;

  publishedAt?: Date;
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

  images: PropertyImage[];
};
