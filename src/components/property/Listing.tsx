import { propertListing } from "@/constants/data";
import { columns } from "../property/data-column";
import { DataTable } from "../table/data-table";
import type { Property } from "../property/data-column";


export default function Listing() {

  const data: Property[] = propertListing;

  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
}