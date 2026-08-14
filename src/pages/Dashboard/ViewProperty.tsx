import { propertListing } from "@/constants/data";
import { Image, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";

import PropertyGallery from "../../components/property/Gallery";
import PropertyStats from "../../components/property/Stats";
import PropertyDescription from "../../components/property/Description";
import PropertyAmenities from "../../components/property/Amenities";
import PropertyStatus from "../../components/property/Status";
import { PropertyDetail } from "./PropertyDetail";
import PropertyAISection from "@/components/property/PropertyAiSection";

const ViewProperty = () => {
  const { id } = useParams();

  const property = propertListing.find((item) => item.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <section className="text-[#dae2fd] space-y-5">
      <PropertyGallery property={property} />

      <section
        className="
grid grid-cols-4 gap-4
items-start
"
      >
        <div className="col-span-3">
          <div
            className="
mb-4 bg-[#171f33]
rounded-lg p-4
"
          >
            <div className="flex justify-between mb-4">
              <div>
                <h1 className="text-base">{property.title}</h1>

                <p className="text-xs inline-flex">
                  <MapPin className="size-3" />
                  {property.location}
                </p>
              </div>

              <span
                className="
font-bold
text-[#c0c1ff]
text-xl
"
              >
                {property.price}
              </span>
            </div>

            <PropertyStats property={property} />
          </div>

          <PropertyDescription property={property} />
        </div>

        <div className="col-span-1">
          <PropertyStatus status={property.status} />
        </div>
      </section>
      <section
        className="
grid grid-cols-4 gap-4
items-start 
"
      >
        <div className="col-span-3">
          <PropertyAmenities amenities={property.amenities} />
          <div className="border  border-[#464554] p-3 rounded-lg  bg-[#171f33]">
            <div className="mb-4 flex gap-3 items-center">
              <Image className="w-8 h-8 p-2 rounded-full border border-[#464554] " />
              <h2 className="text-sm ">All Photo ({property.images.length})</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {property.images.map((image) => (
                <img
                  src={image.url}
                  className="rounded-lg w-full h-full object-cover  transition-transform
      duration-300
      hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-3">
          <PropertyDetail detail={property} />
          <PropertyAISection />
        </div>
      </section>
    </section>
  );
};

export default ViewProperty;
