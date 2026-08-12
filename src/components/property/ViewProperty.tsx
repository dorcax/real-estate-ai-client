import { propertListing } from "@/constants/data";
import { Download, Images, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";

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
      <section className="grid grid-cols-4 gap-4 text-[#dae2fd]
     ">
        <div className="col-span-3 border border-[#464554]    ">
          <div className="mb-4 bg-[#171f33] rounded-lg p-4">
           <div className="flex  justify-between">
             <div>
              <h1 className="text-base mb-2">{result?.title}</h1>
              <p className="text-xs inline-flex "><MapPin className="size-3"/>{result?.location}</p>
            </div>
            <span className="font-bold text-[#c0c1ff] text-xl">{result?.price}/Mo</span>
           </div>
           [{result?.status}]
          </div>
          {/* <div>heloo</div> */}
        </div>
        <div className="col-span-1 border  bg-[#171f33] ">spna3</div>
      </section>
    </section>
  );
};

export default ViewProperty;
