

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Field>
            <FieldLabel className={labelStyle}>Name</FieldLabel>

            <Input {...register("title")} placeholder="Property name" />
          </Field>

          <div className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel className={labelStyle}>Property Type</FieldLabel>

              <Controller
                name="propertyType"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
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
              <FieldLabel className={labelStyle}>Listing Type</FieldLabel>

              <Controller
                name="propertyPurpose"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
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
            <FieldLabel className={labelStyle}>Street Address</FieldLabel>

            <Input {...register("address")} />
          </Field>

          <div className="grid grid-cols-3 gap-2">
            <Field>
              <FieldLabel className={labelStyle}>City</FieldLabel>

              <Input {...register("city")} />
            </Field>

            <Field>
              <FieldLabel className={labelStyle}>State</FieldLabel>

              <Input {...register("state")} />
            </Field>

            <Field>
              <FieldLabel className={labelStyle}>Zip Code</FieldLabel>

              <Input {...register("postalCode")} />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel className={labelStyle}>Price</FieldLabel>

              <Input
                type="number"
                {...register("price", {
                  valueAsNumber: true,
                })}
              />
            </Field>

            <Field>
              <FieldLabel className={labelStyle}>Building Size</FieldLabel>

              <Input
                type="number"
                {...register("buildingSize", {
                  valueAsNumber: true,
                })}
              />
            </Field>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["bedrooms", "bathrooms", "toilets", "parkingSpace"].map(
              (item) => (
                <Field key={item}>
                  <FieldLabel className={labelStyle}>{item}</FieldLabel>

                  <Input
                    type="number"
                    {...register(item as keyof PropertyFormValues, {
                      valueAsNumber: true,
                    })}
                  />
                </Field>
              ),
            )}
          </div>

          <Field>
            <FieldLabel className={labelStyle}>Description</FieldLabel>

            <Input {...register("description")} />
          </Field>

          <Field>
            <FieldLabel className={labelStyle}>Amenities</FieldLabel>

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

              <Label className={labelStyle}>Active (visible to AI)</Label>
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

              <Label className={labelStyle}>Featured Listing</Label>
            </div>
          </div>

          <Button
            type="submit"
            className="
w-full
bg-[#6366F1]
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
