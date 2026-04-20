import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { getPosts } from "@/lib/posts";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ChevronRight, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Route = createFileRoute("/posts")({
  head: () => ({
    meta: [
      { title: "Blog — Jhon H. Trujillo" },
      { name: "description", content: "Insights on bioinformatics, genomics, and agricultural technology." },
    ],
  }),
  component: Posts,
});

function Posts() {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  const categories = ["All", "Bioinformatics", "Genomics", "Breeding", "Software"];

  const filteredPosts = posts?.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return post.status === "published" && matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("nav.posts")}</h1>
          <p className="text-muted-foreground text-lg italic border-l-4 border-primary/20 pl-4 mb-10">
            Notes and insights on bioinformatics, genomics, and the pursuit of reproducible research.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("posts.search_placeholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-2xl border border-border bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {cat === "All" ? t("posts.all_categories") : cat}
              </button>
            ))}
          </div>
        </header>

        {filteredPosts?.length ? (
          <div className="grid gap-16">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 text-[12px] font-bold uppercase tracking-widest text-primary">
                      <span className="bg-primary/10 px-2.5 py-1 rounded-md">
                        {post.category || "General"}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.createdAt).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <Link
                      to={`/posts/${post.slug}`}
                      className="block hover:text-primary transition-colors mb-4"
                    >
                      <h2 className="text-3xl font-bold leading-tight group-hover:translate-x-1 transition-transform inline-flex items-center gap-3">
                        {post.title}
                        <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                      </h2>
                    </Link>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/posts/${post.slug}`}
                      className="inline-flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1"
                    >
                      Read full story
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-secondary/30 rounded-3xl border border-dashed border-border mt-12">
            <p className="text-muted-foreground italic text-lg">{t("posts.no_posts")}</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
