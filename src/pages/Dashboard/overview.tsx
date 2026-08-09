import Activity from "@/components/dashboard/Activity";
import { ConversationTrendChart } from "@/components/dashboard/ChartLine";
import OverviewCard from "@/components/dashboard/OverviewCard";

const Overview = () => {
  return (
   <section>
   <OverviewCard/>
   <div className="grid grid-cols-12 gap-4  ">
    <div className="col-span-8  ">
      <ConversationTrendChart/> 
    </div>
    <div className="col-span-4 ">
     <Activity/>
    </div>
   </div>
   </section>
  );
};

export default Overview;
