import { createColumnHelper } from "@tanstack/react-table";
import { MapPin } from "lucide-react";
import PropertyActions from "../property/PropertyAction";
import { features } from "../table/data-table-feature";
import { Checkbox } from "../ui/checkbox";

export type Customer = {
  name: string;
  image: string;
  customerType: string;
  phone: string;
  email: string;
  location: string;
  activeLeads: number;
  lastInteraction: {
    date: string;
    activity: string;
  };
  assignedAgent: {
    name: string;
    initials: string;
  };
};

const columnHelper = createColumnHelper<typeof features, Customer>();
//  const {openDialog } =usePopUpContext()
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
    header: "Customer",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3">
          <img
            src={row.original.image}
            alt={row.original.name}
            className="w-12 h-12 rounded-full object-cover  transition-transform
      duration-300
      hover:scale-110"
          />
          {/* customer name  */}

          <div>
            <h2>{row.original.name}</h2>
            <p>{row.original.customerType}</p>
          </div>
        </div>
      );
    },
  }),
  //   columnHelper.accessor("phone", {
  //     header: "Contact",
  //     cell: ({ row }) => (
  //       <div className="flex flex-col ">
  //         <span className="font-medium text-xs">{row.original.phone}</span>

  //         <span className="text-xs">{row.original.email}</span>
  //       </div>
  //     ),
  //   }),

  columnHelper.accessor("location", {
    header: "Location",
    cell: ({ row }) => (
      <div className="">
        <span className="flex gap-2 text-xs">
          <MapPin />
          {row.original.location}
        </span>
        {/* <span className="text-xs  bg-[#c0c1ff] text-[#1000A9] rounded-2xl w-20 text-center p-1">
          {row.original.status}
        </span> */}
      </div>
    ),
  }),

  //   columnHelper.accessor("activeLeads", {
  //     header: "activeLeads",
  //     cell: ({ row }) => (
  //       <div className="">
  //         <span className="w-10 h-10 rounded-full border p-3 ">{row.original.activeLeads}</span>
  //         {/* <span className="text-xs  bg-[#c0c1ff] text-[#1000A9] rounded-2xl w-20 text-center p-1">
  //           {row.original.status}
  //         </span> */}
  //       </div>
  //     ),
  //   }),

  columnHelper.accessor("lastInteraction", {
    header: "lastInteraction",
    cell: ({ row }) => (
      <div className="flex flex-col text-xs">
        <span className="mb-2">{row.original.lastInteraction.date}</span>
        <span className="mb-2">{row.original.lastInteraction.activity}</span>
        {/* <span className="text-xs  bg-[#c0c1ff] text-[#1000A9] rounded-2xl w-20 text-center p-1">
          {row.original.status}
        </span> */}
      </div>
    ),
  }),
  columnHelper.accessor("assignedAgent", {
    header: "AssignedAgent",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="mb-2">{row.original.assignedAgent.initials}</span>
        <span className="mb-2">{row.original.assignedAgent.name}</span>
        {/* <span className="text-xs  bg-[#c0c1ff] text-[#1000A9] rounded-2xl w-20 text-center p-1">
          {row.original.status}
        </span> */}
      </div>
    ),
  }),

  columnHelper.display({
    id: "actions",

    header: "Action",

    cell: ({ row }) => <PropertyActions property={row.original} />,
  }),
]);
