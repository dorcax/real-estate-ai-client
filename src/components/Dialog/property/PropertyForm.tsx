import { useForm, Controller } from "react-hook-form";

import CustomInfoDialog from "@/common/CustomInfoDialog";

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

const labelStyle = "text-xs text-gray-900 font-medium";

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
  const { register, handleSubmit, control } = useForm<PropertyFormValues>({
    defaultValues: {
      amenities: [],
      active: true,
      isFeatured: false,
      ...defaultValues,
    },
  });

  return (
    <CustomInfoDialog
      title={
        mode === "create" ? "New Property Listing" : "Edit Property Listing"
      }
      className="
w-full 
md:max-w-lg
max-h-125
overflow-y-auto
overflow
[&::-webkit-scrollbar]:hidden
"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <FieldGroup>
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

          <div className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel className="text-[#dae2fd]">Property Type</FieldLabel>

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
          </div>

          <Field>
            <FieldLabel className="text-[#dae2fd]">Street Address</FieldLabel>

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
              <FieldLabel className="text-[#dae2fd]">Building Size</FieldLabel>

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

            <AmenityBadge
              amenities={[
                "Air Conditioning",

                "Pet Friendly",

                "Security System",

                "Laundry",

                "Storage",

                "Solar Panels",
              ]}
            />
          </Field>

          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <Controller
                name="active"
                control={control}
                render={({ field }) => (
                  <Switch
                    // checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />

              <Label className="text-[#dae2fd]">Active (visible to AI)</Label>
            </div>

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
            className="
w-full bg-[#c0c1ff] text-[#1000A9] hover:bg-[#222a3d]  hover:text-[#dae2fd] border 
"
          >
            {loading
              ? "Saving..."
              : mode === "create"
                ? "Create Property"
                : "Update Property"}
          </Button>
        </FieldGroup>
      </form>
    </CustomInfoDialog>
  );
};

export default PropertyForm;
