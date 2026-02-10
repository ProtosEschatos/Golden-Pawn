'use client';
import { useAuctionTimer } from '@/hooks/useAuctionTimer';

export function CountdownTimer({ endDate, compact = false }: { endDate: string | undefined; compact?: boolean }) {
  const { days, hours, minutes, seconds, ended } = useAuctionTimer(endDate);
  if (ended) return <span className="inline-flex items-center rounded-full border-transparent bg-destructive text-destructive-foreground px-2.5 py-0.5 text-xs font-semibold">Ended</span>;
  if (compact) return <span className="font-mono text-sm tabular-nums">{days > 0 && `${days}d `}{String(hours).padStart(2,'0')}:{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</span>;
  return (
    <div className="flex gap-2">
      {[{v:days,l:'D'},{v:hours,l:'H'},{v:minutes,l:'M'},{v:seconds,l:'S'}].map(({v,l})=>(
        <div key={l} className="flex flex-col items-center bg-muted rounded-md px-2.5 py-1.5 min-w-[42px]">
          <span className="font-mono text-lg font-bold tabular-nums">{String(v).padStart(2,'0')}</span>
          <span className="text-[10px] text-muted-foreground uppercase">{l}</span>
        </div>
      ))}
    </div>
  );
}
