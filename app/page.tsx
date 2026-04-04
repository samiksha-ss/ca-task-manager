import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { ConnectCard } from "@/components/dashboard/connect-card";
import { TaskBoard } from "@/components/dashboard/task-board";
import { TaskInsights } from "@/components/dashboard/task-insights";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Navbar />

        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <Sidebar />

          <main className="flex flex-1 flex-col gap-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <section className="space-y-6">
                <TaskBoard />
                <TaskInsights />
              </section>

              <section className="space-y-6">
                <ActivityFeed />
                <ConnectCard />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
