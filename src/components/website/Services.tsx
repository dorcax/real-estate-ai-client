
import { ChevronDown, ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { Field, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState<number[]>([1, 2, 3]);

  const toggleService = (service: number) => {
    setOpenServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="w-full rounded-2xl border border-[#464554] px-3">
      {/* Main Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-sm font-medium text-[#DAE2FD] transition hover:text-white"
      >
        <span>Services Section</span>

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
          <div className="flex flex-col divide-y divide-[#464554]">
            {[1, 2, 3].map((service) => {
              const serviceIsOpen = openServices.includes(service);

              return (
                <div
                  key={service}
                  className="flex flex-col gap-3 py-4 first:pt-0"
                >
                  {/* Individual Service Header */}
                  <button
                    type="button"
                    onClick={() => toggleService(service)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h4 className="text-sm font-semibold text-[#C0C1FF]">
                      Service {service}
                    </h4>

                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        serviceIsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Individual Service Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      serviceIsOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-3">
                        <Field>
                          <FieldLabel>Service name</FieldLabel>
                          <Input
                            placeholder={`Enter service ${service} name`}
                            className="border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Description</FieldLabel>
                          <Textarea
                            placeholder={`Write a description for service ${service}...`}
                            rows={3}
                            className="resize-none border-[#29354F] bg-[#101A30] text-[#DAE2FD] placeholder:text-[#64748B]"
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Upload service image</FieldLabel>

                          <label className="flex w-full max-w-[220px] cursor-pointer items-center gap-3 rounded-lg border border-dashed border-[#464554] bg-[#101A30] px-3 py-2 transition hover:border-[#818CF8]">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#171F33] text-[#C0C1FF]">
                              <ImagePlus size={16} />
                            </div>

                            <div className="flex flex-col">¬
                              <span className="text-xs font-medium text-[#DAE2FD]">
                                Upload image
                              </span>
                              <span className="text-[10px] text-[#8294B9]">
                                PNG, JPG or WEBP
                              </span>
                            </div>

                            <input
                              type="file"
                              accept="image/png,image/jpeg,image/webp"
                              className="hidden"
                            />
                          </label>
                        </Field>
                      </div>
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

export default Services;
