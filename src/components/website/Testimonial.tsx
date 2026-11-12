import { ChevronDown, ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { Field, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{register} =useFormContext()

  return (
    <div className="w-full rounded-2xl border border-[#464554] px-3">
      {/* Main Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-sm font-medium text-[#DAE2FD] transition hover:text-white"
      >
        <span>Testimonials</span>

        <div className="flex items-center gap-3">
          <span onClick={(e) => e.stopPropagation()}>
            <Switch />
          </span>

          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Main Accordion Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Input
            placeholder="What Client Say"
            className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B] mb-4"
          />
          <div className="flex flex-col ">
            {[1, 2, 3, 4].map((testimonial) => {
              return (
                <div
                  key={testimonial}
                  className="flex flex-col  gap-3 py-4 first:pt-0"
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3">
                      <Field>
                        <FieldLabel className="uppercase ">
                          {" "}
                          Quote {testimonial}
                        </FieldLabel>
                        <Textarea
                          placeholder={`Write a what the customer say  ${testimonial}...`}
                          rows={3}
                          className="resize-none border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                        {...register('testimonial.quote')}/>    
                      </Field>

                      <Field>
                        <FieldLabel>Author</FieldLabel>
                        <Input
                          placeholder={`Enter testimonial ${testimonial} name`}
                          className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                         {...register('testimonial.author')}/>  
                      </Field>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
