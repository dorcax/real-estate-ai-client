
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSideBar";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden bg-[#0B1326] p-2 sm:p-4">
        {/* Dashboard Header */}
        <AppHeader />

        {/* Page Content */}
        <div className="my-6 min-h-0 min-w-0 flex-1 overflow-hidden ">
          <Outlet />
        </div>

        {/* Footer */}
        <footer className="shrink-0 border-t border-[#464554] px-10 text-center">
          <p className="text-sm text-[#DAE2FD]">
            © {new Date().getFullYear()} Estate Call Management Systems. All
            rights reserved.
          </p>
        </footer>
      </div>
    </SidebarProvider>
  );
}
