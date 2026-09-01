import { LeadAnalytics } from "@/components/Analytics/AnalyticsTable";
import { ChartLineDefault } from "@/components/Analytics/Chart";
import { ChartPieDonut } from "@/components/Analytics/PieChart";
import { Button } from "@/components/ui/button";
import { metrics } from "@/constants/data";


export const Analytics = () => {
  return (
    <section className="text-[#dae2fd] space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Analytics overview</h1>
          <p className="text-sm leading-relaxed">
            comprehensive performance data across properties and agents{" "}
          </p>
        </div>
        <div>
          <Button className='p-5'>calender</Button>
        </div>
      </header>
      {/* card section  */}
      <div className="grid grid-cols-4 gap-4 ">
        {metrics.map((metric)=>{
      const Icon =metric.icon
      
      return  <div className=" flex justify-between  bg-[#171f33] border border-[#464554] rounded-lg p-3">
            <div >
            <h2>{metric.title}</h2>
           <div className="mt-4"> <p>{metric.value}</p>
            <span className="text-xs">{metric.changeText}</span></div>
            
          </div>
           <div className="p-2 border border-[#464554] w-7 flex items-center justify-cen ter h-7 rounded-full">
          <Icon size={18} />
        </div>
        </div>
})}
      </div>
      {/* chart line and piechart  */}
      <section className="grid grid-cols-4 gap-4 items-start">
        <div className="col-span-3 border border-[#464554] rounded-xl  ">
          <ChartLineDefault/>
        </div>
        <div className="border border-[#464554] rounded-xl"><ChartPieDonut/></div>
      </section>

<LeadAnalytics />
    </section>
  );
};
