import {type Property } from "@/types";

const statuses = [
  {
    name: "Available",
    color: "bg-green-500",
  },
  {
    name: "Pending",
    color: "bg-yellow-500",
  },
  {
    name: "Sold",
    color: "bg-emerald-600",
  },
  {
    name: "Rented",
    color: "bg-red-600",
  },
];

const PropertyStatus = ({ status }: { status: Property["status"] }) => {
  return (
    <div
      className="
border bg-[#171f33]
border-[#464554]
rounded-lg p-3
"
    >
      <h3
        className="
text-base capitalize mb-4
"
      >
        Listing Status
      </h3>

      <div className="flex flex-col gap-3">
        {statuses.map((item) => (
          <div
            key={item.name}
            className={`
flex items-center gap-3 p-2
${status === item.name ? "border border-[#464554] rounded-xl" : ""}
`}
          >
            <span
              className={`
h-1.5 w-1.5 rounded-full
${item.color}
`}
            />

            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyStatus;
