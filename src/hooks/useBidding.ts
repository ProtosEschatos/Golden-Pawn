'use client';
import { useState, useEffect } from 'react';

interface StoredBid {
  itemId: string;
  amount: number;
  bidder: string;
  timestamp: string;
}

export function useBidding(itemId: string) {
  const [bids, setBids] = useState<StoredBid[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`gp_bids_${itemId}`);
    if (stored) setBids(JSON.parse(stored));
  }, [itemId]);

  const placeBid = (amount: number) => {
    const names = ['GoldenBidder', 'AuctionKing', 'TreasureHunter', 'LuxurySeeker', 'ValueFinder'];
    const newBid: StoredBid = {
      itemId,
      amount,
      bidder: 'You',
      timestamp: new Date().toISOString(),
    };
    // Simulate a competing bid 50% of the time
    const competing: StoredBid[] = Math.random() > 0.5 ? [{
      itemId,
      amount: amount + Math.floor(Math.random() * 50) + 10,
      bidder: names[Math.floor(Math.random() * names.length)],
      timestamp: new Date(Date.now() + 2000).toISOString(),
    }] : [];

    const updated = [...bids, newBid, ...competing].sort((a, b) => b.amount - a.amount);
    setBids(updated);
    localStorage.setItem(`gp_bids_${itemId}`, JSON.stringify(updated));
    return updated;
  };

  return { bids, placeBid, highestBid: bids[0]?.amount || 0 };
}
