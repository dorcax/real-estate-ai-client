
import { useState } from "react";
import { ChevronDown, ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import { useFormContext } from "react-hook-form";

const Branding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {register} =useFormContext()

  return (
    <div className="w-full border rounded-2xl px-3 border-[#464554] ">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center  justify-between py-4 text-sm font-medium text-[#DAE2FD] hover:text-white transition"
      >
        <span>Branding</span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4">

            {/* Logo Upload */}
            <Field>
              <FieldLabel>Website logo</FieldLabel>

              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#464554] bg-[#101A30] p-5 text-center hover:border-[#818CF8] transition">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#171F33] text-[#C0C1FF]">
                  <ImagePlus size={18} />
                </div>

                <span className="text-xs font-medium text-[#DAE2FD]">
                  Upload your logo
                </span>

                <span className="text-[10px] text-[#8294B9]">
                  PNG, JPG or SVG · Max 2MB
                </span>

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml"
                  className="hidden"
                     {...register('branding.logo')}
                />
              </label>
            </Field>

            {/* Site Title */}
            <Field>
              <FieldLabel htmlFor="siteTitle">
                branding title
              </FieldLabel>

              <Input
                id="brandingTitle"
                placeholder="Enter your website title"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                 {...register('branding.brandingTitle')}
              
              />
            </Field>

            {/* Site Description */}
            <Field>
              <FieldLabel htmlFor="siteDescription">
                Branding Description
              </FieldLabel>

              <Textarea
                id="brandingDescription"
                placeholder="Write a short description about your website..."
                rows={4}
                className="resize-none border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                {...register('branding.description')}
             />
            </Field>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
