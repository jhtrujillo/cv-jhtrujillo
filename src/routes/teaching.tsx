import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching & Mentoring — Jhon H. Trujillo" },
      { name: "description", content: "Directed Master's theses and graduate mentoring in bioinformatics and genomics." },
      { property: "og:title", content: "Teaching & Mentoring — Jhon H. Trujillo" },
      { property: "og:description", content: "Directed Master's theses and graduate mentoring in bioinformatics." },
    ],
  }),
  component: Teaching,
});

const theses = [
  {
    year: "2026",
    level: "Master's Thesis",
    title:
      "Genome assembly, structural and functional annotation of orange rust (Puccinia kuehnii) and brown rust (Puccinia melanocephala), phytopathogens of sugarcane",
    student: "Angie Valeria Quiñones Olaya",
    institution: "Universidad del Valle, Colombia",
  },
  {
    year: "2026",
    level: "Master's Thesis",
    title:
      "Analysis of microbial and functional diversity present in sugarcane juices from three chopping qualities of mechanized harvesting",
    student: "Juanita Sierra Becerra",
    institution: "Universidad del Valle, Colombia",
  },
];

function Teaching() {
  return (
    <PageLayout>
      <h1 className="text-4xl mb-6">Teaching & Mentoring</h1>
      <p>
        Beyond my research at CENICAÑA, I supervise graduate students working at the interface of
        bioinformatics, genomics and plant pathology. Below is a list of currently directed theses.
      </p>

      <h2>Directed theses</h2>
      <div>
        {theses.map((t) => (
          <div key={t.title} className="py-4 border-b border-border last:border-0">
            <p className="!my-0 text-sm text-muted-foreground">
              {t.year} · {t.level}
            </p>
            <h3 className="!mt-1 !mb-1 text-lg leading-snug">{t.title}</h3>
            <p className="!my-0 text-[15px]">
              <strong>Student:</strong> {t.student}
              <br />
              <strong>Institution:</strong> {t.institution}
            </p>
          </div>
        ))}
      </div>

      <h2>Interests for collaboration</h2>
      <p>
        I'm open to co-supervising students or collaborating on projects related to polyploid genome
        assembly, SNP-based fingerprinting, genomic selection, GWAS, and metagenomics applied to crops.
        Feel free to <a href="mailto:jhtrujillomonte@gmail.com">reach out by email</a>.
      </p>
    </PageLayout>
  );
}
