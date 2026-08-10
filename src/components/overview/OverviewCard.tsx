import { dashboardStats } from "@/constants/data";

const OverviewCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4  mb-6">
      {dashboardStats.map((stats) => {
        const Icon = stats.icon;

        return (
          <div
            key={stats.title}
            className={`
              overflow-hidden
              relative rounded-xl    border
    bg-white
    p-4
    shadow-md

    before:absolute
    before:inset-0
    before:h-1
   
    before:w-full
  
    
    before:bg-linear-to-r ${stats.gradient}
            `}
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center border border-[#1E293B] mb-3">
              <Icon className="h-5 w-5 text-[#6366F1]" />
            </div>

            <p className="text-sm font-semibold text-black">{stats.value}</p>

            <h3 className="text-xs text-muted-foreground">{stats.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewCard;
