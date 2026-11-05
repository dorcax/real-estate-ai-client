import { Clock, Mail, MapPin, MessageSquare, Phone, Tag, User, UserCheck } from "lucide-react";
import { InfoField } from "./CommonInfo";
import type { Customer } from "@/components/customer/data.colums";

export function OverviewTab({ customer }: { customer: Customer }) {
  const statCards = [
    {
      label: "Active Leads",
      value: String(customer.activeLeads),
      icon: UserCheck,
      accent: "text-[#c0c1ff]",
      bg: "bg-[#c0c1ff]/10",
    },
    {
      label: "Last Activity",
      value: customer.lastInteraction.date,
      icon: Clock,
      accent: "text-amber-400",
      bg: "bg-amber-400/10",
      small: true,
    },
    {
      label: "Activity Type",
      value: customer.lastInteraction.activity,
      icon: MessageSquare,
      accent: "text-green-400",
      bg: "bg-green-400/10",
      small: true,
    },
  ];

  const infoRows: Array<{
    label: string;
    value: string;
    icon: React.ElementType;
    span?: boolean;
  }> = [
    { label: "Full Name", value: customer.name, icon: User },
    { label: "Customer Type", value: customer.customerType, icon: Tag },
    { label: "Email", value: customer.email, icon: Mail },
    { label: "Phone", value: customer.phone, icon: Phone },
    { label: "Location", value: customer.location, icon: MapPin },
    {
      label: "Assigned Agent",
      value: customer.assignedAgent.name,
      icon: UserCheck,
    },
    {
      label: "Last Interaction",
      value: `${customer.lastInteraction.date} — ${customer.lastInteraction.activity}`,
      icon: Clock,
      span: true,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="bg-[#171f33] border border-[#464554] rounded-xl p-3 flex flex-col gap-2"
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.bg} ${s.accent}`}
              >
                <Icon className="size-3.5" />
              </div>
              <p
                className={`font-semibold text-[#dae2fd] leading-tight ${
                  s.small ? "text-xs" : "text-xl"
                }`}
              >
                {s.value}
              </p>
              <p className="text-[10px] text-[#dae2fd]/30 uppercase tracking-wide font-medium leading-tight">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Customer info */}
      <div className="bg-[#171f33] border border-[#464554] rounded-xl p-4">
        <p className="text-[10px] uppercase tracking-widest font-semibold text-[#dae2fd]/30 mb-3">
          Customer Information
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
          {infoRows.map((row) => (
            <div
              key={row.label}
              className={row.span ? "col-span-2" : "col-span-1"}
            >
              <InfoField
                label={row.label}
                value={row.value}
                Icon={row.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Missing fields — pending backend */}
      <div className="bg-[#171f33] border border-dashed border-[#464554]/50 rounded-xl p-4">
        <p className="text-[10px] uppercase tracking-widest font-semibold text-[#dae2fd]/25 mb-2.5">
          Fields pending backend wiring
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {[
            "address",
            "registrationDate",
            "customerNotes",
            "totalEnquiries",
            "totalAppointments",
            "propertiesInterested",
          ].map((f) => (
            <div
              key={f}
              className="flex items-center gap-1.5 text-[11px] text-[#dae2fd]/25"
            >
              <span className="w-1 h-1 rounded-full bg-[#464554] shrink-0" />
              <code className="font-mono">{f}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}