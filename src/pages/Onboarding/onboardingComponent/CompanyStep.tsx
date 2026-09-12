import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

export const CompanyStep = ({
  form,
  handleNext,
}: {
  form: any;
  handleNext: any;
}) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl capitalize font-bold ">
          tell us about your company{" "}
        </h1>
        <p className="text-base ">
          just a few details to personalize your cworkspace{" "}
        </p>
      </div>
      <form className="space-y-5">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fullName">Company Name</FieldLabel>

            <Input
              id=""
              placeholder="Company Name"
              className="py-5 border border-[#464554]"
              {...form.register("fullName")}
            />

            {form.formState.errors.fullName && (
              <FieldError errors={[form.formState.errors.fullName]} />
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Company Email</FieldLabel>

            <Input
              id="email"
              type="email"
              placeholder="Company Email"
              className="py-5 border border-[#464554]"
              {...form.register("email")}
            />

            {form.formState.errors.email && (
              <FieldError errors={[form.formState.errors.email]} />
            )}
          </Field>

          <div className="flex gap-2 justify-between">
            <Field>
              <FieldLabel htmlFor="password">Phone Number </FieldLabel>

              <Input
                id="password"
                type="text"
                placeholder="phone number "
                className="py-5 border border-[#464554]"
                {...form.register("phoneNumber")}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="phoneNumber">Website </FieldLabel>

              <Input
                id="website"
                placeholder="https://yourcompany.com"
                className="py-5 border border-[#464554]"
                {...form.register("website")}
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="description">Company Description</FieldLabel>

            <textarea
              id="description"
              placeholder="Tell us a little about your company"
              className="min-h-32 w-full rounded-md border  border-[#464554] bg-transparent p-3"
              {...form.register("description")}
            />
          </Field>
          {/* company logo */}

          <Field>
            <FieldLabel htmlFor="companyLogo">Company Logo</FieldLabel>

            <label
              htmlFor="companyLogo"
              className=" cursor-pointer rounded-lg border border-[#464554] p-4 "
            >
              <div className="flex gap-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#464554]">
                  <Upload className="size-5 text-white/70" />
                </div>

                <div className="">
                  <p className="text-sm">
                    Drop your company logo here or{" "}
                    <span className="text-[#6366F1]">browse</span>
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    PNG, JPG or SVG · Max 5MB
                  </p>

                  <Input
                    id="companyLogo"
                    type="file"
                    accept="image/png,image/jpeg,image/svg+xml"
                    className="hidden"
                    {...form.register("companyLogo")}
                  />
                </div>
              </div>
            </label>
          </Field>

          <div className="flex justify-end">
            <Button
              type="button"
              //   disabled={loading}
              className=" bg-[#6366F1] py-5 hover:bg-[#6366F1] capitalize"
              onClick={handleNext}
            >
              continue
            </Button>{" "}
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};
