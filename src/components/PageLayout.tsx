import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { ProfileSidebar } from "./ProfileSidebar";

export function PageLayout({
  children,
  showSidebar = true,
  toc,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  toc?: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {showSidebar && <ProfileSidebar />}
          <div className="flex-1 min-w-0 flex gap-12">
            <article className="flex-1 min-w-0 prose-content">{children}</article>
            {toc && <div className="hidden lg:block w-64 shrink-0">{toc}</div>}
          </div>
        </div>
      </main>
      <footer className="border-t border-border mt-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-8 text-[14px] text-muted-foreground flex flex-col md:flex-row md:justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Jhon Henry Trujillo Montenegro</span>
          <span>Powered by React & Tailwind CSS</span >
        </div>
      </footer>
    </div>
  );
}

export function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="sticky top-24 rounded-md border border-border bg-card overflow-hidden text-sm">
      <div
        className="px-3 py-2 font-semibold text-[13px] uppercase tracking-wide"
        style={{ background: "var(--toc-bg)", color: "var(--toc-foreground)" }}
      >
        ☰ On This Page
      </div>
      <ul className="p-3 space-y-1.5">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="text-primary hover:underline">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
