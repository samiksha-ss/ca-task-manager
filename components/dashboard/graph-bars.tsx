interface Bars {
  label: string;
  value: number;
  accent?: string;
}

interface GraphBarsProps {
  bars: Bars[];
}

export function GraphBars({ bars }: GraphBarsProps) {
  const maxValue = Math.max(...bars.map((bar) => bar.value), 1);

  return (
    <div className="flex items-end justify-between gap-4">
      {bars.map((bar) => {
        const heightPercent = Math.max((bar.value / maxValue) * 100, 8);
        return (
          <div key={bar.label} className="flex flex-col items-center gap-2">
            <div className="relative flex h-32 w-6 items-end rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="w-full rounded-full bg-gradient-to-t from-accent to-blue-400 transition-all duration-300"
                style={{ height: `${heightPercent}%` }}
              />
              <span className="pointer-events-none absolute -top-3 flex h-2 w-2 items-center justify-center rounded-full bg-white text-[0px] shadow-md dark:bg-indigo-300" />
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">{bar.label}</span>
          </div>
        );
      })}
    </div>
  );
}
