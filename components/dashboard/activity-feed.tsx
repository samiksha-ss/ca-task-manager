import { Card } from "@/components/ui/card";

const updates = [
  { text: "Design review completed for payments.", time: "12m ago" },
  { text: "New task assigned to Leo in Payments squad.", time: "1h ago" },
  { text: "Client sync scheduled for Friday.", time: "3h ago" },
  { text: "Weekly planning template released.", time: "Yesterday" },
];

export function ActivityFeed() {
  return (
    <Card className="rounded-2xl border border-white/40 dark:border-slate-800">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Activity</p>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Pulse</h3>
        </div>
        <div className="space-y-3">
          {updates.map((update) => (
            <div key={update.text} className="rounded-2xl border border-slate-100/70 bg-slate-50/70 px-4 py-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-slate-900 dark:text-white">{update.text}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{update.time}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
