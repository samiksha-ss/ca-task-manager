import { Button } from "@/components/ui/button";

export function PremiumCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 p-1 shadow-xl shadow-indigo-500/30">
      <div className="flex h-full w-full flex-col gap-6 rounded-2xl bg-white/5 p-6 text-white backdrop-blur">
        <div className="text-xs uppercase tracking-[0.4em] text-white/70">Premium</div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Unlock Premium Features</h3>
          <p className="text-sm text-white/70">
            Collaborate faster with AI briefs, exportable reports, and prioritized support.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-white text-slate-900 shadow-lg" size="lg">
            Upgrade now
          </Button>
          <span className="text-sm text-white/80">All premium users get double storage.</span>
        </div>
      </div>
    </div>
  );
}
