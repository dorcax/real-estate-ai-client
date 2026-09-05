import { Badge } from "../ui/badge";

const PropertyAmenities = ({ amenities }: { amenities: string[] }) => {
  return (
    <div
      className="
mb-4 bg-[#171f33]
rounded-lg p-4
"
    >
      <h2
        className="
text-base font-semibold
capitalize mb-3
"
      >
        Features & Amenities
      </h2>

      {amenities.map((item) => (
        <Badge
          key={item}
          className="
m-1 p-3 text-sm
text-[#dae2fd]
"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default PropertyAmenities;
