import { useGetPropertyStatsQuery } from "@/api/property.api";

const PropertyStats = () => {
  const {
    data: propertyStats,
    isLoading,
    isError,
  } = useGetPropertyStatsQuery();

  console.log("propertystats", propertyStats);
  const stats = [
    {
      title: "Total Properties",
      count: propertyStats?.total ?? 0,
      color: "text-[#c0c1ff]",
    },
    {
      title: "Rented Properties",
      count: propertyStats?.rented ?? 0,
      color: "text-yellow-400",
    },
    {
      title: "Sold Properties",
      count: propertyStats?.sold ?? 0,
      color: "text-green-400",
    },
    {
      title: "Pending Properties",
      count: propertyStats?.pending ?? 0,
      color: "text-green-400",
    },
  ];

  if (isLoading) {
    return <p className="text-[#dae2fd]">Loading property statistics...</p>;
  }



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((property) => (
        <div
          key={property.title}
          className="text-[#dae2fd] bg-[#171f33] shadow-2xl px-4 py-3 rounded-lg"
        >
          <div>
            <h2 className="text-xs mb-2">{property.title}</h2>
            <p className={`text-xl font-semibold ${property.color}`}>
              {property.count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyStats;
