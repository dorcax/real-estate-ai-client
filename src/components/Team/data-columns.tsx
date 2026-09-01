import type { TeamMember } from "@/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { features } from "../table/data-table-feature";
import { Checkbox } from "../ui/checkbox";

const columnHelper = createColumnHelper<typeof features, TeamMember>();

export const columns = columnHelper.columns([
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(checked) => table.toggleAllRowsSelected(!!checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  columnHelper.accessor("name", {
    header: "Team Member",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3">
            <img src={row.original.avatar} alt={row.original.name}  className="border w-9 h-9 rounded-full "/>
          <p>{row.original.name}</p>
        </div>
      );
    },
  }),

  columnHelper.accessor("role", {
    header: "Billing Date",
    cell: ({ row }) => (
      <div className="">
        <span className="font-medium text-xs">{row.original.role}</span>
      </div>
    ),
  }),

  columnHelper.accessor("assignedProperties", {
    header: "AssignedProperties",
    cell: ({ row }) => (
      <div className="">
        <span className="flex gap-2 text-xs">{row.original.assignedProperties}</span>
      </div>
    ),
  }),

  columnHelper.accessor("activeLeads", {
    header: "ActiveLeads",
    cell: ({ row }) => (
      <div className="">
        <span className="">
          {row.original.activeLeads}
        </span>
      </div>
    ),
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => (
      <div className="flex flex-col text-xs">
        <span className="mb-2">{row.original.status}</span>
      </div>
    ),
  }),
  columnHelper.accessor("lastActive", {
    header: "lastActive",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="mb-2">{row.original.lastActive}</span>
      </div>
    ),
  }),

 
]);
