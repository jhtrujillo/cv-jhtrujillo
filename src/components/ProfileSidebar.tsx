import { Mail, GraduationCap, BookOpen, Code2, Briefcase, Microscope, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ProfileSidebar() {
  const { t } = useTranslation();

  const links = [
    { icon: Mail, label: "Email", href: "mailto:jhtrujillomonte@gmail.com", color: "#D44638" },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.703 1.415 2.735 1.066 5.313c-.203 1.5-.254 3.7-.254 5.303 0 1.6.05 3.8.254 5.303.345 2.578 2.612 4.61 5.304 5.004.453.051 2.378.309 5.441.309 3.062 0 4.988-.258 5.441-.309 2.688-.394 4.954-2.426 5.304-5.004.203-1.5.254-3.7.254-5.303 0-1.603-.05-3.803-.254-5.303zM17.52 14.33c-.564 1.134-2.822 1.638-5.707 1.638-2.885 0-5.143-.504-5.707-1.638-.135-.262-.162-.577-.162-.892 0-1.12.913-2.03 2.035-2.03 1.12 0 2.035.91 2.035 2.03v.25c0 .341.28.625.625.625h2.344c.346 0 .625-.284.625-.625v-.25c0-1.12.914-2.03 2.035-2.03 1.122 0 2.036.91 2.036 2.03 0 .315-.027.63-.163.892z" />
      </svg>
    ), label: "Mastodon", href: "https://fosstodon.org/@jhtrujillo", color: "#6364FF" },
    { icon: Code2, label: "GitHub", href: "https://github.com/jhtrujillo", color: "#181717" },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.72L12 15z m-9.45-8.59L12 1.3 10.8 5.8z m-1.2 0L2.27 9.73l1.19 3.66z m3.6 0L21.73 9.73l-1.19 3.66z m-1.2 0L12 15l-4.8-9.2z" />
      </svg>
    ), label: "GitLab", href: "https://gitlab.com/jhtrujillo", color: "#FC6D26" },
    { icon: Briefcase, label: "LinkedIn", href: "https://www.linkedin.com/in/jhtrujillomonte/", color: "#0077B5" },
    { icon: GraduationCap, label: "Google Scholar", href: "https://scholar.google.com/citations?user=lmq0jmcAAAAJ&hl", color: "#4285F4" },
    { icon: BookOpen, label: "ORCID", href: "https://orcid.org/0000-0001-9336-584X", color: "#A6CE39" },
    { icon: Microscope, label: "ResearchGate", href: "https://www.researchgate.net/profile/Jhon-Trujillo", color: "#00CCBB" },
    { icon: FileText, label: t("sidebar.cv_pdf"), href: "/cv-jhtrujillo.pdf", color: "#D32F2F" },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="lg:sticky lg:top-24 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="w-48 h-48 rounded-full bg-secondary border border-border shadow-sm flex items-center justify-center text-5xl font-bold text-muted-foreground mb-4 overflow-hidden">
           <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="font-sans text-[22px] font-bold leading-tight text-foreground">
          Jhon Henry Trujillo Montenegro
        </h2>
        <p className="text-[15px] text-foreground mt-1 mb-6 leading-snug">
          {t("sidebar.phd")}<br />
          {t("sidebar.leader")}<br />
          {t("sidebar.location")}
        </p>
        <ul className="space-y-1.5 text-[14px] w-full">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors justify-center lg:justify-start py-1 group"
              >
                <span style={{ color: l.color }} className="shrink-0 transition-transform group-hover:scale-110 duration-200">
                  {typeof l.icon === 'function' ? <l.icon /> : <l.icon className="w-[18px] h-[18px]" />}
                </span>
                <span className="font-medium">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
