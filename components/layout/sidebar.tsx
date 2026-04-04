"use client";

import Link from "next/link";
import { LayoutDashboard, CalendarDays, Users, FolderPlus } from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Calendar", icon: CalendarDays, href: "#" },
  { label: "Teams", icon: Users, href: "#" },
  { label: "Collections", icon: FolderPlus, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 flex-col rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 lg:flex">
      <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
        Workspace
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            href={item.href}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
