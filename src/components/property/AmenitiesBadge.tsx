import {
  Snowflake,
  PawPrint,
  ShieldCheck,
  WashingMachine,
  Warehouse,
  Sun,
  House,
  Wifi,
  Tv,
} from "lucide-react";


const iconMap = {
  "Air Conditioning": Snowflake,
  "Pet Friendly": PawPrint,
  "Security System": ShieldCheck,
  Laundry: WashingMachine,
  Storage: Warehouse,
  "Solar Panels": Sun,
  "Smart Home": House,
  "Sea View": Wifi,
};


type AmenityBadgeProps = {
  amenities: string[];
};


const AmenityBadge = ({ amenities }: AmenityBadgeProps) => {
  return (
    <div className="flex flex-wrap gap-2">

      {amenities.map((amenity) => {

        const Icon =
          iconMap[amenity as keyof typeof iconMap];

        return (
          <div
            key={amenity}
            className="
              flex items-center gap-1
              rounded-full
              border
              bg-white
              px-3
              py-1
              text-xs
              text-muted-foreground
              shadow-sm
            "
          >

            {Icon && (
              <Icon className="size-3.5" />
            )}

            <span>
              {amenity}
            </span>

          </div>
        );
      })}

    </div>
  );
};


export default AmenityBadge;