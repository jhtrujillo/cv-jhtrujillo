import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function SiteHeader() {
  const { t } = useTranslation();

  const nav = [
    { to: "/publications", label: t("nav.publications") },
    { to: "/research", label: t("nav.research") },
    { to: "/teaching", label: t("nav.teaching") },
    { to: "/software", label: t("nav.software") },
    { to: "/posts", label: t("nav.posts") },
    { to: "/cv", label: t("nav.cv") },
  ] as const;

  return (
    <header className="border-b border-border bg-white sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-sans text-lg font-bold text-foreground hover:text-primary transition-colors">
          Jhon H. Trujillo Montenegro, Ph.D.
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-[14px] text-foreground font-semibold uppercase tracking-wider">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="py-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-all duration-200"
              activeProps={{ className: "border-primary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
