"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#c0c1ff",
  },
  safari: {
    label: "Safari",
    color: "#4edea3",
  },
  firefox: {
    label: "Firefox",
    color: "#ffb783",
  },
  edge: {
    label: "Edge",
    color: "#ffb4ab",
  },
  other: {
    label: "Other",
    color: "#2d3449",
  },
} satisfies ChartConfig;

 const totalVisitors =chartData.reduce((total,item)=>total + item.visitors,0)

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col bg-[#171f33] border-[#2d3449] text-[#dae2fd] ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription className="text-xs text-[#dae2fd]">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
     <CardFooter className="flex flex-col items-start bg-[#171f33]   gap-3 text-sm ">
  {chartData.map((item) => {
   
    const percentage = ((item.visitors / totalVisitors) * 100).toFixed(1);

    const config =
      chartConfig[item.browser as keyof typeof chartConfig];

    return (
      <div
        key={item.browser}
        className="flex items-center justify-between w-full  gap-4"
      >
        <div className="flex items-center  gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor:
                "color" in config ? config.color : undefined,
            }}
          />

          <span className="text-[#dae2fd]">
            {config.label}
          </span>
        </div>

        <span className="font-medium text-[#dae2fd]">
          {percentage}%
        </span>
      </div>
    );
  })}
</CardFooter>
    </Card>
  )
}
