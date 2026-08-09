import { todaysActivity } from "@/constants/data";
import { Sparkles } from "lucide-react";

const Activity = () => {
  return (
    <section className="p-4 shadow-md h-full border  rounded-md ">
      <div className="flex gap-2 items-center">
        <span className="bg-[#6366F1]  rounded-full w-8 h-8  text-white flex items-center justify-center">
          <Sparkles />
        </span>
        <h2 className="text-base font-semibold capitalize">today's activity</h2>
      </div>

      <div className="flex flex-col  gap-3">
        {todaysActivity.map(({ label, value, icon: Icon }) => (
          <div key={label} className=" flex border">
            <div className="flex items-center  gap-3"><Icon className="w-4 h-4" />
            <span>{label}</span></div>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
