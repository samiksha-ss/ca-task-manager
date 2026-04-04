import Sidebar from "@/components/layout/sidebar"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { ConnectCard } from "@/components/dashboard/connect-card"
import { TaskBoard } from "@/components/dashboard/task-board"
import { TaskInsights } from "@/components/dashboard/task-insights"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">


      {/* Main Layout */}
      <div className="flex">
        
        {/* Sidebar */}
        <div className="hidden lg:block w-64 border-r bg-white dark:bg-slate-900">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

            {/* LEFT */}
            <section className="space-y-6">
              <TaskBoard />
              <TaskInsights />
            </section>

            {/* RIGHT */}
            <section className="space-y-6">
              <ActivityFeed />
              <ConnectCard />
            </section>

          </div>

        </main>
      </div>
    </div>
  )
}