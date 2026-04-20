import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/software")({
  head: () => ({
    meta: [
      { title: "Software & Skills — Jhon H. Trujillo" },
      { name: "description", content: "Bioinformatics tools, programming languages and technical skills." },
      { property: "og:title", content: "Software & Skills — Jhon H. Trujillo" },
      { property: "og:description", content: "Bioinformatics tools, programming languages and technical skills." },
    ],
  }),
  component: Software,
});

const skills = [
  {
    group: "Programming",
    items: ["Java", "PHP", "C++", "Python", "R", "Bash", "SQL", "XML/XSL", "LaTeX"],
  },
  { group: "Pipelines & DevOps", items: ["Nextflow", "Docker", "Unix/Linux"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
  {
    group: "Web development",
    items: ["HTML", "CSS", "JavaScript", "Apache Web Server", "Tomcat Web Server"],
  },
  {
    group: "Bioinformatics domains",
    items: [
      "Genome assembly (polyploid)",
      "NGS variant calling",
      "GWAS",
      "Genomic selection",
      "Metagenomics",
      "Transcriptomics",
      "Functional annotation",
    ],
  },
  { group: "Languages", items: ["Spanish (native)", "English (proficient)"] },
];

function Software() {
  return (
    <PageLayout>
      <h1 className="text-4xl mb-6">Software & Skills</h1>
      <p>
        I develop bioinformatic tools and pipelines that support sugarcane breeding at CENICAÑA — from
        SNP-based molecular fingerprinting up to polyploid genome assembly, GWAS and metagenomics.
      </p>

      <section className="my-10 bg-secondary/30 rounded-xl border border-border p-8">
        <div className="flex items-center gap-2 mb-4 text-primary font-bold tracking-wider text-xs uppercase">
          <span className="px-2 py-0.5 bg-primary/10 rounded-full">Featured Project</span>
        </div>
        <h2 className="!mt-0 !mb-4 text-3xl">BioCenicana</h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          A high-performance, streaming bioinformatics CLI toolkit designed for the complex genomics
          of polyploid crops. It handles massive VCF files with extreme memory efficiency,
          providing elite-grade population genetics and kinship analysis.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="text-xs font-semibold px-2 py-1 bg-background rounded border border-border">Java 11+</span>
          <span className="text-xs font-semibold px-2 py-1 bg-background rounded border border-border">PicoCLI</span>
          <span className="text-xs font-semibold px-2 py-1 bg-background rounded border border-border">Plotly.js</span>
          <span className="text-xs font-semibold px-2 py-1 bg-background rounded border border-border">Stream-based I/O</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jhtrujillo/biocenicana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <h2>Technical skills</h2>
      <div>
        {skills.map((s) => (
          <div key={s.group} className="py-4 border-b border-border last:border-0">
            <h3 className="!mt-0 !mb-2 text-lg">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="px-2.5 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>Open source</h2>
      <p>
        Selected code and pipelines are available on{" "}
        <a href="https://github.com/jhtrujillo" target="_blank" rel="noopener noreferrer">
          GitHub (@jhtrujillo)
        </a>.
      </p>
    </PageLayout>
  );
}
