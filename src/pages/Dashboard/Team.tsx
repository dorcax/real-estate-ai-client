

import { DataTable } from "@/components/table/data-table"
import { columns } from "@/components/Team/data-columns"
import { StatCard } from "@/components/Team/TeamStat"
import { teamData, teamStats } from "@/constants/data"
import type { TeamMember } from "@/types"
import {
    SlidersHorizontal,
    UserPlus
} from "lucide-react"





export default function TeamPage() {
    const data:TeamMember[] =teamData
  return (
    <main className="min-h-screen text-[#dae2fd]  p-6">
      {/* Header */}
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Team
          </h1>

          <p className="mt-1 text-sm">
            Manage your team members and their access levels.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-md bg-[#c0c1ff] text-[#1000A9]  px-5 py-3 text-sm font-medium  transition ">
          <UserPlus size={16} />
          Invite Team Member
        </button>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {teamStats.map((stat:any) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      {/* Navigation + Filters */}
      <section className="mt-7">
        <div className="flex flex-col justify-between gap-4 border-b sm:flex-row sm:items-end">
          <div className="flex gap-6">
            <button className="border-b-2 border-blue-600 pb-3 text-sm font-medium">
              Members (8)
            </button>

            <button className="pb-3 text-sm font-medium text-slate-700">
              Invitations (3)
            </button>
          </div>

          <div className="mb-3 flex gap-3">
            <div className="flex items-center rounded-md border bg-[#c0c1ff] text-[#1000A9]  px-3">
              <SlidersHorizontal
                size={15}
                className="mr-2 text-slate-500"
              />

              <select className="h-10 bg-transparent text-sm outline-none">
                <option>Role: All</option>
                <option>Owner</option>
                <option>Admin</option>
                <option>Agent</option>
              </select>
            </div>

            <select className="h-10 rounded-md border bg-[#c0c1ff] text-[#1000A9]  px-4 text-sm outline-none">
              <option>Status: All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

    <section className="mt-4">    {/* Table */}
       <DataTable
                   columns={columns}
                   data={data}
                 /></section>
      </section>
    </main>
  )
}

