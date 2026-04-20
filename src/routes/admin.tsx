import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { BlogEditor } from "@/components/BlogEditor";
import { getPosts, upsertPost, deletePost, Post } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Edit2, Plus, Trash2, ArrowLeft, Save, Globe, EyeOff } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);
  
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: () => getPosts(),
    enabled: isAuthenticated,
  });

  const saveMutation = useMutation({
    mutationFn: (post: any) => upsertPost({ data: post }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      toast.success("Post saved successfully!");
      setEditingPost(null);
    },
    onError: () => toast.error("Failed to save post."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deletePost({ data: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      toast.success("Post deleted.");
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified: Look for a hardcoded password or env
    // For now, let's use a placeholder 'admin123' if not specified
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      toast.error("Invalid password.");
    }
  };

  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="max-w-sm mx-auto mt-20">
          <h1 className="text-2xl mb-4 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </div>
      </PageLayout>
    );
  }

  if (editingPost) {
    return (
      <PageLayout>
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" onClick={() => setEditingPost(null)}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <h1 className="text-2xl font-bold">
            {editingPost.id ? "Edit Post" : "New Post"}
          </h1>
          <div className="ml-auto flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                const status = editingPost.status === "published" ? "draft" : "published";
                setEditingPost({ ...editingPost, status });
              }}
            >
              {editingPost.status === "published" ? (
                <><Globe className="w-4 h-4 mr-2" /> Published</>
              ) : (
                <><EyeOff className="w-4 h-4 mr-2" /> Draft</>
              )}
            </Button>
            <Button 
              disabled={saveMutation.isPending}
              onClick={() => {
                if (!editingPost.title || !editingPost.slug) {
                  toast.error("Title and Slug are required.");
                  return;
                }
                saveMutation.mutate(editingPost);
              }}
            >
              <Save className="w-4 h-4 mr-2" /> Save Post
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={editingPost.title || ""}
                onChange={(e) => {
                  const title = e.target.value;
                  const slug = editingPost.id ? editingPost.slug : slugify(title);
                  setEditingPost({ ...editingPost, title, slug });
                }}
                placeholder="Post title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Slug</label>
              <Input
                value={editingPost.slug || ""}
                onChange={(e) => setEditingPost({ ...editingPost, slug: slugify(e.target.value) })}
                placeholder="URL slug"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Category</label>
              <select
                value={editingPost.category || "General"}
                onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="Bioinformatics">Bioinformatics</option>
                <option value="Genomics">Genomics</option>
                <option value="Breeding">Plant Breeding</option>
                <option value="Software">Software</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Excerpt (Summary)</label>
            <Input
              value={editingPost.excerpt || ""}
              onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
              placeholder="Short summary for the list"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <BlogEditor
              content={editingPost.content || ""}
              onChange={(html) => setEditingPost({ ...editingPost, content: html })}
            />
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button onClick={() => setEditingPost({ status: "draft", title: "", slug: "", content: "" })}>
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted text-muted-foreground font-medium border-b">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {isLoading ? (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">Loading posts...</td></tr>
            ) : posts?.length === 0 ? (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No posts yet.</td></tr>
            ) : (
              posts?.map((post) => (
                <tr key={post.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium">{post.title}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      post.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => setEditingPost(post)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        if (confirm("Delete this post?")) deleteMutation.mutate(post.id);
                      }}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
