import {
  flexRender,
  useTable,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type RowData,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { features, type DataTableFeatures } from "./data-table-feature";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[];
  data: TData[];
  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (page: number) => void;
  // setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

export function DataTable<TData extends RowData>({
  columns,
  data,
  search,
  setSearch,
  page,
  setPage,
  totalPage,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<ColumnVisibilityState>({});
  const table = useTable({
    features,
    data,
    columns,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });
  return (
    <div
      className="rounded-md border border-[#464554] shadow-2xl text-[#dae2fd]
     bg-[#171f33] overflow-hidden px-3"
    >
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="max-w-sm  border-b border-[#464554]"
        />
        {/* cloumns visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button className="ml-auto w-32 bg-[#c0c1ff] text-[#1000A9] hover:bg-0" />
            }
          >
            Columns
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[#171f33] text-[#dae2fd]  border border-[#464554]"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <Table className="overflow-hidden">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="   border-b border-[#464554]
                 hover:bg-[#222a3d]
                 hover:text-[#dae2fd]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-[#dae2fd]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="   border-b border-[#464554]
               hover:bg-[#222a3d] hover:text-[#dae2fd]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-[#dae2fd]">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end gap-2 p-3">
          <span className="text-sm">
            Page {page} of {totalPage}
          </span>

          <Button
            className=" bg-[#c0c1ff] text-white"
            size="sm"
            onClick={() => setPage(page - 1)}
            // onClick={() => setPage((prev: number) => Math.max(1, prev - 1))}
            disabled={page <= 1}
          >
            Previous
          </Button>
          <Button
            className=" bg-[#c0c1ff] text-white"
            size="sm"
            onClick={() => setPage(page + 1)}
            // onClick={() =>
            //   setPage((prev: number) => Math.min(prev + 1, totalPage))
            // }
            disabled={page >= totalPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
