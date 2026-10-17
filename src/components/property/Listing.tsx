import { useGetPropertiesQuery } from "@/api/property.api";
import type { Property } from "../property/data-column";
import { columns } from "../property/data-column";
import { DataTable } from "../table/data-table";
import Loader from "@/common/Loader";

export default function Listing() {
  const { data: properties, isLoading } = useGetPropertiesQuery({});
  console.log('properties listing ',properties)

  const data: Property[] = properties?.data ?? [];

    if (isLoading) {
    return <Loader/>
  }

  return <DataTable columns={columns} data={data} />;
}
