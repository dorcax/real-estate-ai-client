import Activity from "../../components/overview/Activity";
import { ConversationTrendChart } from "../../components/overview/ChartLine";


const OverviewAnalytics = () => {
  return (
    <section
      className="
      grid 
      grid-cols-1 
      xl:grid-cols-3 
      gap-6
      "
    >

      <div className="xl:col-span-2">
        <ConversationTrendChart />
      </div>


      <Activity />

    </section>
  );
};


export default OverviewAnalytics;