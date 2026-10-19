import { useEffect, useState } from "react";
import { useGetPropertiesQuery } from "@/api/property.api";
import type { Property } from "../property/data-column";
import { columns } from "../property/data-column";
import { DataTable } from "../table/data-table";
import Loader from "@/common/Loader";

export default function Listing() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const[page,setPage] =useState(1)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(()=>{
    setPage(1)
  },[debouncedSearch])

  const { data: properties, isLoading } = useGetPropertiesQuery({
    search: debouncedSearch || undefined,
  });

  const data: Property[] = properties?.data ?? []; 
  const totalPage =properties?.paginaton?.totalPage ?? 1

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      search={search}
      setSearch={setSearch}
      page={page}
      setPage={setPage}
      totalPage={totalPage}
  

    />
  );
}