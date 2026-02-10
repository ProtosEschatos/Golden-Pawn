'use client';
import dynamic from 'next/dynamic';

const WatchlistContent = dynamic(() => import('./watchlist-content'), { ssr: false });

export default function WatchlistPage() {
  return <WatchlistContent />;
}
