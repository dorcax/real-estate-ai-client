
import CustomInfoDrawer from "@/common/CustomInfoDrawer";
import {
    CalendarDays,
    Clock,
    FileText,
    House,
    MapPin,
    SquarePen,
    Tag,
    Trash2,
    UserRound,
    X,
} from "lucide-react";
import { Button } from "../ui/button";
import { usePopUpContext } from "@/context/PopUpContext";
import DeleteAppointment from "../Dialog/schedule/DeleteSchedule";

interface AppointmentData {
  id: string;
  date: string;
  time: string;
  propertyName: string;
  customerName: string;
  propertyAddress: string;
  assignedAgent: string;
  status: "Confirmed" | "Pending" | "Cancelled" | "Completed";
  title?: string;
  duration?: string;
  notes?: string;
}

interface AppointmentViewProps {
  data: AppointmentData;
  onClose?: () => void;
  onDelete?: (id: string) => void;
  onEdit?: (data: AppointmentData) => void;
}

const AppointmentView = ({
  data,
  onClose,
  onDelete,
  onEdit,
}: AppointmentViewProps) => {

    const{openDialog} =usePopUpContext()

  const formattedDate = new Date(
    `${data.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const statusStyles = {
    Confirmed: "bg-emerald-500/10 text-emerald-400",
    Pending: "bg-amber-500/10 text-amber-400",
    Cancelled: "bg-red-500/10 text-red-400",
    Completed: "bg-blue-500/10 text-blue-400",
  };

  const appointmentDetails = [
    {
      label: "Appointment",
      value: data.title || "Property Viewing",
      icon: FileText,
    },
    {
      label: "Date & Time",
      value: `${formattedDate} · ${data.time} (${data.duration || "30 min"})`,
      icon: CalendarDays,
    },
    {
      label: "Customer",
      value: data.customerName,
      icon: UserRound,
    },
    {
      label: "Property",
      value: data.propertyName,
      icon: House,
    },
    {
      label: "Assigned Agent",
      value: data.assignedAgent,
      icon: Tag,
    },
    {
      label: "Location",
      value: data.propertyAddress,
      icon: MapPin,
    },
    {
      label: "Duration",
      value: data.duration || "30 min",
      icon: Clock,
    },
  ];

  return (
    <CustomInfoDrawer className="w-full max-w-[450px] h-dvh p-0 bg-[#171f33] text-[#dae2fd] overflow-hidden">

      <div className="flex h-full min-h-0 flex-col">

        {/* Header */}
        <header className="flex shrink-0 items-center justify-between border-b border-[#464554] px-6 py-7">

          <div>
            <h1 className="text-xl font-bold">
              {data.title || "Property Viewing"}
            </h1>

            <p className="mt-1 text-sm text-[#929bb9]">
              Appointment #{data.id}
            </p>
          </div>

          <Button
            type="button"
            onClick={onClose}
            className="h-12 w-12 border border-[#464554] bg-[#202a43] p-0 text-[#929bb9] hover:bg-[#29334d] hover:text-white"
          >
            <X size={21} />
          </Button>

        </header>

        {/* Scrollable Content */}
        <main className="min-h-0 flex-1 overflow-y-auto px-6 py-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#464554]">

          {/* Status */}
          <div className="mb-7">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                statusStyles[data.status]
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {data.status}
            </span>
          </div>

          {/* Appointment Details */}
          <div className="w-full">

            {appointmentDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-start gap-5 py-4 ${
                    index !== appointmentDetails.length - 1
                      ? "border-b border-[#343d53]"
                      : ""
                  }`}
                >

                  {/* Icon */}
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#202a43] text-[#c0c1ff]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1 pt-1">

                    <p className="mb-1 text-xs uppercase tracking-wide text-[#929bb9]">
                      {item.label}
                    </p>

                    <p className="break-words text-sm font-semibold text-[#dae2fd]">
                      {item.value}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Notes */}
          {data.notes && (
            <div className="mt-6 border-t border-[#343d53] pt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase text-[#929bb9]">
                Notes
              </h3>

              <p className="text-sm leading-6 text-[#dae2fd]">
                {data.notes}
              </p>
            </div>
          )}

        </main>

        {/* Fixed Footer */}
        <footer className="flex shrink-0 items-center justify-end gap-4 border-t border-[#464554] bg-[#171f33] px-6 py-6">

          <Button
            type="button"
            onClick={() => openDialog(()=><DeleteAppointment  data={item}/>)}
            className="h-10 gap-3 border border-[#a43d4b] bg-[#492735]/50 px-6 text-base font-semibold text-[#ff6969] hover:bg-[#492735]"
          >
            <Trash2 size={21} />
            Delete
          </Button>

          <Button
            type="button"
            onClick={() => onEdit?.(data)}
            className="h-10 gap-3 bg-[#c0c1ff] px-7 text-base font-semibold text-[#1000A9] hover:bg-[#a8a9f5]"
          >
            <SquarePen size={21} />
            Edit
          </Button>

        </footer>

      </div>
    </CustomInfoDrawer>
  );
};

export default AppointmentView;
