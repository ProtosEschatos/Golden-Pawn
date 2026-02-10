// ============================================
// PAWN SHOP TYPES
// ============================================

export type Locale = 'en' | 'de' | 'hr' | 'it';

export type LocalizedString = {
  en: string;
  de: string;
  hr: string;
  it: string;
};

export type ItemCondition = 'new' | 'like_new' | 'excellent' | 'good' | 'fair' | 'for_parts';
export type AuctionType = 'auction' | 'buy_now' | 'both';
export type AuctionStatus = 'draft' | 'live' | 'ended' | 'sold' | 'unsold';
export type LoanStatus = 'active' | 'repaid' | 'extended' | 'defaulted';
export type OrderType = 'auction_win' | 'buy_now';

export interface AuctionItem {
  id: string;
  name: LocalizedString;
  slug: string;
  description: LocalizedString;
  category: string;
  subcategory?: string;
  condition: ItemCondition;
  provenance?: LocalizedString;

  auctionType: AuctionType;
  startingBid?: number;
  currentBid?: number;
  reservePrice?: number;
  buyNowPrice?: number;
  bidIncrement: number;
  bidCount: number;

  auctionStart?: string; // ISO date
  auctionEnd?: string;   // ISO date
  autoExtend: boolean;

  imageUrls: string[];
  videoUrl?: string;

  dimensions?: string;
  weight?: string;
  yearMade?: string;
  brand?: string;
  model?: string;

  status: AuctionStatus;
  featured: boolean;

  soldPrice?: number;
  soldDate?: string;
  buyerLocation?: string;
}

export interface Bid {
  id: string;
  auctionItemId: string;
  bidderName: string;
  bidAmount: number;
  bidType: 'manual' | 'auto';
  createdAt: string;
}

export interface PawnLoan {
  id: string;
  loanNumber: string;
  itemDescription: LocalizedString;
  itemCategory: string;
  itemCondition: ItemCondition;
  appraisedValue: number;
  loanAmount: number;
  interestRate: number;
  loanTermDays: number;
  issueDate: string;
  dueDate: string;
  status: LoanStatus;
  imageUrl?: string;
}

export interface Category {
  id: string;
  name: LocalizedString;
  slug: string;
  description: LocalizedString;
  icon: string;
  imageUrl: string;
  itemCount: number;
}

export interface TeamMember {
  id: string;
  name: string;
  title: LocalizedString;
  bio: LocalizedString;
  photoUrl: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  comment: LocalizedString;
  serviceType: 'pawn_loan' | 'auction_purchase';
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: 'pawn' | 'auction' | 'general';
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  slug: string;
  excerpt: LocalizedString;
  content: LocalizedString;
  imageUrl: string;
  author: string;
  category: string;
  publishedAt: string;
}

export interface SoldItem extends AuctionItem {
  soldPrice: number;
  soldDate: string;
  buyerLocation: string;
  daysToSell: number;
}
