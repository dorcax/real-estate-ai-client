

import {
  AlertTriangle,
  Bot,
  Building2,
  CreditCard,
  PhoneCall,
  Timer,
  Upload,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/table/data-table";
import type { BillingHistory } from "@/types";
import { billingInvoice } from "@/constants/data";
import { columns } from "@/components/billing/data.columns";

const usageData = [
  {
    label: "Team Members",
    value: 6,
    limit: 10,
    display: "6 / 10",
    icon: Users,
    barColor: "bg-blue-600",
  },
  {
    label: "Properties",
    value: 124,
    limit: 500,
    display: "124 / 500",
    icon: Building2,
    barColor: "bg-blue-600",
  },
  {
    label: "AI Agents",
    value: 3,
    limit: 5,
    display: "3 / 5",
    icon: Bot,
    barColor: "bg-violet-600",
  },
  {
    label: "AI Calls",
    value: 732,
    limit: 1000,
    display: "732 / 1,000",
    icon: PhoneCall,
    barColor: "bg-violet-600",
  },
  {
    label: "AI Call Minutes",
    value: 4300,
    limit: 5000,
    display: "4,300 / 5,000",
    icon: Timer,
    barColor: "bg-red-600",
    warning: "Approaching limit. Consider upgrading for more minutes.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₦25,000",
    period: "/mo",
    description: "Essential CRM tools for solo agents.",
    features: [
      "Up to 2 team members",
      "100 properties",
      "Basic AI tools",
    ],
  },
  {
    name: "Professional",
    price: "₦75,000",
    period: "/mo",
    description: "Advanced automation and AI for growing teams.",
    features: [
      "Up to 10 team members",
      "500 properties",
      "Advanced AI agents",
      "1,000 AI calls",
    ],
    current: true,
  },
  {
    name: "Business",
    price: "₦150,000",
    period: "/mo",
    description: "Enterprise capacity with unlimited AI workflows.",
    features: [
      "Unlimited team members",
      "Unlimited properties",
      "Premium AI agents",
      "Priority support",
    ],
  },
];

const Billing = () => {
    const data :BillingHistory[] = billingInvoice
  return (
    <main className="min-h-screen text-[#dae2fd] space-y-6">
      {/* HEADER */}
      <header className="mb-7 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Billing & Subscription
          </h1>

          <p className="mt-1 text-sm ">
            Manage your Settlla enterprise plan, usage, and billing history.
          </p>
        </div>

        <Button className="gap-2 bg-[#c0c1ff] text-[#1000A9] ">
          <Upload className="size-4" />
          Upgrade Plan
        </Button>
      </header>

      {/* CURRENT PLAN + USAGE */}
      <section className="grid grid-cols-4 gap-4 ">
        {/* CURRENT PLAN */}
        <Card className="bg-[#171f33] border border-[#464554] text-[#dae2fd]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Current Plan
              </CardTitle>

              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-600">
                ACTIVE
              </span>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-xs">
              You are currently on the
            </p>

            <h2 className="mt-1 text-2xl font-semibold  text-[#c0c1ff]">
              Professional Plan
            </h2>

            <div className="mt-4">
              <span className="text-xl font-semibold">
                ₦75,000
              </span>
              <span className="text-xs">
                /month
              </span>
            </div>

            {/* PAYMENT CARD */}
            <div className="mt-20 rounded-lg border  border-[#464554] p-3">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded border bg-white">
                  <CreditCard className="size-4" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium">
                    Mastercard •••• 4821
                  </p>

                  <p className="text-[10px]">
                    Expires 12/28
                  </p>
                </div>

                <Button className="text-xs font-medium  text-[#c0c1ff] bg-0">
                  Edit
                </Button>
              </div>
            </div>

            <div className="mt-3 flex justify-between text-xs">
              <span className="">
                Next billing date:
              </span>

              <span className="font-medium">
                Sept 16, 2026
              </span>
            </div>
          </CardContent>
        </Card>

        {/* PLAN USAGE */}
        <Card className="bg-[#171f33] border border-[#464554] col-span-3 text-[#dae2fd]">
          <CardHeader>
            <CardTitle className="text-lg">
              Plan Usage
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            {usageData.map((usage) => {
              const Icon = usage.icon;

              const percentage =
                (usage.value / usage.limit) * 100;

              return (
                <div key={usage.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-blue-600" />

                      <span className="text-xs font-medium">
                        {usage.label}
                      </span>
                    </div>

                    <span className="text-xs">
                      {usage.display}
                    </span>
                  </div>

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e6e9fb]">
                    {/* <div
                      className={`h-full rounded-full ${usage.barColor}`}
                      style={{
                        width: `${Math.min(percentage, 100)}%`,
                      }}
                    /> */}
                    <div className={`h-full rounded-full ${usage.barColor}`} style={
                        {
                            width:`${Math.min(percentage,100)}%`
                        }
                    }/>
                  </div>

                  {usage.warning && (
                    <p className="mt-1 flex items-center gap-1 text-[10px] text-[#ffb4ab]">
                      <AlertTriangle className="size-3" />
                      {usage.warning}
                    </p>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      {/* PLAN COMPARISON */}
      <section className="mt-12">
        <header className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Plan Comparison
          </h2>

          <div className="flex rounded-lg bg-[#171f33] border border-[#464554] p-1 text-xs">
            <button className="rounded-md bg-white text-black px-5 py-2 shadow-sm">
              Monthly
            </button>

            <button className="px-4 py-2">
              Yearly (Save 20%)
            </button>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative   overflow-visible bg-[#171f33] border text-[#dae2fd] ${
                plan.current
                  ? "border-2 border-[#ffb783]"
                  : "border-[#464554] "
              }`}
            >
              {plan.current && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffb783] text-[#4f2500] px-4 py-1 text-[10px] font-semibold">
                  CURRENT PLAN
                </span>
              )}
            

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  {plan.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div>
                  <span
                    className={`text-2xl font-semibold ${
                      plan.current
                        ? "text-[#c0c1ff]"
                        : "text-[#dae2fd]"
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span className="text-xs ">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-2 text-xs ">
                  {plan.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                //   variant={plan.current ? "outline" : "default"}
                  className="mt-6 w-full bg-[#c0c1ff] text-[#1000A9] hover:bg-[#c0c1ffc8]"
                >
                  {plan.current
                    ? "Current Plan"
                    : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* <section>
        <DataTable
                      columns={columns}
                      data={data}
                    />
      </section> */}
    </main>
  );
};

export default Billing;