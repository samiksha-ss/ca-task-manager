import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Proposals sent", value: "38" },
  { label: "Interviews", value: "12" },
  { label: "Hires", value: "3" },
];

const bars = [
  { label: "Proposals", percent: 78 },
  { label: "Follow-ups", percent: 56 },
  { label: "Meetings", percent: 42 },
];

export function ProposalProgressCard() {
  return (
    <Card className="space-y-6 rounded-2xl border border-white/40 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Proposal Progress
          </p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            April 2026 Sprint
          </p>
        </div>
        <select className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <option>April</option>
          <option>March</option>
          <option>February</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-100/70 bg-slate-50/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
              <span>{bar.label}</span>
              <span>{bar.percent}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" style={{ width: `${bar.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
