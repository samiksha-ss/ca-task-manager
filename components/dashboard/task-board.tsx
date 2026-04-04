import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const columns = [
  {
    title: "Backlog",
    tint: "bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300",
    tasks: [
      { title: "Audit onboarding flows", owner: "Maya Patel", due: "Apr 7", priority: "High" },
      { title: "Map evergreen email journeys", owner: "Leo Marshall", due: "Apr 12", priority: "Medium" },
    ],
  },
  {
    title: "In Progress",
    tint: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-white",
    tasks: [
      { title: "Ship payments widget", owner: "Ivy Cruz", due: "Apr 5", priority: "High" },
      { title: "Refine metrics dashboard", owner: "Aria Liu", due: "Apr 9", priority: "Medium" },
    ],
  },
  {
    title: "Review",
    tint: "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200",
    tasks: [
      { title: "QA invite flow", owner: "Dev team", due: "Apr 4", priority: "Low" },
      { title: "Legal compliance doc", owner: "Alex Jensen", due: "Apr 11", priority: "Medium" },
    ],
  },
];

export function TaskBoard() {
  return (
    <Card className="space-y-6 rounded-2xl border border-white/40 dark:border-slate-800">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Task Manager
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Current Sprint</h2>
        </div>
        <Badge variant="outline" className="text-[0.65rem] uppercase tracking-[0.4em]">
          Active
        </Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="space-y-3 rounded-2xl border border-slate-100/70 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${column.tint}`}>{column.title}</span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                {column.tasks.length} items
              </span>
            </div>
            <div className="space-y-3">
              {column.tasks.map((task) => (
                <div key={task.title} className="space-y-2 rounded-2xl border border-white/60 bg-white/90 px-3 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{task.title}</p>
                    <Badge variant="solid" className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-900 dark:text-slate-800">
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{task.owner}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Due {task.due}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
