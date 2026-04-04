import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraphBars } from "./graph-bars";

const bars = [
  { label: "Mon", value: 45 },
  { label: "Tue", value: 68 },
  { label: "Wed", value: 52 },
  { label: "Thu", value: 74 },
  { label: "Fri", value: 62 },
  { label: "Sat", value: 80 },
  { label: "Sun", value: 58 },
];

export function IncomeTrackerCard() {
  return (
    <Card className="gap-4 rounded-[32px] border border-white/40 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10 dark:border-slate-800">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Income Tracker</p>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">Upcoming payout</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Optimized for long-term growth</p>
        </div>
        <div>
          <select
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            defaultValue="weekly"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <GraphBars bars={bars} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">+20% from last week</span>
        <Badge variant="outline" className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
          stable
        </Badge>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Revenue is aligned with the quarterly forecast and conversion average is ahead of the target.
      </p>
    </Card>
  );
}
