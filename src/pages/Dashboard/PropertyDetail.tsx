import type { Property } from "@/types";

export const PropertyDetail = ({ detail }: { detail: Property }) => {
  return (
    <div
      className="
        border 
        bg-[#171f33]
        border-[#464554]
        p-3
        rounded-lg
      "
    >
      <h2 className="text-base capitalize mb-4">Property Detail</h2>

      {[
        {
          label: "Type",
          value: detail.type,
        },
        {
          label: "YearBuilt ",
          value: detail.yearBuilt,
        },

        {
          label: "Land Size",
          value: `${detail.landSize} sqm`,
        },
        {
          label: "Toilets",
          value: detail.toilets,
        },
      ].map((item) => (
        <div key={item.label} className="flex justify-between text-sm mb-3 border-b space-y-4    border-[#464554] last:border-none ">
          <span className="text-[#c7c4d7]">{item.label}</span>

          <span className="">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
