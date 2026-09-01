import type { BillingHistory } from "@/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { features } from "../table/data-table-feature";
import { Checkbox } from "../ui/checkbox";

const columnHelper = createColumnHelper<typeof features, BillingHistory>();

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

  columnHelper.accessor("invoice", {
    header: "Invoice",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3">
          <p>{row.original.invoice}</p>
        </div>
      );
    },
  }),

  columnHelper.accessor("billingDate", {
    header: "Billing Date",
    cell: ({ row }) => (
      <div className="">
        <span className="font-medium text-xs">{row.original.billingDate}</span>
      </div>
    ),
  }),

  columnHelper.accessor("plan", {
    header: "Plan",
    cell: ({ row }) => (
      <div className="">
        <span className="flex gap-2 text-xs">{row.original.plan}</span>
      </div>
    ),
  }),

  columnHelper.accessor("amount", {
    header: "Amount",
    cell: ({ row }) => (
      <div className="">
        <span className="">
          {row.original.amount}
        </span>
      </div>
    ),
  }),

  columnHelper.accessor("paymentMethod", {
    header: "Payment Method",
    cell: ({ row }) => (
      <div className="flex flex-col text-xs">
        <span className="mb-2">{row.original.paymentMethod}</span>
      </div>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="mb-2">{row.original.status}</span>
      </div>
    ),
  }),

  columnHelper.display({
    id: "actions",

    header: "Action",

    cell: () => <Download className="size-5" />,
  }),
]);
