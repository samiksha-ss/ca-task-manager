"use client";

import { Bell, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/cn";

const navLinks = ["Home", "Messages", "Discover", "Wallet", "Projects"];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-20 flex w-full items-center justify-between rounded-3xl border border-white/50 bg-white/70 shadow-sm shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Nexa</div>
        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              className={cn(
                "rounded-lg px-3 py-1 transition-colors hover:text-slate-900 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800",
                link === "Home" ? "text-slate-900 font-semibold dark:text-white" : ""
              )}
              href="#"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4 px-6 py-4">
        <div className="hidden w-60 lg:block">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Compass size={16} />
            </span>
            <Input placeholder="Search insights..." className="pl-11" />
          </div>
        </div>
        <Button variant="ghost" className="p-2 text-slate-600 dark:text-slate-300">
          <Bell size={18} />
        </Button>
        <div className="flex items-center gap-3 rounded-full border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            AJ
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900 dark:text-white">Alex Jensen</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Product</span>
          </div>
        </div>
      </div>
    </header>
  );
}
