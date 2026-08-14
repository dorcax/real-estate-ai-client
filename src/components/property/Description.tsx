import {type Property } from "@/types";

const PropertyDescription = ({ property }: { property: Property }) => {
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
capitalize mb-2
"
      >
        About this property
      </h2>

      <p className="text-sm">{property.description}</p>
    </div>
  );
};

export default PropertyDescription;
