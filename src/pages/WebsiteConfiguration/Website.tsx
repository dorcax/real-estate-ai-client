import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import About from "@/components/website/About";
import Branding from "@/components/website/Branding";
import ContactInfo from "@/components/website/Contact";
import Faq from "@/components/website/Faq";
import Footer from "@/components/website/Footer";
import Hero from "@/components/website/Hero";
import Partners from "@/components/website/Patners";
import Services from "@/components/website/Services";
import Team from "@/components/website/Team";
import Testimonial from "@/components/website/Testimonial";
import WebsitePreview from "@/components/website/WebsitePreview";

import { Eye, Link, Share2, SquarePen } from "lucide-react";

import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";

const Website = () => {

  const methods= useForm({
    defaultValues: {
      primaryColor: "#C0C1FF",
      secondaryColor: "#020617",
      font: "Poppins",
      siteUrl: "",
      branding: {
        brandingTitle: "Zora Properties",
        description: "",
        logo: "",
      },
      hero: {
        badgeTitle: "",
        heading: "Find Your Dream Property",
        subTitle: "",
        description: "",
        buttonText: "Explore Properties",
        // image: "",
      },
      about: {
        heading: "",
        description: "",
      },
      services: [
        { name: "", description: "", image: "" },
        { name: "", description: "", image: "" },
        { name: "", description: "", image: "" },
      ],
      team: [
        { name: "", role: "" },
        { name: "", role: "" },
        { name: "", role: "" },
        { name: "", role: "" },
      ],
      testimonial: [
        { quote: "", author: "" },
        { quote: "", author: "" },
        { quote: "", author: "" },
        { quote: "", author: "" },
      ],
      partners: {
        trustedBy:'',
        partners: "",
      },
      faq: [
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
      ],
      contact:{
        heading:'',
        phone:'',
        email:'',
        address:''

      },
      footer:{
        text:''
      }
    },
  });
    // const { register ,control} = useFormContext();
    const { register, control, handleSubmit } = methods;
  return (
   <FormProvider {...methods}>
     <section className="flex flex-col overflow-hidden h-screen text-[#DAE2FD]">
      <header className="flex justify-between items-center border-b pb-3 border-b-[#464554] ">
        <div className="flex gap-4 items-center">
          <h1 className="text-xl capitalize font-semibold">website builder </h1>
          <p className="text-xs border px-4 py-1.5 rounded-2xl ">
            design free .1 USDC/mo to publish
          </p>
        </div>
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            // href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-[#c0c1ff] text-[#1000A9] rounded-md px-3 py-2 text-[10px] font-medium"
          >
            <Eye size={12} />
            Preview Website
          </a>

          <Link
            to="/dashboard/website/general"
            className="flex items-center gap-1.5 bg-[#c0c1ff] text-[#1000A9] rounded-md px-3 py-2 text-[10px] font-medium"
          >
            <SquarePen size={12} />
            save
          </Link>

          <a
            // href={websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-[#c0c1ff] text-[#1000A9] rounded-md px-3 py-2 text-[10px] font-medium"
          >
            <Share2 size={12} />
            publish
          </a>
        </div>
      </header>
      <main className="flex w-full min-h-0 flex-1 overflow-hidden ">
        {/* LEFT SIDEBAR */}
        <aside className="h-full w-[350px] shrink-0 border-r border-[#464554] p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden ">
          <form className="space-y-4">
            <FieldGroup>
              <div className="border-b border-b-[#464554] pb-3">
                <div className="flex justify-between items-center gap-2">
                  <Field>
                    <FieldLabel htmlFor="primaryColor">
                      Primary color
                    </FieldLabel>
                    <Input
                      id="primaryColor"
                      placeholder="#C0C1FF"
                      className="border-[#29354F] text-[#DAE2FD] placeholder:text-[#64748B]"
                      {...register('primaryColor')}
                    />
                  </Field>
                  <Field className="mb-4">
                    <FieldLabel htmlFor="secondaryColor">
                      Secondary color
                    </FieldLabel>
                    <Input
                      id="secondaryColor"
                      placeholder="#020617"
                      className="border-[#29354F]  text-[#DAE2FD] placeholder:text-[#64748B]"
                       {...register('secondaryColor')}
                    />
                  </Field>
                </div>
                {/* font  */}
                <Field className="mb-4">
                  <FieldLabel className="text-[#dae2fd]">font</FieldLabel>

                  <Controller
                    name="font"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          className="
                  
                  border-[#464554] 
                  text-[#dae2fd] 
                  placeholder:text-[#c7c4d7] 
                  focus-visible:border-[#c0c1ff] 
                  focus-visible:ring-[#c0c1ff]/20 
                "
                        >
                          <SelectValue placeholder="Purpose" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem>Poppins</SelectItem>
                          <SelectItem>Sora</SelectItem>
                          <SelectItem>Inter</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
                {/* site url  */}
                <Field>
                  <FieldLabel htmlFor="siteurl">Site url</FieldLabel>
                  <Input
                    id="siteurl"
                    placeholder="site url"
                    className="border-[#29354F] text-[#DAE2FD] placeholder:text-[#64748B]"
                   {...register('siteUrl')}
                  />
                </Field>
              </div>
              {/* content  */}
              <div className="space-y-4">
                <h2>content </h2>
                {/* branding  */}
                <Branding />
                <Hero />
                <About />
                <Services />
                <Team />
                <Testimonial />
                <Partners />
                <Faq />
                <ContactInfo />
                <Footer />
              </div>
            </FieldGroup>
          </form>
        </aside>

        {/* WEBSITE PREVIEW */}
        <div className="h-full min-w-0 flex-1 overflow-y-auto p-4">
          <WebsitePreview/>
        </div>
      </main>
    </section>
   </FormProvider>
  );
};

export default Website;
