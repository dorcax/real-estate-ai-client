// import { useRef, useState } from "react";
// import { useForm, Controller } from "react-hook-form";

// import CustomInfoDialog from "@/common/CustomInfoDialog";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Field, FieldGroup, FieldLabel } from "../../ui/field";

// import { Input } from "../../ui/input";

// import { Button } from "../../ui/button";

// import AmenityBadge from "../../property/AmenitiesBadge";

// import { Switch } from "../../ui/switch";

// import { Label } from "../../ui/label";

// import {
//   propertyPurpose,
//   propertyType,
//   type PropertyFormValues,
// } from "../../../types";

// // const labelStyle = "text-xs text-gray-900 font-medium";

// type PropertyFormProps = {
//   mode: "create" | "edit";

//   defaultValues?: Partial<PropertyFormValues>;

//   onSubmit: (data: PropertyFormValues) => void;

//   loading?: boolean;
// };

// const PropertyForm = ({
//   mode,
//   defaultValues,
//   onSubmit,
//   loading,
// }: PropertyFormProps) => {
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [images, setImages] = useState<string[]>(defaultValues?.images ?? []);

//   const { register, handleSubmit, control } = useForm<PropertyFormValues>({
//     defaultValues: {
//       amenities: [],

//       active: true,

//       isFeatured: false,

//       ...defaultValues,
//     },
//   });

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(event.target.files ?? []);

//     if (!files.length) return;

//     const remainingSlots = 5 - images.length;

//     const filesToAdd = files.slice(0, remainingSlots);

//     const newImages = filesToAdd.map((file) => URL.createObjectURL(file));

//     setImages((prev) => [...prev, ...newImages]);

//     event.target.value = "";
//   };

//   const removeImage = (index: number) => {
//     setImages((prev) => prev.filter((_, i) => i !== index));
//   };

//   const openFilePicker = () => {
//     if (images.length < 5) {
//       fileInputRef.current?.click();
//     }
//   };

//   return (
//     <div
//       className="
// w-full

// max-h-125
// overflow-y-auto
// overflow
// [&::-webkit-scrollbar]:hidden
// "
//     >
//       <form
//         onSubmit={handleSubmit((data) =>
//           onSubmit({
//             ...data,
//             images,
//           }),
//         )}
//         className=""
//       >
//         <FieldGroup>
//           <div className="grid grid-cols-5 gap-4">
//             <div className="col-span-2 space-y-3">
//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">
//                   Property Images
//                 </FieldLabel>

//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />

//                 {images.length === 0 && (
//                   <button
//                     type="button"
//                     onClick={openFilePicker}
//                     className="
// w-full
// h-64
// rounded-lg
// border
// border-dashed
// border-[#464554]
// bg-[#171f33]
// hover:border-[#c0c1ff]
// flex
// items-center
// justify-center
// text-[#dae2fd]
// text-3xl
// "
//                   >
//                     +
//                   </button>
//                 )}

//                 {images.length > 0 && (
//                   <div
//                     className="
// grid
// grid-cols-3
// grid-rows-2
// gap-2
// h-64
// "
//                   >
//                     {/* Main Image */}
//                     <div
//                       className="
// relative
// col-span-2

// rounded-lg

// bg-[#171f33]
// border
// border-[#464554]
// "
//                     >
//                       <img
//                         src={images[0]}
//                         alt="Property"
//                         className="
// w-full
// h-full
// object-cover
// "
//                       />

//                       <button
//                         type="button"
//                         onClick={() => removeImage(0)}
//                         className="
// absolute
// top-2
// right-2
// w-6
// h-6
// rounded-full
// bg-black/70
// text-white
// flex
// items-center
// justify-center
// "
//                       >
//                         ×
//                       </button>
//                     </div>

//                     {/* Third Image
//                     {images[2] && (
//                       <div
//                         className="
// relative
// rounded-lg

// bg-[#171f33]
// border
// border-[#464554]
// "
//                       >
//                         <img
//                           src={images[2]}
//                           alt="Property"
//                           className="
// w-full
// h-full
// object-cover
// "
//                         />

//                         <button
//                           type="button"
//                           onClick={() => removeImage(2)}
//                           className="
// absolute
// top-2
// right-2
// w-6
// h-6
// rounded-full
// bg-black/70
// text-white
// flex
// items-center
// justify-center
// "
//                         >
//                           ×
//                         </button>
//                       </div>
//                     )}

//                     {/* Fourth Image */}
//                     {/* {images[3] && (
//                       <div
//                         className="
// relative
// rounded-lg

// bg-[#171f33]
// border
// border-[#464554]
// "
//                       >
//                         <img
//                           src={images[3]}
//                           alt="Property"
//                           className="
// w-full
// h-full
// object-cover
// "
//                         />

//                         <button
//                           type="button"
//                           onClick={() => removeImage(3)}
//                           className="
// absolute
// top-2
// right-2
// w-6
// h-6
// rounded-full
// bg-black/70
// text-white
// flex
// items-center
// justify-center
// "
//                         >
//                           ×
//                         </button>
//                       </div>
//                     )} */}

//                     {/* Fifth Image */}
//                     {/* {images[4] && (
//                       <div
//                         className="
// relative
// rounded-lg

// bg-[#171f33]
// border
// border-[#464554]
// "
//                       >
//                         <img
//                           src={images[4]}
//                           alt="Property"
//                           className="
// w-full
// h-full
// object-cover
// "
//                         />

//                         <button
//                           type="button"
//                           onClick={() => removeImage(4)}
//                           className="
// absolute
// top-2
// right-2
// w-6
// h-6
// rounded-full
// bg-black/70
// text-white
// flex
// items-center
// justify-center
// "
//                         >
//                           ×
//                         </button>
//                       </div>
//                     )} */}

//                     {/* Add Image */}
//                     {images.length < 5 && (
//                       <button
//                         type="button"
//                         onClick={openFilePicker}
//                         className="
// rounded-lg
// border
// border-dashed
// border-[#464554]
// bg-[#171f33]
// hover:border-[#c0c1ff]
// flex
// items-center
// justify-center
// text-[#dae2fd]
// text-3xl
// "
//                       >
//                         +
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 {/* <p className="text-xs text-[#8f96ad]">
//                   Upload up to 5 images. The first image will be the main image.
//                 </p> */}
//               </Field>
//             </div>

//             <div className="col-span-3 space-y-3 ">
//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">Name</FieldLabel>

//                 <Input
//                   {...register("title")}
//                   placeholder="Property name"
//                   className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                 />
//               </Field>

//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">
//                   Property Type
//                 </FieldLabel>

//                 <Controller
//                   name="propertyType"
//                   control={control}
//                   render={({ field }) => (
//                     <Select value={field.value} onValueChange={field.onChange}>
//                       <SelectTrigger
//                         className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                       >
//                         <SelectValue placeholder="Type" />
//                       </SelectTrigger>

//                       <SelectContent>
//                         {propertyType.map((item) => (
//                           <SelectItem key={item.value} value={item.value}>
//                             {item.label}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   )}
//                 />
//               </Field>

//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">Listing Type</FieldLabel>

//                 <Controller
//                   name="propertyPurpose"
//                   control={control}
//                   render={({ field }) => (
//                     <Select value={field.value} onValueChange={field.onChange}>
//                       <SelectTrigger
//                         className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                       >
//                         <SelectValue placeholder="Purpose" />
//                       </SelectTrigger>

//                       <SelectContent>
//                         {propertyPurpose.map((item) => (
//                           <SelectItem key={item.value} value={item.value}>
//                             {item.label}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   )}
//                 />
//               </Field>

//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">
//                   Street Address
//                 </FieldLabel>

//                 <Input
//                   {...register("address")}
//                   className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                 />
//               </Field>

//               <div className="grid grid-cols-3 gap-2">
//                 <Field>
//                   <FieldLabel className="text-[#dae2fd]">City</FieldLabel>

//                   <Input
//                     {...register("city")}
//                     className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                   />
//                 </Field>

//                 <Field>
//                   <FieldLabel className="text-[#dae2fd]">State</FieldLabel>

//                   <Input
//                     {...register("state")}
//                     className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                   />
//                 </Field>

//                 <Field>
//                   <FieldLabel className="text-[#dae2fd]">Zip Code</FieldLabel>

//                   <Input
//                     {...register("postalCode")}
//                     className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                   />
//                 </Field>
//               </div>

//               <div className="grid grid-cols-2 gap-2">
//                 <Field>
//                   <FieldLabel className="text-[#dae2fd]">Price</FieldLabel>

//                   <Input
//                     type="number"
//                     {...register("price", {
//                       valueAsNumber: true,
//                     })}
//                     className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                   />
//                 </Field>

//                 <Field>
//                   <FieldLabel className="text-[#dae2fd]">
//                     Building Size
//                   </FieldLabel>

//                   <Input
//                     type="number"
//                     {...register("buildingSize", {
//                       valueAsNumber: true,
//                     })}
//                     className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                   />
//                 </Field>
//               </div>

//               <div className="grid grid-cols-4 gap-2">
//                 {["bedrooms", "bathrooms", "toilets", "parkingSpace"].map(
//                   (item) => (
//                     <Field key={item}>
//                       <FieldLabel className="text-[#dae2fd]">{item}</FieldLabel>

//                       <Input
//                         type="number"
//                         {...register(item as keyof PropertyFormValues, {
//                           valueAsNumber: true,
//                         })}
//                         className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                       />
//                     </Field>
//                   ),
//                 )}
//               </div>

//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">Description</FieldLabel>

//                 <Input
//                   {...register("description")}
//                   className="
//     bg-[#171f33]
//     border-[#464554]
//     text-[#dae2fd]
//     placeholder:text-[#c7c4d7]
//     focus-visible:border-[#c0c1ff]
//     focus-visible:ring-[#c0c1ff]/20
//   "
//                 />
//               </Field>

//               <Field>
//                 <FieldLabel className="text-[#dae2fd]">Amenities</FieldLabel>

//                 <AmenityBadge
//                   amenities={[
//                     "Air Conditioning",

//                     "Pet Friendly",

//                     "Security System",

//                     "Laundry",

//                     "Storage",

//                     "Solar Panels",
//                   ]}
//                 />
//               </Field>

//               <div className="space-y-3">
//                 <div className="flex gap-2 items-center">
//                   <Controller
//                     name="active"
//                     control={control}
//                     render={({ field }) => (
//                       <Switch
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                       />
//                     )}
//                   />

//                   <Label className="text-[#dae2fd]">
//                     Active (visible to AI)
//                   </Label>
//                 </div>

//                 <div className="flex gap-2 items-center">
//                   <Controller
//                     name="isFeatured"
//                     control={control}
//                     render={({ field }) => (
//                       <Switch
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                       />
//                     )}
//                   />

//                   <Label className="text-[#dae2fd]">Featured Listing</Label>
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 className="
// w-full flex ite bg-[#c0c1ff] text-[#1000A9] hover:bg-[#222a3d]  hover:text-[#dae2fd] border
// "
//               >
//                 {loading
//                   ? "Saving..."
//                   : mode === "create"
//                     ? "Create Property"
//                     : "Update Property"}
//               </Button>
//             </div>
//           </div>
//         </FieldGroup>
//       </form>
//     </div>
//   );
// };

// export default PropertyForm;

import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";

import { usePropertyImages } from "../../../context/UploadContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Field, FieldGroup, FieldLabel } from "../../ui/field";

import { Input } from "../../ui/input";

import { Button } from "../../ui/button";

import AmenityBadge from "../../property/AmenitiesBadge";

import { Switch } from "../../ui/switch";

import { Label } from "../../ui/label";

import {
  propertyPurpose,
  propertyType,
  type PropertyFormValues,
} from "../../../types";

// const labelStyle = "text-xs text-gray-900 font-medium";

type PropertyFormProps = {
  mode: "create" | "edit";

  defaultValues?: Partial<PropertyFormValues>;

  onSubmit: (data: PropertyFormValues) => void;

  loading?: boolean;
};

const PropertyForm = ({
  mode,
  defaultValues,
  onSubmit,
  loading,
}: PropertyFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, control } = useForm<PropertyFormValues>({
    defaultValues: {
      amenities: [],

      isFeatured: false,

      ...defaultValues,
    },
  });

  const { images, uploadImage, deleteImage, isUploading } = usePropertyImages();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) return;

    const remainingSlots = 5 - images.length;

    const filesToAdd = files.slice(0, remainingSlots);

    for (const file of filesToAdd) {
      await uploadImage(file);
    }

    event.target.value = "";
  };

  const removeImage = async (id: string) => {
    await deleteImage(id);
  };

  const openFilePicker = () => {
    if (images.length < 5) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div
      className="
w-full

max-h-125 
overflow-y-auto 
overflow 
[&::-webkit-scrollbar]:hidden 
"
    >
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit({
            ...data,
            attachmentsId: images.map((image) => image.id),
          }),
        )}
        className=""
      >
        <FieldGroup>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 space-y-3">
              <Field>
                <FieldLabel className="text-[#dae2fd]">
                  Property Images
                </FieldLabel>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {images.length === 0 && (
                  <button
                    type="button"
                    onClick={openFilePicker}
                    disabled={isUploading}
                    className="
w-full 
h-64 
rounded-lg 
border 
border-dashed 
border-[#464554] 
bg-[#171f33] 
hover:border-[#c0c1ff] 
flex 
items-center 
justify-center 
text-[#dae2fd] 
text-3xl 
disabled:opacity-50
"
                  >
                    {isUploading ? "Uploading..." : "+"}
                  </button>
                )}

                {images.length > 0 && (
                  <div
                    className="
grid 
grid-cols-3 
grid-rows-2
gap-2 
h-80 
"
                  >
                    {/* Main Image */}
                    <div
                      className="
relative 
col-span-2 
rounded-lg 
bg-[#171f33] 
border 

border-[#464554] 
"
                    >
                      <img
                        src={images[0].url}
                        alt="Property"
                        className="
w-full 
h-full 
object-cover 
rounded-md
"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(images[0].id)}
                        className="
absolute 
top-2 
right-2 
w-6 
h-6 
rounded-full 
bg-black/70 
text-white 
flex 
items-center 
justify-center 
"
                      >
                        ×
                      </button>
                    </div>

                    {/* Second Image */}
                    {images[1] && (
                      <div
                        className="
relative 
rounded-lg 
bg-[#171f33] 
border 
border-[#464554] 
"
                      >
                        <img
                          src={images[1].url}
                          alt="Property"
                          className="
w-full 
h-full 
object-cover 
rounded-md
"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(images[1].id)}
                          className="
absolute 
top-2 
right-2 
w-6 
h-6 
rounded-full 
bg-black/70 
text-white 
flex 
items-center 
justify-center 
"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {/* Third Image */}
                    {images[2] && (
                      <div
                        className="
relative 
rounded-lg 
bg-[#171f33] 
border 
border-[#464554] 
"
                      >
                        <img
                          src={images[2].url}
                          alt="Property"
                          className="
w-full 
h-full 
object-cover 
rounded-md
"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(images[2].id)}
                          className="
absolute 
top-2 
right-2 
w-6 
h-6 
rounded-full 
bg-black/70 
text-white 
flex 
items-center 
justify-center 
"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {/* Fourth Image */}
                    {images[3] && (
                      <div
                        className="
relative 
rounded-lg 
bg-[#171f33] 
border 
border-[#464554] 
"
                      >
                        <img
                          src={images[3].url}
                          alt="Property"
                          className="
w-full 
h-full 
object-cover 
rounded-md
"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(images[3].id)}
                          className="
absolute 
top-2 
right-2 
w-6 
h-6 
rounded-full 
bg-black/70 
text-white 
flex 
items-center 
justify-center 
"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {/* Fifth Image */}
                    {images[4] && (
                      <div
                        className="
relative 
rounded-lg 
bg-[#171f33] 
border 
border-[#464554] 
"
                      >
                        <img
                          src={images[4].url}
                          alt="Property"
                          className="
w-full 
h-full 
object-cover 
rounded-md
"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(images[4].id)}
                          className="
absolute 
top-2 
right-2 
w-6 
h-6 
rounded-full 
bg-black/70 
text-white 
flex 
items-center 
justify-center 
"
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {/* Add Image */}
                    {images.length < 5 && (
                      <button
                        type="button"
                        onClick={openFilePicker}
                        disabled={isUploading}
                        className="
rounded-lg 
border 
border-dashed 
border-[#464554] 
bg-[#171f33] 
hover:border-[#c0c1ff] 
flex 
items-center 
justify-center 
text-[#dae2fd] 
text-3xl 
disabled:opacity-50
"
                      >
                        {isUploading ? "..." : "+"}
                      </button>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className="col-span-3 space-y-3">
              <Field>
                <FieldLabel className="text-[#dae2fd]">Name</FieldLabel>

                <Input
                  {...register("title")}
                  placeholder="Property name"
                  className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                />
              </Field>

              <Field>
                <FieldLabel className="text-[#dae2fd]">
                  Property Type
                </FieldLabel>

                <Controller
                  name="propertyType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                      >
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>

                      <SelectContent>
                        {propertyType.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              <Field>
                <FieldLabel className="text-[#dae2fd]">Listing Type</FieldLabel>

                <Controller
                  name="propertyPurpose"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                      >
                        <SelectValue placeholder="Purpose" />
                      </SelectTrigger>

                      <SelectContent>
                        {propertyPurpose.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              <Field>
                <FieldLabel className="text-[#dae2fd]">
                  Street Address
                </FieldLabel>

                <Input
                  {...register("address")}
                  className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                />
              </Field>

              <div className="grid grid-cols-3 gap-2">
                <Field>
                  <FieldLabel className="text-[#dae2fd]">City</FieldLabel>

                  <Input
                    {...register("city")}
                    className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-[#dae2fd]">State</FieldLabel>

                  <Input
                    {...register("state")}
                    className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-[#dae2fd]">Zip Code</FieldLabel>

                  <Input
                    {...register("postalCode")}
                    className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Field>
                  <FieldLabel className="text-[#dae2fd]">Price</FieldLabel>

                  <Input
                    type="number"
                    {...register("price", {
                      valueAsNumber: true,
                    })}
                    className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-[#dae2fd]">
                    Building Size
                  </FieldLabel>

                  <Input
                    type="number"
                    {...register("buildingSize", {
                      valueAsNumber: true,
                    })}
                    className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                  />
                </Field>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {["bedrooms", "bathrooms", "toilets", "parkingSpace"].map(
                  (item) => (
                    <Field key={item}>
                      <FieldLabel className="text-[#dae2fd]">{item}</FieldLabel>

                      <Input
                        type="number"
                        {...register(item as keyof PropertyFormValues, {
                          valueAsNumber: true,
                        })}
                        className="
    bg-[#171f33] 
    border-[#464554] 
    text-[#dae2fd] 
    placeholder:text-[#c7c4d7] 
    focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                      />
                    </Field>
                  ),
                )}
              </div>

              <Field>
                <FieldLabel className="text-[#dae2fd]">Description</FieldLabel>

                <Input
                  {...register("description")}
                  className="
                   bg-[#171f33] 
                   border-[#464554] 
                   text-[#dae2fd] 
                 placeholder:text-[#c7c4d7] 
                focus-visible:border-[#c0c1ff] 
    focus-visible:ring-[#c0c1ff]/20 
  "
                />
              </Field>
              <Field>
                <FieldLabel className="text-[#dae2fd]">Amenities</FieldLabel>

                <Controller
                  name="amenities"
                  control={control}
                  render={({ field }) => (
                    <AmenityBadge
                      amenities={[
                        "Air Conditioning",
                        "Pet Friendly",
                        "Security System",
                        "Laundry",
                        "Storage",
                        "Solar Panels",
                      ]}
                      selectedAmenities={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </Field>

              <div className="space-y-3">
                {/* <div className="flex gap-2 items-center">
                  <Controller
                    name="active"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />

                  <Label className="text-[#dae2fd]">
                    Active (visible to AI)
                  </Label>
                </div> */}

                <div className="flex gap-2 items-center">
                  <Controller
                    name="isFeatured"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />

                  <Label className="text-[#dae2fd]">Featured Listing</Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading || isUploading}
                className="


                w-full flex ite bg-[#c0c1ff] text-[#1000A9] hover:bg-[#222a3d]  hover:text-[#dae2fd] border  
                  "
              >
                {loading
                  ? "Saving..."
                  : isUploading
                    ? "Uploading images..."
                    : mode === "create"
                      ? "Create Property"
                      : "Update Property"}
              </Button>
            </div>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default PropertyForm;
