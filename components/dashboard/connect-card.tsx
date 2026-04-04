import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const contacts = [
  { name: "Maya Patel", role: "Designer" },
  { name: "Leo Marshall", role: "Engineer" },
  { name: "Ivy Cruz", role: "Product" },
];

export function ConnectCard() {
  return (
    <Card className="space-y-6 rounded-2xl border border-white/40 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Let&rsquo;s Connect</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">People on standby</p>
        </div>
        <Badge variant="outline" className="text-[0.6rem] uppercase tracking-[0.3em]">
          online
        </Badge>
      </div>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="flex items-center justify-between rounded-2xl border border-slate-100/80 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                {contact.name
                  .split(" ")
                  .map((segment) => segment[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{contact.name}</p>
                <span className="text-xs text-slate-500 dark:text-slate-400">{contact.role}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="px-3 text-slate-600 dark:text-slate-300">
              +
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
