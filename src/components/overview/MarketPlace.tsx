import { House, MapPin, MoveRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { properties } from "@/constants/data";

const PropertySection = () => {
  return (
    <div
      className="w-full text-[#dae2fd]
     bg-[#171f33] shadow-2xl rounded-md p-4 mb-6"
    >
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-3">
          <span className="bg-[#464554] text-[#dae2fd] w-8 h-8 rounded-full flex items-center justify-center">
            <House className=" size-4" />
          </span>
          <div>
            <h2 className="capitalize text-sm  font-semibold">
              property listing{" "}
            </h2>
            <p className="text-xs ">4 total . 3 available </p>
          </div>
        </div>
        <Button className="bg-[#c0c1ff] text-[#1000A9] ">
          <span>
            <MoveRight />
          </span>
          Manage
        </Button>
      </div>
      {/* display of properties  */}
      <div className="grid grid-cols-4 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="rounded-xl border border-[#464554]  "
          >
            <div className=" relative overflow-hidden rounded-t-lg">
              <img
                src={property.image}
                alt={property.title}
                className="object-cover w-full aspect-4/3"
              />
              {property.featured && (
                <span className="absolute top-2 left-2 text-[9px] bg-[#ffb783] text-[#4f2500]  flex items-center gap-1 p-1 rounded-md">
                  <Star className=" size-2" />
                  {property.featured === true && "featured"}
                </span>
              )}
              <span className="absolute top-2 right-2 bg-[#222A3D] text-[9px] p-1 rounded-md">
                {property.status}
              </span>
            </div>
            <div className="p-2 flex flex-col flex-1">
              <h3 className="mt-3 font-semibold text-xs mb-1">
                {property.title}
              </h3>

              <p className="text-[10px]  text-[#C7C4D7] flex">
                <span>
                  <MapPin className="size-4" />
                </span>{" "}
                {property.location}
              </p>

              <p className="mt-2 font-bold text-[#c0c1ff] flex justify-between">
                {property.price}
                {property.billingPeriod && `/${property.billingPeriod}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
