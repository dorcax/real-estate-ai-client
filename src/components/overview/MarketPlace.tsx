import { House, MapPin, MoveRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { properties } from "@/constants/data";

const PropertySection= () => {
  return (
    <div className="w-full  bg-white shadow-2xl rounded-md border  p-3 mb-6">
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-3">
          <span className="bg-[#6366F1] w-8 h-8 rounded-full flex items-center justify-center">
            <House className="text-white size-4" />
          </span>
          <div>
            <h2 className="capitalize text-sm  font-semibold">
              property listing{" "}
            </h2>
            <p className="text-gray-700 text-xs ">4 total . 3 available </p>
          </div>
        </div>
        <Button className="bg-[#6366F1] ">
       
          <span>
            <MoveRight />
          </span>
          Manage
        </Button>
      </div>
      {/* display of properties  */}
      <div className="grid grid-cols-4 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="rounded-xl border  ">
            <div className=" relative overflow-hidden rounded-t-lg">
              <img src={property.image} alt="object-cover w-full  " />
              {property.featured && (
                <span className="absolute top-2 left-2 text-[9px] bg-[#8B5CF6] flex items-center gap-1 p-1 rounded-md text-white ">
                  <Star className="text-white size-2" />
                  {property.featured === true && "featured"}
                </span>
              )}
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] p-1 rounded-md">
                {property.status}
              </span>
            </div>
            <div className="p-2 flex flex-col flex-1">
              <h3 className="mt-3 font-semibold text-xs mb-1">
                {property.title}
              </h3>

              <p className="text-[10px] text-muted-foreground flex">
                <span>
                  <MapPin className="size-4" />
                </span>{" "}
                {property.location}
              </p>

              <p className="mt-2 font-bold text-red-700 flex justify-between">
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
