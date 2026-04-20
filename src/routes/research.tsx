import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Jhon H. Trujillo" },
      { name: "description", content: "Genomics of complex polyploid crops, NGS data analysis, and bioinformatics for plant breeding." },
    ],
  }),
  component: Research,
});

function Research() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">{t("nav.research")}</h1>
        
        <div className="prose prose-slate max-w-none mb-16">
          <p className="text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-6 mb-12">
            My research lies at the intersection of <strong>computer science, genomics and plant breeding</strong>,
            with a strong focus on complex polyploid crops — especially sugarcane (<em>Saccharum spp.</em>).
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-16 pb-2 border-b border-border">Lines of work</h3>
          
          <div className="grid gap-10">
            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Complex genome assembly</h4>
              <p className="text-muted-foreground leading-relaxed">
                Assembly and structural characterization of large, highly heterozygous polyploid genomes,
                including the first assembly of a Colombian sugarcane hybrid (variety CC 01-1940) and ongoing
                work on phytopathogens such as <em>Puccinia kuehnii</em> (orange rust) and <em>Puccinia melanocephala</em> (brown rust).
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Molecular fingerprinting and SNP discovery</h4>
              <p className="text-muted-foreground leading-relaxed">
                Construction of molecular fingerprints using SNP markers derived from Next-Generation Sequencing
                data. Developed the <strong>BioCenicana</strong> toolkit specifically to handle the massive data and memory requirements of these analyses in polyploid contexts.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-3">Genomic selection and GWAS</h4>
              <p className="text-muted-foreground leading-relaxed">
                Genome-wide association studies (GWAS), genomic prediction, and integration of genomic and
                phenotypic data to support breeding pipelines using sparse testing designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
