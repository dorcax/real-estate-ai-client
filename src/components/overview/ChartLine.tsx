import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Replace this with real data from your API — one point per day, last 14 days
const data = [
  { date: "Jun 28", calls: 0, viewings: 0 },
  { date: "Jun 29", calls: 0, viewings: 0 },
  { date: "Jun 30", calls: 0, viewings: 0 },
  { date: "Jul 1", calls: 0, viewings: 0 },
  { date: "Jul 2", calls: 0, viewings: 0 },
  { date: "Jul 3", calls: 0, viewings: 0 },
  { date: "Jul 4", calls: 0, viewings: 0 },
  { date: "Jul 5", calls: 0, viewings: 0 },
  { date: "Jul 6", calls: 0, viewings: 0 },
  { date: "Jul 7", calls: 1, viewings: 0 },
  { date: "Jul 8", calls: 1, viewings: 1 },
  { date: "Jul 9", calls: 2, viewings: 1 },
  { date: "Jul 10", calls: 3, viewings: 2 },
  { date: "Jul 11", calls: 5, viewings: 4 },
]

export function ConversationTrendChart() {
  return (
    <Card className="bg-[#171f33] border-[#2d3449] text-[#dae2fd]">
      <CardHeader className="gap-1 ">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-rose-100 text-xs font-medium text-rose-600">
            A
          </div>
          <h3 className="text-sm font-semibold">Conversation Trend</h3>
        </div>
        <p className="text-xs text-[#dae2fd]
     ">
          Last 14 days · calls &amp; viewings
        </p>
      </CardHeader>

      <CardContent>
        <div className="h-56 w-full ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                interval="preserveStartEnd"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                width={24}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid var(--border)",
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="#e11d48"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="viewings"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-600" />
            Calls
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-amber-500" />
            Viewings
          </span>
        </div>
      </CardContent>
    </Card>
  )
}