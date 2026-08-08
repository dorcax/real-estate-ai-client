import { dashboardStats } from "@/constants/data";

const OverviewCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-5 py-8">
      {dashboardStats.map((stats) => {
        const Icon = stats.icon;

        return (
          <div key={stats.title} className="rounded-xl shadow-md p-4 space-y-2">
            <div className="w-8 h-8  rounded-md flex items-center justify-center border mb-3">
              <Icon className="h-6 w-10 " />
            </div>

            <p className="text-sm  font-semibold">{stats.value}</p>

            <h3 className="text-xs text-muted-foreground">{stats.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewCard;
