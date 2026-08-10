import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recentViewings } from "@/constants/data";

const RecentViewings = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border">

      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#6366F1] flex items-center justify-center">
            <Calendar className="size-4 text-white " />
          </div>

          <div>
            <h2 className="font-semibold text-sm">
              Recent Viewings
            </h2>
            <p className="text-xs text-muted-foreground">
              Latest property inspections
            </p>
          </div>
        </div>


        <Button
          variant="outline"
          size="sm"
          className="rounded-full text-xs gap-2"
        >
          View All
          <ArrowRight className="size-3" />
        </Button>

      </div>


      {/* Viewing List */}
      <div className="space-y-4">

        {recentViewings.map((viewing) => (

          <div
            key={viewing.id}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >

            {/* User */}
            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-full bg-red-900 text-white flex items-center justify-center text-xs font-medium">
                {viewing.initials}
              </div>


              <div>
                <h3 className="text-sm font-medium">
                  {viewing.name}
                </h3>

                <p className="text-xs text-muted-foreground">
                  {viewing.phone}
                </p>

                <p className="text-xs text-muted-foreground">
                  {viewing.budget}
                </p>
              </div>

            </div>

            <div className="text-right">

              <p className="text-xs text-muted-foreground">
                {viewing.date}
              </p>

              <p className="text-xs text-muted-foreground mb-2">
                {viewing.time}
              </p>


              <span
                className={`
                  inline-flex items-center gap-1
                  rounded-full px-3 py-1
                  text-[11px]
                  bg-gray-100
                  capitalize
                `}
              >

                <span
                  className={`
                    h-1.5 w-1.5 rounded-full
                    ${
                      viewing.status === "confirmed"
                      ? "bg-green-500"
                      : viewing.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                    }
                  `}
                />

                {viewing.status}

              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentViewings;