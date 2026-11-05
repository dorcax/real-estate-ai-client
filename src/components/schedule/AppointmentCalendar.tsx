import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Search } from "lucide-react";

type CalendarView = "Month" | "Week" | "Day";

export function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2027, 2, 1));

  const [view, setView] = useState<CalendarView>("Month");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [agent, setAgent] = useState("All");

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const previousMonthDays = new Date(year, month, 0).getDate();

    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

    return Array.from({ length: totalCells }, (_, index) => {
      const dayNumber = index - startDay + 1;

      if (dayNumber <= 0) {
        return {
          date: previousMonthDays + dayNumber,
          currentMonth: false,
        };
      }

      if (dayNumber > daysInMonth) {
        return {
          date: dayNumber - daysInMonth,
          currentMonth: false,
        };
      }

      return {
        date: dayNumber,
        currentMonth: true,
      };
    });
  }, [currentDate]);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="w-full space-y-6 text-[#dae2fd]">
      {/* Calendar Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={previousMonth}
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#464554] bg-[#171f33] text-[#91a4d0] transition hover:bg-[#222c45]"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            onClick={nextMonth}
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#464554] bg-[#171f33] text-[#91a4d0] transition hover:bg-[#222c45]"
          >
            <ChevronRight size={25} />
          </button>

          <h2 className="ml-1 text-2xl font-semibold tracking-tight text-[#dae2fd]">
            {monthName}
          </h2>

          <button
            onClick={goToToday}
            className="rounded-xl border border-[#464554] bg-[#171f33] px-5 py-3 text-base font-semibold text-[#dae2fd] transition hover:bg-[#222c45]"
          >
            Today
          </button>
        </div>

        {/* Calendar View Selector */}
        <div className="flex items-center gap-1 rounded-2xl border border-[#464554] bg-[#171f33] p-1">
          {(["Month", "Week", "Day"] as CalendarView[]).map((item) => (
            <button
              key={item}
              onClick={() => setView(item)}
              className={`rounded-xl px-5 py-3 text-base font-medium transition ${
                view === item
                  ? "bg-[#c0c1ff] text-[#020617]"
                  : "text-[#91a4d0] hover:text-[#dae2fd]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(250px,540px)_170px_200px]">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#91a4d0]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search appointments, clients, properties..."
            className="h-10 w-full rounded-xl border border-[#464554] bg-[#171f33] pl-14 pr-4 text-base text-[#dae2fd] outline-none placeholder:text-[#78829a] focus:border-[#c0c1ff]"
          />
        </div>

        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-10 w-full appearance-none rounded-xl border border-[#464554] bg-[#171f33] px-6 pr-12 text-lg text-[#dae2fd] outline-none focus:border-[#c0c1ff]"
          >
            <option value="All">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <ChevronDown
            size={20}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#dae2fd]"
          />
        </div>

        {/* <div className="relative">
          <select
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
            className="h-10 w-full appearance-none rounded-xl border border-[#464554] bg-[#171f33] px-6 pr-12 text-lg text-[#dae2fd] outline-none focus:border-[#c0c1ff]"
          >
            <option value="All">All</option>
            <option value="Agent 1">Agent 1</option>
            <option value="Agent 2">Agent 2</option>
          </select>

          <ChevronDown
            size={20}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#dae2fd]"
          />
        </div> */}
      </div>

      {/* Calendar Grid */}
      <div className="overflow-hidden rounded-2xl border border-[#293248]">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-[#171f33]">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div
              key={day}
              className="flex h-13.25 items-center justify-center border-b border-r border-[#293248] text-sm font-medium tracking-wide text-[#91a4d0] last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Dates */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-[158px] border-b border-r border-[#293248] p-5 transition hover:bg-[#1c2740] ${
                !day.currentMonth ? "bg-[#171f33]/90" : "bg-[#171f33]"
              }`}
            >
              <span
                className={`text-lg font-semibold ${
                  day.currentMonth ? "text-[#dae2fd]" : "text-[#68738d]"
                }`}
              >
                {day.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
