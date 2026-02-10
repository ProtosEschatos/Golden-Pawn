'use client';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getBlogBySlug } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Locale } from '@/types';

export default function BlogPostPage() {
  const locale = useLocale() as Locale;
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug);
  if (!post) return <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Post not found</h1></div>;
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/blog"><Button variant="ghost" size="sm" className="mb-6"><ArrowLeft className="w-4 h-4 mr-1" />Back to Blog</Button></Link>
      <Badge className="mb-3">{post.category}</Badge>
      <h1 className="text-3xl font-bold mb-4">{post.title[locale]}</h1>
      <div className="flex gap-4 text-sm text-muted-foreground mb-8">
        <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="aspect-video rounded-xl overflow-hidden bg-muted mb-8"><img src={post.imageUrl} alt="" className="w-full h-full object-cover" /></div>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content[locale] }} />
    </div>
  );
}