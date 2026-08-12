import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePopUpContext } from "@/context/PopUpContext";
import { ChevronRight, Search, Plus, Bell } from "lucide-react";

import { useLocation } from "react-router-dom";
import CreateProperty from "../Dialog/property/CreateProperty";

const AppHeader = () => {
  const { pathname } = useLocation();
  const { openDialog } = usePopUpContext();

  console.log("Pathname", pathname);

  const getBreadcrumb = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    return pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return (
        <div className="flex items-center gap-2">
          <span
            key={url}
            className="text-xs  text-[#dae2fd] font-medium capitalize"
          >
            {segment}
          </span>
          {index < pathSegments.length - 1 && <ChevronRight size={16} />}
        </div>
      );
    });
  };

  return (
    <header className="h-10 py-2 border-b border-b-[#464554] flex items-center justify-between  text-[#dae2fd]">
      <div className="flex items-center gap-2 sm:gap-4">
        <SidebarTrigger className=" cursor-pointer " />
        <div className="hidden sm:flex items-center gap-2 text-sm  ">
          {getBreadcrumb()}
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative w-32 md:w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-[#464554] text-[#dae2fd] border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative p-2  hover:bg-slate-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
          <button
            className="bg-[#c0c1ff] text-[#1000A9] p-2 sm:px-4 sm:py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-[#222a3d]  hover:text-[#dae2fd] transition-all"
            onClick={() => openDialog(() => <CreateProperty />)}
          >
            <Plus size={16} />

            <span className="hidden sm:inline">Create New Property</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
