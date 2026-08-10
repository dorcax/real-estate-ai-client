import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSideBar";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-2 sm:p-4 flex flex-col overflow-y-auto bg-[#F8FAFC] w-full gap-2">
        <AppHeader />
      <main className="my-6">
          <Outlet />
      </main>
        <footer className="mt-auto py-6 px-10 border-t border-[#e7edf3] text-center">
          <p className="text-sm text-[#4c739a]">
            © {new Date().getFullYear()} 
             Estate Call Management Systems. All
            rights reserved.
          </p>
        </footer>
      </main>
    </SidebarProvider>
  );
}