import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export const TeamStep = ({
  form,
  handleNext,
  handleBack,
}: {
  form: any;
  handleNext: any;
  handleBack: any;
}) => {
  return (
    <section className="space-y-6">
      <div>
        <h1>bring your team along</h1>
        <h2>invite your team .</h2>
        <p>bring your team on board and start working together </p>
      </div>
      <div>
        <FieldGroup>
          {/* country  */}
          <div className="flex gap-2 justify-between border border-[#464554] p-5 rounded-lg ">
            <Field>
              {/* <FieldLabel htmlFor="phoneNumber">TimeZone </FieldLabel> */}

              <Input
                id="timeZone"
                placeholder="timeZone"
                className="py-5 border-[#464554]"
                {...form.register("timeZone")}
              />
            </Field>
            <Field>
              {/* <FieldLabel htmlFor="phoneNumber">currency </FieldLabel> */}

              <Input
                id="currency"
                placeholder="currency"
                className="py-5 border-[#464554]"
                {...form.register("currency")}
              />
            </Field>
          </div>

          <Button
            type="button"
            className="w-[300px]  bg-transparent hover:bg-transparent flex gap-2 py-5  capitalize "
            
          >
            <span>
              <Plus /> 
            </span>
            add another team member{" "}
          </Button>
          <div className="flex justify-between items-center">
            <Button
              type="button"
              className=" bg-gray-500 py-5  capitalize"
              onClick={handleBack}
            >
              back
            </Button>{" "}
            <div className="flex gap-2">
              <Button className='bg-transparent
              '>skip for now </Button>
              <Button
                type="button"
                className=" bg-[#6366F1] py-5 hover:bg-[#6366F1] capitalize"
                onClick={handleNext}
              >
                send invitation
              </Button>{" "}
            </div>
          </div>
        </FieldGroup>
      </div>
    </section>
  );
};
