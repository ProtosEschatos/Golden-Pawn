'use client';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { blogPosts } from '@/data/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Locale } from '@/types';

export default function BlogPage() {
  const locale = useLocale() as Locale;
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">Tips, news, and insights from the pawn and auction world</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <Link key={post.id} href={"/blog/" + post.slug as any}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="aspect-video overflow-hidden"><img src={post.imageUrl} alt={post.title[locale]} className="w-full h-full object-cover hover:scale-105 transition-transform" /></div>
              <CardContent className="pt-4">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <h2 className="text-lg font-semibold mb-2">{post.title[locale]}</h2>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt[locale]}</p>
                <div className="flex justify-between text-xs text-muted-foreground"><span>{post.author}</span><span>{new Date(post.publishedAt).toLocaleDateString()}</span></div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}