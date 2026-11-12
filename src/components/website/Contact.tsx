import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useFormContext } from "react-hook-form";

const ContactInfo = () => {
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
        <span>Contact Info</span>
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
              <FieldLabel>Heading </FieldLabel>
              <Input
                id="heading"
                placeholder="Get in touch"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
             
             {...register('contact.heading')}/>
            </Field>
            <Field>
              <FieldLabel>Phone </FieldLabel>
              <Input
                id="phone"
                placeholder="+1 (555) 014-7788"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
            
            {...register('contact.phone')}/>
            </Field>

            {/* email*/}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                placeholder="hello@estatecall.com"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
              
              {...register('contact.email')}/>
            </Field>
            {/*address  */}
            <Field>
              <FieldLabel htmlFor="address">address</FieldLabel>
              <Input
                id="address"
                placeholder="24 sabo Market Street"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
             
             {...register('contact.address')}/>
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
