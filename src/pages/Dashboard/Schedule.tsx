import { AppointmentCalendar} from "@/components/schedule/AppointmentCalendar";
import { AppointmentForm } from "@/components/schedule/AppointmentForm";
import AppointmentList from "@/components/schedule/AppointmentList";
import { Button } from "@/components/ui/button";
import { usePopUpContext } from "@/context/PopUpContext";
import { Bell, Calendar, Check, Clock, MapPin } from "lucide-react";

const data = [
  {
    title: "Total Appointments",
    value: 9,
    change: "+12%",
    trend: "up",
    icon:Calendar,
    description: "Compared to last month",
  },
  {
    title: "Confirmed",
    value: 5,
    change: "+8%",
    trend: "up",
    icon: Check ,
    description: "Confirmed appointments",
  },
  {
    title: "Pending",
    value: 2,
    // "change": "-5%",
    trend: "down",
    icon:Clock,
    description: "Awaiting confirmation",
  },
  {
    title: "Scheduled Today",
    value: 3,
    // "change": "+15%",
    trend: "up",
    icon: MapPin,
    description: "Appointments scheduled for today",
  },
];

const Schedule = () => {
    const {openDrawer} =usePopUpContext()
  return (
    <main className="min-h-screen text-[#dae2fd]  p-4 space-y-6">
      <header className="flex justify-between items-center pb-2  ">
        <div>
          <h1 className="text-2xl font-semibold">Schedule</h1>

          <p className="mt-1 text-sm">
            manage property viewing and client appointments
          </p>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <span className="w-10 h-10 rounded-md border  flex justify-center items-center bg-[#171f33]  border-[#464554] ">
            {" "}
            <Bell className="size-6 " />
            
          </span>
          <Button className=" bg-[#c0c1ff] text-[#1000A9]  px-5 py-3 text-sm font-medium  transition hover:bg-[#222a3d] hover:text-[#dae2fd]  " onClick={()=>openDrawer(()=><AppointmentForm/>)}>
            create Appointment{" "}
          </Button>
        </div>
      </header>
      <section className="grid grid-cols-4 gap-4 mt-4">
        {data.map((data) => {
            const Icon =data.icon
       return (
          <div className="border rounded-lg bg-[#171f33]  border-[#464554] p-3 ">
          <div className="flex justify-between items-baseline">
              <div className="space-y-4">
           <span className="flex justify-center items-center w-9 h-9  rounded-md bg-[#171f33] border border-[#464554]">   <Icon className="size-5"/></span>
           <p  className="text-2xl font-semibold">{data.value}</p>
           <h3 className="text-sm ">{data.title}</h3>
            </div>
           <span className="border rounded-md text-sm  ">{data.change}</span>
          </div>
          </div>
        )})}
      </section>
      <section>
        <AppointmentCalendar/>
        <AppointmentList/>
      </section>
    </main>
  );
};

export default Schedule;
