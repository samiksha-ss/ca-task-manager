import { Card } from "@/components/ui/card";

const stats = [
  { label: "Total tasks", value: "42", change: "+5" },
  { label: "Due this week", value: "8", change: "+2" },
  { label: "Completed", value: "18", change: "steady" },
];

export function TaskInsights() {
  return (
    <Card className="rounded-2xl border border-white/40 dark:border-slate-800">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Snapshot</p>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Team Velocity</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 rounded-2xl border border-slate-100/70 bg-slate-50/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
