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
      <div className="max-w-4xl py-8 px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">{t("home_about_me")}</h1>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              {t("home_short_bio")}
            </p>
            <p>
              {t("home_detailed_bio")}
            </p>
            <p>
              {t("home_technical_bio")}
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t("home_degrees")}</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-xl">{t("home_phd")}</h3>
                <p className="text-primary font-medium">{t("home_phd_uni")}</p>
                <p className="text-muted-foreground italic leading-relaxed">{t("home_phd_thesis")}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-xl">{t("home_undergrad")}</h3>
                <p className="text-primary font-medium">{t("home_undergrad_uni")}</p>
                <p className="text-muted-foreground italic leading-relaxed">{t("home_undergrad_thesis")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">{t("home_get_in_touch")}</h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            {t("home_contact_text")}
          </p>
          <a href="mailto:jhtrujillomonte@gmail.com" className="inline-flex items-center gap-3 text-primary text-xl font-bold hover:underline group">
             jhtrujillomonte@gmail.com
             <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
