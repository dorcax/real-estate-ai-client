import CustomInfoDrawer from "@/common/CustomInfoDrawer";
import type { Customer } from "@/components/customer/data.colums";
import { Button } from "@/components/ui/button";
import { usePopUpContext } from "@/context/PopUpContext";
import {
  Calendar,
  Clock,
  Edit,
  Mail,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Phone,
  Tag,
  User,
  UserCheck,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { OverviewTab } from "./OverviewTab";
import { EnquiriesTab } from "./EnquriesTab";
import { AppointmentsTab } from "./AppointmentTab";
import { ActivityTab } from "./ActivityTab";

export type CustomerDrawerProps = {
  customer: Customer;
};

const TABS = ["Overview", "Enquiries", "Appointments", "Activity"] as const;
type Tab = (typeof TABS)[number];

const customerTypeStyle: Record<string, { color: string; dot: string }> = {
  "High-Net-Worth": {
    color: "text-purple-400 bg-purple-400/10 border border-purple-400/20",
    dot: "bg-purple-400",
  },
  "Corporate Client": {
    color: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
    dot: "bg-blue-400",
  },
  Investor: {
    color: "text-amber-400 bg-amber-400/10 border border-amber-400/20",
    dot: "bg-amber-400",
  },
  "First-time Buyer": {
    color: "text-green-400 bg-green-400/10 border border-green-400/20",
    dot: "bg-green-400",
  },
  Commercial: {
    color: "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20",
    dot: "bg-cyan-400",
  },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const CustomerDrawer = ({ customer }: CustomerDrawerProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [imgError, setImgError] = useState(false);
  const { closeDrawer } = usePopUpContext();

  const typeStyle = customerTypeStyle[customer.customerType] ?? {
    color: "text-[#c0c1ff] bg-[#c0c1ff]/10 border border-[#c0c1ff]/20",
    dot: "bg-[#c0c1ff]",
  };
  const initials = getInitials(customer.name);

  return (
    <CustomInfoDrawer className="[--drawer-content-width:clamp(360px,560px,95vw)] sm:max-w-none">
      <div className="px-5 pt-4 pb-3 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-[#dae2fd]/30">
            Customer Profile
          </span>

          <Button
            size="icon"
            className="h-7 w-7 bg-[#252e46] border border-[#464554] text-[#dae2fd] hover:bg-[#2e3a55]"
            onClick={closeDrawer}
          >
            <X className="size-3.5" />
          </Button>
        </div>

        {/* Profile identity */}
        <div className="flex items-start gap-4">
          {/* profile picture */}
          <div className="relative shrink-0">
            {!imgError && customer.image ? (
              <img
                src={customer.image}
                alt={customer.name}
                onError={() => setImgError(true)}
                className="w-15 h-15 rounded-full object-cover ring-2 ring-[#c0c1ff]/25"
              />
            ) : (
              <div className="w-15 h-15 rounded-full bg-linear-to-br from-[#c0c1ff]/20 to-[#464554] flex items-center justify-center text-[#c0c1ff] font-semibold text-base ring-2 ring-[#c0c1ff]/25">
                {initials}
              </div>
            )}
            {/* Online dot */}
            <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#222a3d]" />
          </div>

          {/* Identity */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h2 className="text-sm font-semibold text-[#dae2fd]">
                {customer.name}
              </h2>
              <span
                className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${typeStyle.color}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${typeStyle.dot}`}
                />
                {customer.customerType}
              </span>
            </div>
            <div className="space-y-0.5 text-[11px] text-[#dae2fd]/50">
              <div className="flex items-center gap-1.5">
                <Mail className="size-3 text-[#c0c1ff]/50 shrink-0" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="size-3 text-[#c0c1ff]/50 shrink-0" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3 text-[#c0c1ff]/50 shrink-0" />
                <span>{customer.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#464554]/40 mx-5 shrink-0" />

      {/*Tabs */}
      <div className="flex px-5 border-b border-[#464554]/40 shrink-0">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2.5 text-xs font-medium transition-colors relative cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? "text-[#c0c1ff]"
                : "text-[#dae2fd]/35 hover:text-[#dae2fd]/60"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c0c1ff] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/*Tab Content */}
      <div
        className="flex-1 overflow-y-auto overflow [&::-webkit-scrollbar]:hidden  px-5 py-4 space-y-4"
      >
        {activeTab === "Overview" && <OverviewTab customer={customer} />}
        {activeTab === "Enquiries" && <EnquiriesTab />}
        {activeTab === "Appointments" && <AppointmentsTab />}
        {activeTab === "Activity" && <ActivityTab customer={customer} />}
      </div>
    </CustomInfoDrawer>
  );
};

export default CustomerDrawer;
