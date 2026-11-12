
import { useFormContext, useWatch } from "react-hook-form";

const WebsitePreview = () => {
  const { control } = useFormContext();

  const values = useWatch({ control });

  const branding = values.branding;
  const hero = values.hero;
  const about = values.about;
  const services = values.services;

  return (
    <div
      className="mx-auto min-h-full max-w-[1100px] overflow-hidden rounded-xl bg-white text-slate-900 shadow-xl"
      style={{
        fontFamily: branding?.font || "Poppins",
      }}
    >
      {/* Website Navbar */}
      <nav className="flex items-center justify-between border-b px-8 py-5">
        <div className="flex items-center gap-3">
          {branding?.logo && (
            <img
              src={branding.logo}
              alt="Company logo"
              className="h-10 w-10 object-contain"
            />
          )}

          <h2 className="font-bold">
            {branding?.siteTitle || "Your Company"}
          </h2>
        </div>

        <div className="flex gap-5 text-sm">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="px-8 py-24 text-center"
        style={{
          backgroundColor:
            branding?.secondaryColor || "#020617",
          color: "#ffffff",
        }}
      >
        <h1 className="mx-auto max-w-2xl text-4xl font-bold">
          {hero?.heading || "Your Hero Heading"}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          {hero?.description || "Your hero description appears here."}
        </p>

        <button
          className="mt-7 rounded-lg px-6 py-3 font-semibold"
          style={{
            backgroundColor:
              branding?.primaryColor || "#C0C1FF",
            color: "#020617",
          }}
        >
          {hero?.buttonText || "Explore Properties"}
        </button>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold">
          {about?.heading || "Who We Are"}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          {about?.description || "Your about description appears here."}
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 px-8 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Our Services
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {services?.map((service: any, index: number) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-40 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="font-semibold">
                  {service.name || `Service ${index + 1}`}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {service.description || "Service description"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebsitePreview;
