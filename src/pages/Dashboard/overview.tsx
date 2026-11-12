import OverviewAnalytics from "@/pages/Dashboard/OverviewAnalytics";
import PropertySection from "@/components/overview/MarketPlace";
import RecentViewings from "@/components/overview/RecentViewing";
import OverviewCard from "@/components/overview/OverviewCard";

const Overview = () => {
  return (
    <main className="space-y-8 h-full min-w-0 flex-1 overflow-y-auto  [&::-webkit-scrollbar]:hidden">
      <OverviewCard />

      <OverviewAnalytics />

      <PropertySection />

      <RecentViewings />
    </main>
  );
};

export default Overview;
