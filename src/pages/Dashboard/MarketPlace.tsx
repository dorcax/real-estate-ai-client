import {
  Eye,
  MessageSquare,
  CalendarDays,
  TrendingUp,
  Building2,
  MapPin,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { properties, propertListing } from "@/constants/data";
import { Link } from "react-router-dom";

const marketplaceStats = [
  {
    label: "Views",
    value: "28",
    description: "This week",
    icon: Eye,
    iconBg: "bg-(--surface-highest)",
    // iconColor: "text-(--primary)",
  },
  {
    label: "Inquiries",
    value: "2",
    description: "1 new",
    icon: MessageSquare,
    iconBg: "bg-(--surface-highest)",
    // iconColor: "text-(--primary)",
  },
  {
    label: "Reservations",
    value: "1",
    description: "1 active",
    icon: CalendarDays,
    iconBg: "bg-(--surface-highest)",
    iconColor: "text-(--accent)",
  },
  {
    label: "Deposits Earned",
    value: "$49",
    description: "This month",
    icon: TrendingUp,
    iconBg: "bg-(--surface-highest)",
    iconColor: "text-(--success)",
  },
  {
    label: "Live Listings",
    value: "4",
    description: "On marketplace",
    icon: Building2,
    iconBg: "bg-(--surface-highest)",
    iconColor: "text-(--success)",
  },
];

const inquiries = [
  {
    id: 1,
    name: "Dudat Hussain",
    email: "indianblockchaincoder@gmail.com",
    property: "3 House In One Row, At Mountain Jill",
    message:
      "I am interested in this property. Could you provide more information about availability?",
    status: "new",
    action: "Reply",
  },
  {
    id: 2,
    name: "David Johnson",
    email: "david@example.com",
    property: "7 Bedrooms Apartment House At Mountain",
    message: "I would like to schedule a viewing for this property.",
    status: "replied",
    action: "View",
  },
];

const Marketplace = () => {
  return (
    <section className="min-h-screen text-[#dae2fd] p-4  md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Marketplace</h1>

        <p className="mt-1 text-sm text-text-secondary">
          Inquiries, reservations, and listing performance
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {marketplaceStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                rounded-xl
                border
              
                border-[#464554] 
                bg-[#171f33]
                p-4
                transition-colors
                hover:bg-card-hover
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-lg
                    ${stat.iconBg}
                  `}
                >
                  <Icon className={`size-4 ${stat.iconColor}`} />
                </div>

                <span className="text-xs font-medium uppercase tracking-wide ">
                  {stat.label}
                </span>
              </div>

              <div className="mt-4">
                <p className="text-2xl font-bold text-text-primary">
                  {stat.value}
                </p>

                <p className="mt-1 text-[11px] text-text-secondary">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Listings */}
      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-sm font-semibold">Live on Marketplace</h2>

          <span
            className="
             
              
              px-2
              py-0.5
              text-[10px]
              font-medium

             
            "
          >
            {properties.length}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {propertListing.map((property) => {
            const mainImage = property.images.find(
              (image) => image.order === 1,
            );

            return (
              <div
                key={property.id}
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  
                border-[#464554] 
                bg-[#171f33]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-card-hover
                "
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  {mainImage && (
                    <img
                      src={mainImage.url}
                      alt={property.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    />
                  )}

                  {/* Status */}
                  <span
                    className={`
                      absolute
                      left-2
                      top-2
                      rounded-full
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      ${
                        property.status === "Available"
                          ? "bg-[#222A3D] text-success-text"
                          : property.status === "Pending"
                            ? "bg-[#222A3D] text-accent-text"
                            : "bg-[#222A3D] text-text-primary"
                      }
                    `}
                  >
                    {property.status}
                  </span>

                  {/* Featured */}
                  {property.featured && (
                    <span
                      className="
                        absolute
                        right-2
                        top-2
                        rounded-full
                        bg-[#ffb783]
                        px-2
                        py-1
                        text-[9px]
                        font-semibold
                       text-[#4f2500]
                      "
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-3">
                  <h3
                    className="
                      truncate
                      text-xs
                      font-semibold
                      text-(--text-primary)
                    "
                  >
                    {property.title}
                  </h3>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-1
                      text-[10px]
                      text-(--text-secondary)
                    "
                  >
                    <MapPin className="size-3 shrink-0" />

                    <span className="truncate">{property.location}</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p
                      className="
                        text-sm
                        font-bold
                    
                      "
                    >
                      {property.price}

                      {property.billingPeriod && `/${property.billingPeriod}`}
                    </p>

                    <Link to={`/dashboard/view-property/${property.id}`}>
                      <ChevronRight
                        className="
                        size-4
                        text-text-secondary
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inquiries / Reservations */}
      <div className="mt-8">
        {/* Tabs */}
        <div
          className="
            mb-4
            flex
            items-center
            gap-1
            border-b
        border-b-[#464554] 
          "
        >
          <button
            className="
              border-b-3
              border-b-[#464554] 
              
             
              px-4
              py-3
              text-xs
              font-medium
              
            "
          >
            Inquiries
            <span
              className="
                ml-2
                rounded-full
                bg-primary
                px-1.5
                py-0.5
                text-[9px]
                font-semibold
                text-primary-text
              "
            >
              2
            </span>
          </button>

          <button
            className="
              px-4
              py-3
              text-xs
              font-medium
              text-text-secondary
              transition-colors
              hover:text-text-primary
            "
          >
            Reservations
            <span
              className="
                ml-2
                rounded-full
                bg-surface-highest
                px-1.5
                py-0.5
                text-[9px]
                text-text-secondary
              "
            >
              1
            </span>
          </button>
        </div>

        {/* Inquiry List */}
        <div
          className="
            overflow-hidden
            rounded-xl
           border
              
                border-[#464554] 
                bg-[#171f33]
          "
        >
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="
              border-b
                border-b-[#464554] 
                p-4
                transition-colors
                last:border-b-0
                hover:bg-card-hover
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{inquiry.name}</h3>

                    <span
                      className="
                        truncate
                        text-[10px]
                       
                      "
                    >
                      {inquiry.email}
                    </span>

                    <span
                      className={`
                        rounded-full
                        px-2
                        py-0.5
                        text-[9px]
                        font-medium
                        ${
                          inquiry.status === "new"
                            ? "bg-primary text-primary-text"
                            : "bg-surface-highest "
                        }
                      `}
                    >
                      {inquiry.status}
                    </span>
                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      font-medium
                     
                    "
                  >
                    Re: {inquiry.property}
                  </p>

                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-xs
                    
                    "
                  >
                    {inquiry.message}
                  </p>
                </div>

                <button
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-1
                    rounded-lg
                    border
                    border-border
                    bg-card-hover
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-text-primary
                    transition-colors
                    hover:bg-surface-highest
                
                  "
                >
                  {inquiry.action}

                  <ChevronDown className="size-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
