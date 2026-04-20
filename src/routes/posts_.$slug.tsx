import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { getPostBySlug } from "@/lib/posts";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Calendar, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/posts_/$slug")({
  component: PostDetail,
});

function PostDetail() {
  const { t, i18n } = useTranslation();
  const { slug } = Route.useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug({ data: slug }),
  });

  if (isLoading) {
    return (
      <PageLayout>
        <div className="animate-pulse space-y-6">
          <div className="h-4 bg-muted rounded w-32"></div>
          <div className="h-10 bg-muted rounded w-3/4"></div>
          <div className="space-y-3">
             <div className="h-4 bg-muted rounded"></div>
             <div className="h-4 bg-muted rounded"></div>
             <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!post || post.status !== "published") {
    return (
      <PageLayout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">The post you are looking for doesn't exist or has been removed.</p>
          <Link to="/posts" className="text-primary font-medium hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to posts
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mb-8">
        <Link 
          to="/posts" 
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to posts
        </Link>
        
        <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.createdAt).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-foreground leading-[1.1]">
          {post.title}
        </h1>
      </div>

      <div 
        className="prose prose-lg prose-slate dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
        <div className="text-sm text-muted-foreground italic">
          Last updated: {new Date(post.updatedAt).toLocaleDateString()}
        </div>
        <Link to="/posts" className="text-primary font-bold hover:underline">
          More posts →
        </Link>
      </div>
    </PageLayout>
  );
}
