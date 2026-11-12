import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {register}=useFormContext()
  return (
    <div className="w-full border rounded-2xl px-3 border-[#464554] ">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center  justify-between py-4 text-sm font-medium text-[#DAE2FD] hover:text-white transition"
      >
        <span>Hero</span>
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
                <FieldLabel>badge title</FieldLabel>
                  <Input
                id="badgeTitle"
                placeholder="Enter  your badge title"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
            {...register('hero.badgeTitle')}/>  
            </Field>
            <Field>
              <FieldLabel>Heading</FieldLabel>
              <Textarea
                id="heading"
                placeholder="Write your hero heading description "
                rows={4}
                className="resize-none border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
              {...register('hero.heading')}/>  
            </Field>

          

            {/* Sub title */}
            <Field>
              <FieldLabel htmlFor="siteDescription">
                sub title 
              </FieldLabel>

              <Textarea
                id="description"
                placeholder="write your hero sub title."
                rows={4}
                className="resize-none border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
              
                {...register('hero.description')}/>  
            </Field>
            <div className="flex gap-4">
               <Field>
              <FieldLabel htmlFor="primaryButton">
               primary button
              </FieldLabel>

              <Input
                id="secondaryButton"
                placeholder="#C0C1FF"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
            {...register('hero.buttonText')}  />
            </Field>
               <Field>
              <FieldLabel htmlFor="secondaryButton">
               secondary button
              </FieldLabel>

              <Input
                id="secondaryButton"
                placeholder="#020617"
                className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
              
                {...register('hero.buttonText')}/>
            </Field>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
