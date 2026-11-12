import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

const Faq = () => {
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
        <span>FAQ</span>

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
            placeholder="Frequently Asked "
            className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B] mb-4"
          />
          <div className="flex flex-col ">
            {[1, 2, 3].map((faq) => {
              return (
                <div
                  key={faq}
                  className="flex flex-col  gap-3 py-4 first:pt-0"
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3">

                         <Field>
                        <FieldLabel>Question {faq}</FieldLabel>
                        <Input
                          placeholder={`Enter faq ${faq} `}
                          className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                     
                     {...register('faq.question')}/>
                      </Field>
                      <Field>
                        <FieldLabel className="uppercase ">
                          
                          Answer{faq}
                        </FieldLabel>
                        <Textarea
                          placeholder={`Write your faq  ${faq}...`}
                          rows={3}
                          className="resize-none border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                       {...register('faq.answer')} />
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

export default Faq;
