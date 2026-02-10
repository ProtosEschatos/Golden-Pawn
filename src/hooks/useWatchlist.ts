'use client';
import { useState, useEffect } from 'react';

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('gp_watchlist');
    if (stored) setWatchlist(JSON.parse(stored));
  }, []);

  const toggle = (id: string) => {
    setWatchlist(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem('gp_watchlist', JSON.stringify(next));
      return next;
    });
  };

  const isWatched = (id: string) => watchlist.includes(id);

  return { watchlist, toggle, isWatched };
}
