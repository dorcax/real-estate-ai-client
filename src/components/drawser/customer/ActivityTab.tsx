import type { Customer } from "@/components/customer/data.colums";
import { Clock, MessageSquare, User, UserCheck } from "lucide-react";

export function ActivityTab({ customer }: { customer: Customer }) {
  const events: Array<{
    label: string;
    sub: string;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
  }> = [
    {
      label: customer.lastInteraction.activity,
      sub: customer.lastInteraction.date,
      icon: MessageSquare,
      iconBg: "bg-[#c0c1ff]/15",
      iconColor: "text-[#c0c1ff]",
    },
    {
      label: `Assigned to ${customer.assignedAgent.name}`,
      sub: "Agent assignment",
      icon: UserCheck,
      iconBg: "bg-green-400/10",
      iconColor: "text-green-400",
    },
    {
      label: `Customer record created`,
      sub: "Registration",
      icon: User,
      iconBg: "bg-blue-400/10",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-widest text-[#dae2fd]/25 font-semibold mb-4">
        Known Activity
      </p>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-3 bottom-3 w-px bg-[#464554]/60" />

        <div className="space-y-3 pl-10">
          {events.map((ev, i) => {
            const Icon = ev.icon;
            return (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-6.75 w-7 h-7 rounded-full flex items-center justify-center ${ev.iconBg} ${ev.iconColor}`}
                >
                  <Icon className="size-3.5" />
                </div>
                <div className="bg-[#171f33] border border-[#464554] rounded-xl p-3">
                  <p className="text-xs font-medium text-[#dae2fd]/80">
                    {ev.label}
                  </p>
                  <p className="text-[10px] text-[#dae2fd]/30 mt-0.5">
                    {ev.sub}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Placeholder tail */}
          <div className="relative">
            <div className="absolute -left-6.75 w-7 h-7 rounded-full bg-[#252e46] border border-[#464554] flex items-center justify-center text-[#dae2fd]/20">
              <Clock className="size-3" />
            </div>
            <div className="bg-[#171f33] border border-dashed border-[#464554]/50 rounded-xl p-3">
              <p className="text-xs text-[#dae2fd]/25">
                Full activity timeline available after backend integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}