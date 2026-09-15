import type { OnboardingFormData } from "@/common/Validation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

export const CompanyStep = ({
  form,
  handleNext,
}: {
  form: UseFormReturn<OnboardingFormData>;
  handleNext: () => void;
}) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold capitalize">
          Tell us about your company
        </h1>

        <p className="text-base">
          Just a few details to personalize your workspace
        </p>
      </div>

      <div className="space-y-5">
        <FieldGroup>
          {/* Company Name */}
          <Field>
            <FieldLabel htmlFor="companyName">
              Company Name
            </FieldLabel>

            <Input
              id="companyName"
              placeholder="Company Name"
              className="border border-[#464554] py-5"
              {...form.register("name")}
            />

            {form.formState.errors.name && (
              <FieldError
                errors={[form.formState.errors.name]}
              />
            )}
          </Field>

          {/* Company Email */}
          <Field>
            <FieldLabel htmlFor="email">
              Company Email
            </FieldLabel>

            <Input
              id="email"
              type="email"
              placeholder="Company Email"
              className="border border-[#464554] py-5"
              {...form.register("email")}
            />

            {form.formState.errors.email && (
              <FieldError
                errors={[form.formState.errors.email]}
              />
            )}
          </Field>

        
          <div className="flex justify-between gap-2">
            <Field>
              <FieldLabel htmlFor="phoneNumber">
                Phone Number
              </FieldLabel>

              <Input
                id="phoneNumber"
                type="text"
                placeholder="Phone number"
                className="border border-[#464554] py-5"
                {...form.register("phoneNumber")}
              />
               {form.formState.errors.phoneNumber && (
              <FieldError
                errors={[form.formState.errors.phoneNumber]}
              />
            )}
            </Field>

            <Field>
              <FieldLabel htmlFor="website">
                Website
              </FieldLabel>

              <Input
                id="website"
                placeholder="https://yourcompany.com"
                className="border border-[#464554] py-5"
                {...form.register("website")}
              />
              
            </Field>
          </div>

       
          <Field>
            <FieldLabel htmlFor="description">
              Company Description
            </FieldLabel>

            <textarea
              id="description"
              placeholder="Tell us a little about your company"
              className="min-h-32 w-full rounded-md border border-[#464554] bg-transparent p-3"
              {...form.register("description")}
            />

            {form.formState.errors.description && (
              <FieldError
                errors={[form.formState.errors.description]}
              />
            )}
          </Field>

         
          <Field>
            <FieldLabel htmlFor="companyLogo">
              Company Logo
            </FieldLabel>

            <label
              htmlFor="companyLogo"
              className="cursor-pointer rounded-lg border border-[#464554] p-4"
            >
              <div className="flex gap-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#464554]">
                  <Upload className="size-5 text-white/70" />
                </div>

                <div>
                  <p className="text-sm">
                    Drop your company logo here or{" "}
                    <span className="text-[#6366F1]">
                      browse
                    </span>
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    PNG, JPG or SVG · Max 5MB
                  </p>

                  <Input
                    id="companyLogo"
                    type="file"
                    accept="image/png,image/jpeg,image/svg+xml"
                    className="hidden"
                    // {...form.register("companyLogo")}
                  />
                </div>
              </div>
            </label>
          </Field>

          {/* Continue */}
          <div className="mb-4 flex justify-end">
            <Button
              type="button"
              className="bg-[#6366F1] py-5 capitalize hover:bg-[#6366F1]"
              onClick={handleNext}
            >
              Continue
            </Button>
          </div>
        </FieldGroup>
      </div>
    </div>
  );
};