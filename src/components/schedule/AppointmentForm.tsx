import CustomInfoDrawer from "@/common/CustomInfoDrawer";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { DatePicker } from "./DatePicker";
import { usePopUpContext } from "@/context/PopUpContext";

export const AppointmentForm = () => {
  // type PropertyType ='property type' |'f'
  const propertyStatuses = ["Available", "Pending", "Sold", "Rented"] as const;
  const { control } = useForm();
  const {closeDrawer} =usePopUpContext()
  return (
    <CustomInfoDrawer className="w-full max-w-md p-4 text-[#dae2fd] ">
      <div className="overflow-y-auto  [&::-webkit-scrollbar]:hidden  ">
        <header className="flex justify-between items-center border-b border-b-[#464554] pb-4 mb-5">
          <div>
            <h1 className="text-lg font-bold capitalize ">new appointment</h1>
            <p className="mt-1 text-xs ">fill in the details below </p>
          </div>
          <Button className="border  bg-[#171f33]  border-[#464554]" onClick={()=>closeDrawer()}>X</Button>
        </header>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel className="text-[#dae2fd]">Title</FieldLabel>
              <Input className="bg-[#171f33]  border-[#464554]   text-[#dae2fd]  placeholder:text-[#c7c4d7]  focus-visible:border-[#c0c1ff]  focus-visible:ring-[#c0c1ff]/20 " />
            </Field>
            <Field>
              <FieldLabel className="text-[#dae2fd]">Customer</FieldLabel>

              <Controller
                name="propertyType"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className=" bg-[#171f33]  border-[#464554] text-[#dae2fd] placeholder:text-[#c7c4d7] focus-visible:border-[rgb(192,193,255)] focus-visible:ring-[#c0c1ff]/20  ">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem>
                        {/* {item.label} */}
                        Ayeola Kehinde
                      </SelectItem>
                      <SelectItem>
                        {/* {item.label} */}
                        ibrahim Dorcas
                      </SelectItem>
                      <SelectItem>
                        {/* {item.label} */}
                        Edward Elizabeth
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            {/*  property which  the customer will be seeing will be fetched from the appointment request  */}
            <Field>
              <FieldLabel className="text-[#dae2fd]">Property </FieldLabel>
              <Input className="bg-[#171f33]  border-[#464554]   text-[#dae2fd]  placeholder:text-[#c7c4d7]  focus-visible:border-[#c0c1ff]  focus-visible:ring-[#c0c1ff]/20 " />
            </Field>
            {/* assigned agent  */}
            <Field>
              <FieldLabel className="text-[#dae2fd] capitalize">
                assigned Agent{" "}
              </FieldLabel>

              <Controller
                name="propertyType"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className=" bg-[#171f33]  border-[#464554] text-[#dae2fd] placeholder:text-[#c7c4d7] focus-visible:border-[rgb(192,193,255)] focus-visible:ring-[#c0c1ff]/20  ">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem>
                        {/* {item.label} */}
                        Rasheed Ibrahim
                      </SelectItem>
                      <SelectItem>
                        {/* {item.label} */}
                        Bamidele Ifeoluwa
                      </SelectItem>
                      <SelectItem>
                        {/* {item.label} */}
                        Edward Elizabeth
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            {/* appointment time and date  */}
            <div className="flex gap-3">
              <Field>
                <FieldLabel className="text-[#dae2fd] capitalize">
                  Date
                </FieldLabel>

                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker value={field.value} onChange={field.onChange} />
                  )}
                />
              </Field>
              <Field>
                <FieldLabel className="text-[#dae2fd]">Time </FieldLabel>
                <Input className="bg-[#171f33]  border-[#464554]   text-[#dae2fd]  placeholder:text-[#c7c4d7]  focus-visible:border-[#c0c1ff]  focus-visible:ring-[#c0c1ff]/20 " />
              </Field>
            </div>
            {/* duration and status */}
            <div className="flex gap-3">
              <Field>
                <FieldLabel className="text-[#dae2fd]">Duration</FieldLabel>

                <Controller
                  name="propertyType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className=" bg-[#171f33]  border-[#464554] text-[#dae2fd] placeholder:text-[#c7c4d7] focus-visible:border-[rgb(192,193,255)] focus-visible:ring-[#c0c1ff]/20  ">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>

                      <SelectContent>
                        {["20min", "30min", "45min", "60min", "90min"].map(
                          (time, index) => (
                            <SelectItem key={index}>{time}</SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
              <Field>
                <FieldLabel className="text-[#dae2fd]">Status</FieldLabel>

                <Controller
                  name="propertyType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className=" bg-[#171f33]  border-[#464554] text-[#dae2fd] placeholder:text-[#c7c4d7] focus-visible:border-[rgb(192,193,255)] focus-visible:ring-[#c0c1ff]/20  ">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>

                      <SelectContent>
                        {propertyStatuses.map((time, index) => (
                          <SelectItem key={index}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
            </div>
            {/* notes */}
            <Field>
              <FieldLabel className="text-[#dae2fd]">Note </FieldLabel>

              <Textarea
                id="textarea-message"
                placeholder="Type your message here."
                className="bg-[#171f33]  border-[#464554] h-24   text-[#dae2fd]  placeholder:text-[#c7c4d7]  focus-visible:border-[#c0c1ff]  focus-visible:ring-[#c0c1ff]/20 "
              />
            </Field>
            <div className="flex justify-end items-center w-full gap-3">
              <Button
                type="button"
                className="flex-1 max-w-24 bg-gray-600 hover:bg-gray-200 border"
                onClick={()=>closeDrawer()}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="min-w-0 py-6 bg-[#c0c1ff] text-[#1000A9] hover:bg-[#222a3d] hover:text-[#dae2fd] border"
              >
                Create Appointment 
              </Button>
            </div>
          </FieldGroup>
        </form>
      </div>
    </CustomInfoDrawer>
  );
};
