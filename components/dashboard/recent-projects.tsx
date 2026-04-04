import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Globe, KeyRound } from "lucide-react";

const projects = [
  {
    title: "Orbital Finance Redesign",
    status: "Paid",
    description: "Design system refresh for investor portal.",
    meta: "Austin · 2h ago",
    icon: Briefcase,
  },
  {
    title: "Pulse Analytics Migration",
    status: "Not Paid",
    description: "Moving dashboards from legacy stack to Prisma.",
    meta: "Remote · 5h ago",
    icon: Globe,
  },
  {
    title: "Vertex Security Prototype",
    status: "Paid",
    description: "Rapid prototyping for multi-factor onboarding.",
    meta: "London · 1d ago",
    icon: KeyRound,
  },
];

export function RecentProjects() {
  return (
    <Card className="space-y-6 rounded-2xl border border-white/40 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Recent Projects
          </p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Pipeline snapshots</p>
        </div>
        <Badge variant="outline" className="text-[0.6rem] uppercase tracking-[0.4em] text-slate-500">
          live
        </Badge>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex items-start gap-3 rounded-2xl border border-slate-100/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-100">
              <project.icon size={20} />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-slate-900 dark:text-white">{project.title}</p>
                <Badge variant={project.status === "Paid" ? "solid" : "outline"}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                {project.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
