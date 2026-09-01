import type { Customer } from "@/components/customer/data.colums";
import { columns } from "@/components/customer/data.colums";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { customers } from "@/constants/data";
import { Calendar, Download, Phone, UserSearch } from "lucide-react";

export const customerCard = [
  {
    title: "active lead",
    value: 342,
    icon: UserSearch,
    changeValueText: "12%",
  },
  {
    title: "total call (This week)",
    value: 1204,
    icon: Phone,
    changeValueText: "8%",
  },
  {
    title: "upcoming appointments",
    value: 86,
    icon: Calendar,
    changeValueText: "3%",
  },
];
const Customer = () => {
      const data: Customer[] = customers;
  return (
    <main className="text-[#dae2fd] space-y-5">
      <header className="flex justify-between items-center ">
        <div>
          <h1 className="text-xl font-semibold">Customers</h1>
          <p className="text-sm">
            manage your client base and view recent interaction
          </p>
        </div>
        <Button className="px-5 bg-[#c0c1ff] text-[#1000A9]">
          <Download /> <span>Export </span>{" "}
        </Button>
      </header>

      <section className="grid grid-cols-3 gap-4">
        {customerCard.map((c) => {
          const Icon = c.icon;
          return (
            <div className=" flex justify-between border bg-[#171f33]
        border-[#464554] p-3 rounded-lg">
              <div className="mb-1">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-[#252e46]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="text-sm mb-1 capitalize">{c.title}</h2>
                <p>{c.value}</p>
              </div>
              <span>{c.changeValueText}</span>
            </div>
          );
        })}
      </section>
      {/* table section  */}
      <section>
          <DataTable
              columns={columns}
              data={data}
            />
      </section>
    </main>
  );
};

export default Customer;
