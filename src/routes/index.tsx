import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jhon H. Trujillo Montenegro, Ph.D. — Bioinformatics" },
      { name: "description", content: "Personal site of Jhon H. Trujillo Montenegro, Ph.D. — Bioinformatics Area Leader at CENICAÑA, working on genomics of complex polyploid crops." },
      { property: "og:title", content: "Jhon H. Trujillo Montenegro, Ph.D." },
      { property: "og:description", content: "Bioinformatics Area Leader at CENICAÑA. Genomics of sugarcane and complex polyploid crops." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="animate-reveal">
        {/* --- Hero Section --- */}
        <section className="relative px-6 md:px-12 py-10 md:py-20 mb-12 md:mb-16 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden hero-pattern border border-border shadow-inner">
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl mb-6 text-primary leading-[1.1] md:leading-tight">
              Bridging <span className="italic font-normal">Computation</span> & <span className="italic font-normal">Biology</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed mb-8 md:mb-10">
              {t("home_short_bio")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/research" 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1 text-center"
              >
                Explore Research
              </Link>
              <a 
                href="mailto:jhtrujillomonte@gmail.com" 
                className="bg-white text-primary border border-border px-8 py-4 rounded-2xl font-bold hover:shadow-md transition-all hover:-translate-y-1 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          {/* Abstract biological motif (subtle DNA-like line) */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 100 800" className="w-full h-full text-primary">
              <path d="M10,0 Q90,200 10,400 T10,800" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
              <path d="M90,0 Q10,200 90,400 T90,800" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </section>

        <div className="max-w-4xl px-4">
          {/* --- Biography --- */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20" />
              About Me
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-slate-600 font-medium">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                {t("home_detailed_bio")}
              </p>
              <p className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic">
                {t("home_technical_bio")}
              </p>
            </div>
          </section>

          {/* --- Education --- */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/20" />
              {t("home_degrees")}
            </h2>
            <div className="grid gap-8">
              <div className="group relative p-8 rounded-[2rem] bg-white border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-xl group-hover:bg-accent group-hover:text-white transition-colors">
                    1
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-extrabold text-2xl text-primary">{t("home_phd")}</h3>
                    <p className="text-accent font-bold text-lg uppercase tracking-wide">{t("home_phd_uni")}</p>
                    <p className="text-muted-foreground italic leading-relaxed text-lg">{t("home_phd_thesis")}</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative p-8 rounded-[2rem] bg-white border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-xl group-hover:bg-accent group-hover:text-white transition-colors">
                    2
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-extrabold text-2xl text-primary">{t("home_undergrad")}</h3>
                    <p className="text-accent font-bold text-lg uppercase tracking-wide">{t("home_undergrad_uni")}</p>
                    <p className="text-muted-foreground italic leading-relaxed text-lg">{t("home_undergrad_thesis")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Contact --- */}
          <section className="bg-primary text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl mb-6 text-white">{t("home_get_in_touch")}</h2>
              <p className="text-blue-100 mb-10 text-xl max-w-xl leading-relaxed">
                {t("home_contact_text")}
              </p>
              <a 
                href="mailto:jhtrujillomonte@gmail.com" 
                className="inline-flex items-center gap-4 text-white text-2xl font-bold bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl transition-all"
              >
                 jhtrujillomonte@gmail.com
                 <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
