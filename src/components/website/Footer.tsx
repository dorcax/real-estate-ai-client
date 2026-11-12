import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { Field, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{register} =useFormContext()
  return (
    <div className="w-full border rounded-2xl px-3 border-[#464554] ">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center  justify-between py-4 text-sm font-medium text-[#DAE2FD] hover:text-white transition"
      >
        <span>Footer</span>
        <div className="flex gap-3">
          <Switch />

          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {/* Accordion content  */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4">
            <Field>
              <FieldLabel>Footer Text </FieldLabel>
              <Input
                id="siteTitle"
                placeholder="Premium real estate, powered by AI."
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
            {...register('footer.text')}  />
            </Field>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
