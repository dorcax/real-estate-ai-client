
import { Link } from "react-router-dom";
import {
  Check,
  Globe,
  Copy,
  Eye,
  SquarePen,
  Share2,
  Send,
  Save,
  Palette,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const websiteUrl = "https://prime.estatecall.ai";

const checklist = [
  { title: "General information", completed: true, url: "/dashboard/website/general" },
  { title: "Branding & identity", completed: true, url: "/dashboard/website/branding" },
  { title: "Homepage sections", completed: true, url: "/dashboard/website/homepage" },
  { title: "Contact information", completed: true, url: "/dashboard/website/contact" },
  { title: "Social media links", completed: false, url: "/dashboard/website/social" },
  { title: "Open Graph image (SEO)", completed: false, url: "/dashboard/website/seo" },
];

export default function WebsiteOverview() {
  const completedTasks = checklist.filter(
    (item) => item.completed
  ).length;

  const progress = 82;

  const copyWebsiteUrl = async () => {
    try {
      await navigator.clipboard.writeText(websiteUrl);
    } catch (error) {
      console.error("Unable to copy website URL", error);
    }
  };

  return (
    <div className="min-h-screen  text-[#dae2fd]">

      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-4">

        <div>
         

          <h1 className="text-[18px] font-semibold ">
            Website Overview
          </h1>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 rounded-full bg-[#E9F9EF] text-[#159947] px-3 py-1.5 text-[11px] font-medium">
            <span className="size-1.5 rounded-full bg-[#16A34A]" />
            Published
          </span>

          <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#E1E4EC] bg-white text-xs font-medium hover:bg-[#F8F9FC]">
            <Save size={14} />
            Save draft
          </button>

          <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#c0c1ff] text-[#1000A9] text-xs font-medium ">
            <Send size={13} />
            Publish
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="p-5 space-y-5">

        {/* WEBSITE OVERVIEW + PROGRESS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* WEBSITE INFORMATION */}
          <div className="lg:col-span-7 bg-[#171f33] border border-[#464554] rounded-xl p-4">

            <div className="flex justify-between items-center gap-3 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-[#E9F9EF] text-[#159947] px-2.5 py-1 text-[10px] font-medium">
                <span className="size-1.5 rounded-full bg-[#16A34A]" />
                Published
              </span>

              <span className="text-[10px] ">
                Last updated 9 Nov 2026, 14:30
              </span>
            </div>

            {/* WEBSITE URL */}
            <div className="flex items-center justify-between gap-2 bg-[#171f33] border border-[#464554] rounded-lg px-3 py-2.5 mb-3">

              <div className="flex items-center gap-2 ">
                <Globe size={14} className=" shrink-0" />

                <span className="text-xs font-medium  truncate">
                  {websiteUrl}
                </span>
              </div>

              <button
                onClick={copyWebsiteUrl}
                className="flex items-center gap-1.5 text-[10px] font-medium text-[#344054] bg-white border border-[#E2E5ED] rounded-md px-2.5 py-1.5 hover:bg-[#F8F9FC] shrink-0"
              >
                <Copy size={12} />
                Copy
              </button>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2">

              <a
                href={websiteUrl}
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
                Edit Website
              </Link>

              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-[#c0c1ff] text-[#1000A9] rounded-md px-3 py-2 text-[10px] font-medium"
              >
                <Share2 size={12} />
                Open live site
              </a>
            </div>
          </div>

          {/* SETUP PROGRESS */}
          <div className="lg:col-span-5 bg-[#171f33] border border-[#464554] rounded-xl p-4 flex items-center gap-4">

            <div className="relative size-[76px] shrink-0">

              <svg
                viewBox="0 0 100 100"
                className="size-full -rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#E9EAF4"
                  strokeWidth="8"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#c0c1ff"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[18px] font-bold ">
                  {progress}%
                </span>
                <span className="text-[8px] text-[#9299AC]">
                  complete
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-[#101828] mb-1">
                Setup progress
              </h3>

              <p className="text-[10px] leading-relaxed text-[#9299AC]">
                Two steps left before your site is fully configured.
              </p>
            </div>
          </div>
        </div>

        {/* SETUP CHECKLIST */}
        <div className="bg-[#171f33] border border-[#464554] rounded-xl overflow-hidden">

          <div className="px-4 py-3 border-b border-[#464554]">
            <h3 className="text-sm font-semibold ">
              Setup checklist
            </h3>

            <p className="text-[10px]  mt-0.5">
              Complete each step for a launch-ready website.
            </p>
          </div>

          <div>
            {checklist.map((item) => (
              <Link
                to={item.url}
                key={item.title}
                className="flex items-center justify-between gap-3 px-4 py-3 border-b last:border-b-0 border-[#464554] "
              >

                <div className="flex items-center gap-2.5 min-w-0">

                  {item.completed ? (
                    <span className="size-3.5 rounded-lg bg-[#16A34A] flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={3} className="text-white" />
                    </span>
                  ) : (
                    <span className="size-3.5 rounded-lg border border-[#D4D9E5] bg-[#F4F5FA] shrink-0" />
                  )}

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </div>

                {item.completed ? (
                  <span className="text-[10px] font-medium text-[#16A34A] shrink-0">
                    Done
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-[#5145E8] shrink-0">
                    Complete
                    <ChevronRight size={12} />
                  </span>
                )}

              </Link>
            ))}
          </div>
        </div>

        {/* QUICK ACCESS */}
        <div className="space-y-3">

          <h3 className="text-[10px] font-medium  uppercase">
            Quick access
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* BRANDING */}
            <Link
              to="/dashboard/website/branding"
              className="flex items-center gap-3 bg-[#171f33] border border-[#464554] rounded-xl p-3 hover:border-[#BDB7FF] hover:shadow-sm transition-all"
            >
              <div className="size-9 rounded-lg bg-[#F0EFFF] flex items-center justify-center shrink-0">
                <Palette size={17} className="text-[#5145E8]" />
              </div>

              <div className="min-w-0">
                <h4 className="text-[11px] font-semibold">
                  Branding & Identity
                </h4>

                <p className="text-[10px] underline">
                  Logo, colours, typography
                </p>
              </div>
            </Link>

            {/* HOMEPAGE */}
            <Link
              to="/dashboard/website/homepage"
              className="flex items-center gap-3 bg-[#171f33] border border-[#464554] rounded-xl p-3 hover:border-[#BDB7FF] hover:shadow-sm transition-all"
            >
              <div className="size-9 rounded-lg bg-[#F0EFFF] flex items-center justify-center shrink-0">
                <Layers size={17} className="text-[#5145E8]" />
              </div>

              <div className="min-w-0">
                <h4 className="text-[11px] font-semibold ">
                  Homepage Customization
                </h4>

                <p className="text-[10px] underline">
                  7 sections enabled
                </p>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
