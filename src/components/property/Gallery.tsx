import { Download, Images } from "lucide-react";
import { Button } from "../ui/button";
import { type Property } from "@/types";
type Props = {
  property: Property;
};

const PropertyGallery = ({ property }: Props) => {
  const mainImage = property.images.find((image) => image.order === 1);

  const smallerImages = property.images.filter(
    (image) => image.order >= 2 && image.order <= 5,
  );

  const remainingImages = property.images.filter(
    (image) => image.order > 5,
  ).length;

  return (
    <>
      <div className="grid grid-cols-4 gap-4 h-80 mb-4">
        {mainImage && (
          <div className="col-span-2 row-span-2 rounded-md overflow-hidden">
            <img
              src={mainImage.url}
              className="w-full h-full  object-cover  transition-transform
      duration-300
      hover:scale-110"
            />
          </div>
        )}

        {smallerImages.map((image, index) => {
          const isLastImage = index === smallerImages.length - 1;

          return (
            <div key={image.id} className="relative overflow-hidden rounded-md">
              <img
                src={image.url}
                className="w-full h-full object-cover  transition-transform
      duration-300
      hover:scale-110"
              />

              {isLastImage && remainingImages > 0 && (
                <div
                  className="
                  absolute inset-0 
                  flex items-center justify-center
                  bg-black/50
                "
                >
                  <span className="text-white font-semibold">
                    + {remainingImages} more
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="
        border border-[#464554]
        rounded-lg h-9 px-3
        flex justify-between items-center
      "
      >
        <div className="flex gap-2 items-center text-xs">
          <Images className="size-4" />
          {property.images.length} photos · First photo is cover
        </div>

        <Button
          className="
          bg-[#c0c1ff]
          text-[#1000A9]
          text-xs
        "
        >
          <Download />
          Add photo
        </Button>
      </div>
    </>
  );
};

export default PropertyGallery;
