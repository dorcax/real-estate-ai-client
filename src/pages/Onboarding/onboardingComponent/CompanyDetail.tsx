import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const DetailsStep = ({
  form,
  handleNext,
  handleBack
}: {
  form: any;
  handleNext: any;
  handleBack:any
}) => {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">company address details</h1>
        <h2>where is your company based ?</h2>
        <p className="text-white/60">
          this help us to configure your workspace for your location
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="website">Business addres</FieldLabel>

          <Input
            id="website"
            placeholder="business address"
             className="py-5 border border-[#464554]  "
            {...form.register("address")}
          />
           {form.formState.errors.eaddres && (
                        <FieldError
                          errors={[form.formState.errors.address]}
                        />
                      )}
        </Field>

        <div className="flex gap-2 justify-between">
          <Field>
            <FieldLabel htmlFor="password">city</FieldLabel>

            <Input
              id="city"
              type="text"
              placeholder="city "
              className="py-5 border border-[#464554] "
              {...form.register("city")}
            />
             {form.formState.errors.city && (
              <FieldError
                errors={[form.formState.errors.city]}
              />
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="state">state </FieldLabel>

            <Input
              id="website"
              placeholder="state"
              className="py-5 border border-[#464554]"
              {...form.register("state")}
            />
             {form.formState.errors.state && (
              <FieldError
                errors={[form.formState.errors.state]}
              />
            )}
          </Field>
        </div>

        {/* country  */}
        <div className="flex gap-2 justify-between">
          <Field>
            <FieldLabel htmlFor="password">country </FieldLabel>

            <Input
              id="country"
              type="text"
              placeholder="country "
              className="py-5 border border-[#464554]"
              {...form.register("country")}
            />
             {form.formState.errors.country && (
                          <FieldError
                            errors={[form.formState.errors.country]}
                          />
                        )}
          </Field>
          <Field>
            <FieldLabel htmlFor="phoneNumber">TimeZone </FieldLabel>

            <Input
              id="timeZone"
              placeholder="timeZone"
              className="py-5 border border-[#464554]"
              {...form.register("timeZone")}
            />
             {form.formState.errors.timeZone && (
              <FieldError
                errors={[form.formState.errors.timeZone]}
              />
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="phoneNumber">currency </FieldLabel>

            <Input
              id="currency"
              placeholder="currency"
              className="py-5 border border-[#464554]"
              {...form.register("currency")}
            />
             {form.formState.errors.currency && (
              <FieldError
                errors={[form.formState.errors.currency]}
              />
            )}
          </Field>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Button
            type="button"
            className=" bg-gray-500 py-5  capitalize"
            onClick={handleBack}
          >
            back
          </Button>{" "}
          <Button
            type="button"
            className=" bg-[#6366F1] py-5 hover:bg-[#6366F1] capitalize"
            onClick={handleNext}
          >
            continue
          </Button>{" "}
        </div>
      </FieldGroup>
    </section>
  );
};
