import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { usePopUpContext } from "@/context/PopUpContext";
import { createColumnHelper } from "@tanstack/react-table";
import DeleteProperty from "../Dialog/property/DeleteProperty";
import { features } from "../table/data-table-feature";
import { Checkbox } from "../ui/checkbox";
export type Property = {
  id: number;
  featured: boolean;
  title: string;
  location: string;
  price: string;
  status: "Available" | "Pending" | "Sold" | "Rented";
  type: "Townhouse" | "Condo" | "House" | "Apartment";
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
};

const columnHelper = createColumnHelper<typeof features, Property>();
 const {openDialog } =usePopUpContext()
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

  columnHelper.accessor("image", {
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt={row.original.title}
        className="w-24 rounded-md object-cover"
      />
    ),
  }),
  columnHelper.accessor("title", {
    header: "Title",
    cell: ({ row }) => (
      <div className="flex flex-col ">
        <span className="font-medium text-xs">{row.original.title}</span>

        <span className="text-xs text-muted-foreground">
          {row.original.location}
        </span>
      </div>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="mb-2">{row.original.price}</span>
        <span className="text-xs border bg-[#6366F1] text-white rounded-2xl w-20 text-center p-1">
          {row.original.status}
        </span>
      </div>
    ),
  }),

  columnHelper.display({
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      // const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>...</DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>

              <DropdownMenuItem className="text-xs" onClick={()=>openDialog(()=>(<DeleteProperty row={row.original}/>))} >View</DropdownMenuItem>

              <DropdownMenuItem className="text-xs" onClick={()=>openDialog(()=>(<DeleteProperty row={row.original}/>))}>Delete </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }),
]);
