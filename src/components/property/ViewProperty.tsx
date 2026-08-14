import { propertListing } from "@/constants/data";
import {
  Bath,
  BedDouble,
  CarFront,
  Download,
  Images,
  MapPin,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const ViewProperty = () => {
  const { id } = useParams();

  const num = Number(id);

  const result = propertListing.find((property) => property.id === num);

  const mainImage = result?.images.find((image) => image.order === 1);

  const smallerImages = result?.images.filter(
    (image) => image.order >= 2 && image.order <= 5,
  );

  const remainingImages =
    result?.images.filter((image) => image.order > 5).length ?? 0;

  return (
    <section className="text-[#dae2fd]">
      <div
        className="
          grid 
          grid-cols-4 
          
          gap-4
          h-80 mb-4
        "
      >
        {/* Main Image */}
        {mainImage && (
          <div
            className="
              col-span-2
              row-span-2
              overflow-hidden
            "
          >
            <img
              src={mainImage.url}
              alt="main image"
              className="
                w-full
                h-full
                rounded-md
                object-cover
              "
            />
          </div>
        )}

        {/* Other Images */}
        {smallerImages?.map((image, index) => {
          const isLastImage = index === smallerImages.length - 1;

          return (
            <div
              key={image.id}
              className="
                relative
                overflow-hidden
                rounded-md
              "
            >
              <img
                src={image.url}
                alt="smaller-img"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {isLastImage && (
                <div
                  className={
                    remainingImages >= 1
                      ? `
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/50
        `
                      : ""
                  }
                >
                  <span className="text-white font-semibold">
                    {remainingImages === 0 ? "" : `+ ${remainingImages} more`}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="border  border-[#464554] mb-4  rounded-lg h-9  px-3 flex justify-between items-center ">
        <div className="flex gap-2 items-center text-xs">
          <span>
            <Images className="size-4" />
          </span>
          {result?.images.length} photos . First photo in the cover
        </div>
        <div>
          <Button className="bg-[#c0c1ff] text-[#1000A9] text-xs">
            {" "}
            <Download />
            add photo
          </Button>
        </div>
      </div>
      <section
        className="grid grid-cols-4 gap-4 text-[#dae2fd] items-start
     "
      >
        <div className="col-span-3">
          <div className="mb-4 bg-[#171f33] rounded-lg p-4">
            <div className="flex  justify-between mb-4 ">
              <div>
                <h1 className="text-base mb-2">{result?.title}</h1>
                <p className="text-xs inline-flex ">
                  <MapPin className="size-3" />
                  {result?.location}
                </p>
              </div>
              <span className="font-bold text-[#c0c1ff] text-xl">
                {result?.price}/Mo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-4">
              {[
                {
                  label: "Bathrooms",
                  value: result?.bathrooms,
                  icon: Bath,
                },
                {
                  label: "Bedrooms",
                  value: result?.bedrooms,
                  icon: BedDouble,
                },
                {
                  label: "Parking",
                  value: result?.parkingSpace,
                  icon: CarFront,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 text-xs border border-[#464554] p-4 rounded-lg"
                  >
                    <Icon className="size-4 text-[#c0c1ff]" />
                    <span>
                      {item.value} {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-4 bg-[#171f33] rounded-lg p-4">
            <h2 className="text-base  font-semibold capitalize mb-2">About this property</h2>
            <p className="text-sm pt-2">{result?.description}</p>
          </div>

          <div className="mb-4 bg-[#171f33] rounded-lg p-4
          ">
            <h2 classmb-2Name="text-base  font-semibold ">features & Amenities </h2>
            {
              result?.amenities.map((er)=>(
           <Badge  key={er} className="m-2 p-5 text-[#dae2fd] ">{er}</Badge>
              ))
            }

          </div>
        </div>
        <div className="col-span-1 space-y-3">
         <div className="border  bg-[#171f33] border-[#464554] rounded-lg p-3 ">
           <h3 className="text-base capitalize mb-4">listing status </h3>
          <div className="flex flex-col space-y-3">
            {["Available", "Pending", "Sold", "Rented"].map((status) => (
              <div
                className={`flex items-center gap-3 p-2 ${
                  result?.status === status &&
                  "border border-[#464554]  rounded-xl "
                }`}
              >
                <span
                  className={` h-1.5 w-1.5 rounded-full ${status === "Available" ? "bg-green-500" : status === "Pending" ? "bg-yellow-500" : status === "Sold" ? "bg-emerald-600" : "bg-red-600"}`}
                />

                <span key={status} className="text-sm">
                  {status}
                </span>
              </div>
            ))}
          </div>
         </div>
         {/* second  */}
         <div>hello</div>
        </div>
      </section>
    </section>
  );
};

export default ViewProperty;
