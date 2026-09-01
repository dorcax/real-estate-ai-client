import type { TeamStat } from "@/types"

export function StatCard({ stat }: { stat: TeamStat }) {
  const Icon = stat.icon

  return (
    <article className="relative min-h-[115px] overflow-hidden rounded-xl   bg-[#171f33] border border-[#464554] p-4">
      <div className="flex items-start justify-between">
        <Icon />

        {stat.badge && (
          <span className="rounded  px-2 py-1 text-xs ">
            {stat.badge}
          </span>
        )}
      </div>

      <p className="mt-4 text-[11px] font-medium uppercase ">
        {stat.title}
      </p>

      <p className="mt-1 text-3xl font-semibold">
        {stat.value}
      </p>
    </article>
  )
}

export  function RoleBadge({
  role,
}: {
  role: "Owner" | "Admin" | "Agent"
}) {
  const styles = {
    Owner: "bg-purple-100 text-purple-700",
    Admin: "bg-blue-100 text-blue-700",
    Agent: "bg-indigo-100 text-indigo-700",
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${styles[role]}`}
    >
      {role}
    </span>
  )
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}