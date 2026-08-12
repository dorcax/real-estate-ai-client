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
              relative rounded-xl    
    text-[#dae2fd]
     bg-[#171f33]
    px-4
    py-5
    shadow-md

    before:absolute
    before:inset-0
    before:h-1
   
    before:w-full
  
    
    before:bg-linear-to-r ${stats.gradient}
            `}
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center border border-[#464554] mb-3">
              <Icon className="h-5 w-5 text-[#6366F1]" />
            </div>

            <p className="text-sm font-semibold mb-2">{stats.value}</p>

            <h3 className="text-xs ">{stats.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewCard;
