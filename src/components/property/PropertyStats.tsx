import { propertyStats } from "@/constants/data";

const PropertyStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {propertyStats.map((property) => (
        <div className="text-[#dae2fd]
     bg-[#171f33] shadow-2xl px-2 py-3 rounded-lg">
            <div>
                <h2 className=" text-xs mb-2">{property.title}</h2>
                <p className={`text-sm font-semibold ${property.color}`}>{property.value}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyStats;
