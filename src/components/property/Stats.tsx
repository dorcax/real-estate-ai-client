import { Bath, BedDouble, CarFront } from "lucide-react";

import { type Property } from "@/types";

const PropertyStats = ({ property }: { property: Property }) => {
  const stats = [
    {
      label: "Bathrooms",
      value: property.bathrooms,
      icon: Bath,
    },
    {
      label: "Bedrooms",
      value: property.bedrooms,
      icon: BedDouble,
    },
    {
      label: "Parking",
      value: property.parkingSpace,
      icon: CarFront,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <section>
            {/* property title and price */}

            <div
              key={item.label}
              className="
 flex flex-col items-center
 gap-2 text-xs
 border border-[#464554]
 p-4 rounded-lg
 "
            >
              <Icon className="size-4 text-[#c0c1ff]" />

              <span>
                {item.value} {item.label}
              </span>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PropertyStats;
