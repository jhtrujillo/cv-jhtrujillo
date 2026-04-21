import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { to: "/publications", label: t("publications") },
    { to: "/research", label: t("research") },
    { to: "/teaching", label: t("teaching") },
    { to: "/software", label: t("software") },
    { to: "/posts", label: t("blog") },
    { to: "/cv", label: t("cv") },
  ] as const;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="glass sticky top-0 z-50 border-b border-white/20 shadow-sm animate-reveal">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-heading text-[20px] md:text-[22px] font-extrabold text-primary hover:opacity-80 transition-all tracking-tight leading-tight">
          Jhon H. Trujillo <span className="hidden md:inline">Montenegro</span>, <span className="font-medium text-muted-foreground whitespace-nowrap">Ph.D.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-[13px] text-muted-foreground font-bold uppercase tracking-widest">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="py-1 relative group hover:text-primary transition-all duration-300"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary opacity-0 group-[.active]:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-primary hover:bg-white/20 rounded-xl transition-all duration-300 z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 rotate-90 transition-transform" /> : <Menu className="w-6 h-6 hover:scale-110" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`
        md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out
        ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
      `}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = 'unset';
              }}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`
                text-3xl font-heading font-bold text-primary hover:text-accent transition-all duration-300
                ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `}
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
