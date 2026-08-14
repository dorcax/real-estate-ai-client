import { createColumnHelper } from "@tanstack/react-table";
import { features } from "../table/data-table-feature";
import { Checkbox } from "../ui/checkbox";
import PropertyActions from "./PropertyAction";

export type PropertyImage = {
  id: number;
  url: string;
  order: number;
};

export type Property = {
  id: number;
  featured: boolean;
  status: "Available" | "Pending" | "Sold" | "Rented";
  description: string;
  title: string;
  location: string;
  price: string;
  amenities: string[];
  yearBuilt: number;

  billingPeriod: string | null;

  bedrooms: number;
  bathrooms: number;
  toilets: number;
  type: "APARTMENT" | "HOUSE" | "LAND" | "OFFICE" | "SHOP";
  parkingSpace: number;
  landSize: number;

  images: PropertyImage[];
};

const columnHelper = createColumnHelper<typeof features, Property>();
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

  columnHelper.accessor("images", {
    header: "Image",
    cell: ({ row }) => {
      const mainImage = row.original.images.find((image) => image.order === 1);

      return (
        <img
          src={mainImage?.url}
          alt={row.original.title}
          className="w-24 rounded-md object-cover  transition-transform
      duration-300
      hover:scale-110"
        />
      );
    },
  }),
  columnHelper.accessor("title", {
    header: "Title",
    cell: ({ row }) => (
      <div className="flex flex-col ">
        <span className="font-medium text-xs">{row.original.title}</span>

        <span className="text-xs">{row.original.location}</span>
      </div>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="mb-2">{row.original.price}</span>
        <span className="text-xs  bg-[#c0c1ff] text-[#1000A9] rounded-2xl w-20 text-center p-1">
          {row.original.status}
        </span>
      </div>
    ),
  }),

  // columnHelper.display({
  //   id: "actions",
  //   header: "Action",
  //   cell: ({ row }) => {
  //     // const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger>...</DropdownMenuTrigger>

  //         <DropdownMenuContent>
  //           <DropdownMenuGroup>
  //             <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>

  //             <DropdownMenuItem className="text-xs" >View</DropdownMenuItem>

  //             <DropdownMenuItem className="text-xs" >Delete </DropdownMenuItem>
  //           </DropdownMenuGroup>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // }),

  columnHelper.display({
    id: "actions",

    header: "Action",

    cell: ({ row }) => <PropertyActions property={row.original} />,
  }),
]);
