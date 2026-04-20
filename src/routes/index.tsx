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
      <div className="max-w-3xl py-8 px-4">
        <section className="mb-12 prose-content">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            I am a <strong>Computer Science Engineer and Bioinformatics Scientist</strong> leading the Bioinformatics area at 
            <strong> Cenicaña</strong> (Colombian Sugarcane Research Center). My work focuses on the genomics of complex polyploid 
            crops—especially sugarcane (<em>Saccharum spp.</em>)—specializing in large-scale genomic data analysis, 
            complex genome assembly, and the development of high-performance bioinformatics toolkits.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Explore my <Link to="/research" className="text-primary hover:underline">research</Link>, 
            view my <Link to="/publications" className="text-primary hover:underline">publications</Link>, or check out the 
            <Link to="/software" className="text-primary hover:underline">software toolkits</Link> I develop to support modern plant breeding.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            I am always open to discussing bioinformatics, plant genomics, or potential research collaborations. 
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
