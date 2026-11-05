
import React from "react";
import { MapPin, UserRound, Building2, MoreVertical } from "lucide-react";

const data = [
  {
    id: "apt-001",
    date: "2026-11-05",
    time: "09:00",
    propertyName: "Luxury 3 Bedroom Apartment",
    customerName: "Chika Okafor",
    propertyAddress: "Admiralty Way, Lekki Phase 1, Lagos",
    assignedAgent: "David Johnson",
    status: "Confirmed",
  },
  {
    id: "apt-002",
    date: "2026-11-05",
    time: "10:30",
    propertyName: "4 Bedroom Detached Duplex",
    customerName: "Adebayo Williams",
    propertyAddress: "Chevron Drive, Lekki, Lagos",
    assignedAgent: "Sarah Adeyemi",
    status: "Pending",
  },
  {
    id: "apt-003",
    date: "2026-11-06",
    time: "11:00",
    propertyName: "2 Bedroom Serviced Apartment",
    customerName: "Amaka Eze",
    propertyAddress: "Oniru Estate, Victoria Island, Lagos",
    assignedAgent: "Michael Obi",
    status: "Confirmed",
  },
  {
    id: "apt-004",
    date: "2026-11-06",
    time: "13:30",
    propertyName: "5 Bedroom Luxury Mansion",
    customerName: "Tunde Bakare",
    propertyAddress: "Banana Island, Ikoyi, Lagos",
    assignedAgent: "David Johnson",
    status: "Pending",
  },
  {
    id: "apt-005",
    date: "2026-11-07",
    time: "09:30",
    propertyName: "3 Bedroom Terrace Duplex",
    customerName: "Ngozi Nwosu",
    propertyAddress: "Osapa London, Lekki, Lagos",
    assignedAgent: "Sarah Adeyemi",
    status: "Confirmed",
  },
  {
    id: "apt-006",
    date: "2026-11-07",
    time: "14:00",
    propertyName: "Residential Land (650sqm)",
    customerName: "Emeka Okoro",
    propertyAddress: "Orchid Road, Lekki, Lagos",
    assignedAgent: "Michael Obi",
    status: "Cancelled",
  },
  {
    id: "apt-007",
    date: "2026-11-09",
    time: "10:00",
    propertyName: "4 Bedroom Semi-Detached Duplex",
    customerName: "Fatima Bello",
    propertyAddress: "Ikate Elegushi, Lekki, Lagos",
    assignedAgent: "David Johnson",
    status: "Confirmed",
  },
  {
    id: "apt-008",
    date: "2026-11-10",
    time: "12:00",
    propertyName: "2 Bedroom Apartment",
    customerName: "Ifeanyi Nnamdi",
    propertyAddress: "Yaba, Lagos",
    assignedAgent: "Sarah Adeyemi",
    status: "Pending",
  },
  {
    id: "apt-009",
    date: "2026-11-11",
    time: "15:30",
    propertyName: "5 Bedroom Detached Duplex",
    customerName: "Kemi Afolayan",
    propertyAddress: "Parkview Estate, Ikoyi, Lagos",
    assignedAgent: "Michael Obi",
    status: "Confirmed",
  },
];

const AppointmentList = () => {
  return (
    <main className="w-full">
      <header className="my-5 flex items-center justify-between">
       
          <h2 className="text-lg font-semibold text-[#dae2fd]">
            Appointment List
          </h2>
         
        

        <p className="text-sm text-[#8c98b5]">
          <span className="font-semibold text-[#dae2fd]">
            {data.length}
          </span>{" "}
          shown
        </p>
      </header>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-baseline gap-4 rounded-xl border border-[#464554] bg-[#171f33] p-4 transition hover:border-[#77769b]"
          >
            {/* Date and Time */}
            <div className="flex w-20 shrink-0 flex-col justify-center border-r border-[#464554] pr-4">
              <p className="text-lg font-semibold text-[#c0c1ff]">
                {item.time}
              </p>
              <p className="mt-1 text-xs text-[#8c98b5]">
                {new Date(`${item.date}T00:00:00`).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                  }
                )}
              </p>
            </div>

            {/* Appointment Details */}
            <div className="min-w-0 flex-1  space-y-3 pb-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-semibold text-[#dae2fd]">
                  {item.propertyName}
                </h3>

               
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#8c98b5]">
                <div className="flex items-center gap-2">
                  <UserRound size={15} />
                  <span>{item.customerName}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={15} />
                  <span>{item.propertyAddress}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Building2 size={15} />
                  <span>Agent: {item.assignedAgent}</span>
                </div>
              </div>
            </div>

            {/* appointment status*/}
            <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === "Confirmed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : item.status === "Pending"
                      ? "bg-amber-500/10 text-amber-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {item.status}
                </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AppointmentList;
