

import { ArrowRight, BadgeCheck } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const funnelData = [
  {
    label: "New Leads",
    percentage: "100%",
    value: "1,248",
    width: "100%",
    color: "#8ba9e5",
  },
  {
    label: "Qualified",
    percentage: "85%",
    value: "1,060",
    width: "85%",
    color: "#5d8fe7",
  },
  {
    label: "Contacted",
    percentage: "60%",
    value: "748",
    width: "60%",
    color: "#2f6ed7",
  },
  {
    label: "Negotiating",
    percentage: "35%",
    value: "436",
    width: "35%",
    color: "#0759ce",
  },
  {
    label: "Closed",
    percentage: "15%",
    value: "187",
    width: "15%",
    color: "#7c3aed",
  },
];

const agents = [
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    assigned: 142,
    appointments: 38,
    closed: 12,
    conversion: "8.4%",
    avatarColor: "bg-[#dce8ff]",
    avatarText: "text-[#5576a8]",
  },
  {
    initials: "MR",
    name: "Michael Ross",
    assigned: 115,
    appointments: 24,
    closed: 8,
    conversion: "6.9%",
    avatarColor: "bg-[#7c3aed]",
    avatarText: "text-white",
  },
  {
    initials: "DP",
    name: "David Palmer",
    assigned: 98,
    appointments: 41,
    closed: 15,
    conversion: "15.3%",
    avatarColor: "bg-[#3478eb]",
    avatarText: "text-white",
  },
  {
    initials: "EW",
    name: "Emily Wong",
    assigned: 85,
    appointments: 19,
    closed: 4,
    conversion: "4.7%",
    avatarColor: "bg-[#e9eef8]",
    avatarText: "text-[#6d7790]",
  },
];

export function LeadAnalytics() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[225px_1fr]">
      {/* Lead Funnel */}
      <Card className="text-[#dae2fd]
     bg-[#171f33] border border-[#464554]">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-bold uppercase tracking-wide">
            Lead Funnel
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 px-4 pb-4">
          {funnelData.map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col items-center"
            >
              <div
                className="mb-1 flex justify-between text-[10px] font-medium "
                style={{ width: item.width }}
              >
                <span>{item.label}</span>

                <span>
                  {item.percentage} ({item.value})
                </span>
              </div>

              <div
                className="h-[23px] rounded-[4px]"
                style={{
                  width: item.width,
                  backgroundColor: item.color,
                }}
              >
                {index === funnelData.length - 1 && (
                  <div className="flex h-full items-center justify-center">
                    <BadgeCheck className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Agent Performance */}
      <Card className="overflow-hidden text-[#dae2fd]
     bg-[#171f33] border border-[#464554]">
        <CardHeader className="flex flex-row items-center justify-between border-b border-[#e8eaf1] px-5 py-4">
          <CardTitle className="text-xs font-bold uppercase ">
            Agent Performance
          </CardTitle>

          <button className="flex items-center gap-1 text-[11px] font-medium  transition hover:opacity-80">
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-162.5">
              <thead className=" ">
                <tr className="border-b border-[#464554] text-[#dae2fd]">
                  <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide ">
                    Agent Name
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase leading-tight tracking-wide">
                    Assigned
                    <br />
                    Leads
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-wide ">
                    Appointments
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase leading-tight tracking-wide ">
                    Closed
                    <br />
                    Deals
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-wide ">
                    Conversion
                  </th>
                </tr>
              </thead>

              <tbody>
                {agents.map((agent) => (
                  <tr
                    key={agent.name}
                    className="border-b border-[#464554] last:border-b-0"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${agent.avatarColor} ${agent.avatarText}`}
                        >
                          {agent.initials}
                        </div>

                        <span className="max-w-22.5 text-[11px] font-medium leading-tight">
                          {agent.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-[11px] ">
                      {agent.assigned}
                    </td>

                    <td className="px-4 py-3 text-[11px] ">
                      {agent.appointments}
                    </td>

                    <td className="px-4 py-3 text-[11px] ">
                      {agent.closed}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                          agent.conversion === "4.7%"
                            ? "bg-[#eff0f4] text-[#737789]"
                            : "bg-[#dff9ef] text-[#23b782]"
                        }`}
                      >
                        {agent.conversion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}