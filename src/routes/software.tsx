import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Zap, 
  Dna, 
  Layers, 
  Terminal,
  ExternalLink
} from "lucide-react";

// Custom GitHub Icon SVG to ensure compatibility and premium look
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

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
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: ["Java", "Python", "R", "PHP", "C++", "Bash", "SQL", "LaTeX"],
  },
  { 
    group: "Pipelines & DevOps", 
    icon: Cpu,
    color: "text-purple-600",
    bg: "bg-purple-50",
    items: ["Nextflow", "Docker", "Unix/Linux", "HPC Clusters"] 
  },
  { 
    group: "Web Development", 
    icon: Globe,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Apache/Tomcat"] 
  },
  { 
    group: "Databases", 
    icon: Database,
    color: "text-amber-600",
    bg: "bg-amber-50",
    items: ["PostgreSQL", "MySQL", "SQLite", "NoSQL"] 
  },
  { 
    group: "Bioinformatics", 
    icon: Dna,
    color: "text-rose-600",
    bg: "bg-rose-50",
    items: ["Genome Assembly", "Variant Calling", "GWAS", "Metagenomics", "Transcriptomics"] 
  }
];

function Software() {
  return (
    <PageLayout>
      <div className="animate-reveal">
        <header className="mb-14">
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Software & Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Developing high-performance computational solutions for complex biological systems, 
            focusing on polyploid genomics and plant breeding analytics.
          </p>
        </header>

        {/* --- Featured Project --- */}
        <section className="mb-20">
          <div className="relative group bg-primary text-white rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
               <Layers className="w-full h-full rotate-12 scale-150" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                  Flagship Toolkit
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white group-hover:translate-x-1 transition-transform duration-500">
                BioCenicana
              </h2>
              
              <p className="text-xl text-blue-100/90 leading-relaxed mb-10 font-medium">
                A high-performance CLI toolkit designed for polyploid crop genomics. 
                Engineered for extreme memory efficiency, BioCenicana processes massive genomic datasets 
                to provide elite-grade population genetics, kinship analysis, and SNP detection.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["Java 17+", "PicoCLI", "HPC Optimized", "Low Latency I/O"].map(tag => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/jhtrujillo/biocenicana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Grid --- */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl mb-10 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20" />
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.group} className="group p-8 rounded-[2rem] bg-white border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/40 transition-all flex flex-col items-start text-left">
                <div className={`p-4 rounded-2xl ${s.bg} ${s.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-primary mb-4 leading-tight">
                  {s.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="px-3 py-1 text-[12px] font-bold rounded-lg bg-slate-50 text-slate-600 border border-slate-100"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Open Source Section --- */}
        <section className="bg-slate-50 border border-slate-200 p-12 rounded-[3rem] flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl border border-border flex items-center justify-center mb-6 shadow-sm">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl text-primary mb-4">Open Source & Community</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            I actively contribute to tools and pipelines for the global bioinformatics community. 
            Detailed projects and experimental code are hosted on GitHub.
          </p>
          <a
            href="https://github.com/jhtrujillo"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-primary font-bold text-lg hover:underline"
          >
            Explore all repositories
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
