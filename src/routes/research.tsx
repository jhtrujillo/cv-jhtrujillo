import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { 
  Dna, 
  Search, 
  LineChart, 
  Microscope,
  Database,
  ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Jhon H. Trujillo" },
      { name: "description", content: "Genomics of complex polyploid crops, NGS data analysis, and bioinformatics for plant breeding." },
      { property: "og:title", content: "Research — Jhon H. Trujillo" },
      { property: "og:description", content: "Genomics of complex polyploid crops, NGS data analysis and bioinformatics." },
    ],
  }),
  component: Research,
});

const researchLines = [
  {
    title: "Complex Polyploid Assembly",
    icon: Dna,
    color: "text-blue-600",
    bg: "bg-blue-50",
    description: "Assembly and structural characterization of large, highly heterozygous polyploid genomes. Work includes the high-yielding sugarcane hybrid (CC 01-1940) and key sugarcane phytopathogens like Orange and Brown Rust (Puccinia spp.)."
  },
  {
    title: "Precision Fingerprinting",
    icon: Search,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    description: "Construction of molecular fingerprints using high-density SNP markers. I focus on developing tools like BioCenicana to handle the massive data and memory requirements characteristic of polyploid crop populations."
  },
  {
    title: "Genomic Selection & GWAS",
    icon: LineChart,
    color: "text-purple-600",
    bg: "bg-purple-50",
    description: "Integration of genomics with phenotypic data through Genome-Wide Association Studies and predictive modeling. Utilizing sparse testing designs to optimize breeding pipelines and variety development."
  },
  {
    title: "Pathogen Genomics",
    icon: Microscope,
    color: "text-rose-600",
    bg: "bg-rose-50",
    description: "Decoding the genetic makeup of sugarcane threats to develop resistant varieties. Ongoing research focuses on understanding the molecular interactions between host and pathogen in tropical environments."
  }
];

function Research() {
  return (
    <PageLayout>
      <div className="animate-reveal">
        <header className="mb-14">
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Research</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium border-l-4 border-slate-200 pl-8 ml-2">
            Pioneering computational strategies to decode the complexity of 
            <span className="text-primary font-bold"> polyploid crops</span> and drive the future of sustainable sugarcane breeding.
          </p>
        </header>

        {/* --- Central Motif Section --- */}
        <section className="relative mb-24 px-8 py-20 rounded-[3rem] overflow-hidden bg-slate-900 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
                <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="0.5" />
             </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Research Philosophy</h2>
            <div className="space-y-6 text-xl text-blue-100/80 leading-relaxed italic">
               <p>
                 "My research lies at the intersection of computer science, genomics, and plant breeding. 
                 By developing specialized algorithms for high-polyploidy environments, we unlock 
                 complex genetic signals that traditional bioinformatic tools often miss."
               </p>
            </div>
          </div>
        </section>

        {/* --- Research Lines Grid --- */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/20" />
            Core Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchLines.map((line) => (
              <div key={line.title} className="group flex flex-col items-start p-10 rounded-[2.5rem] bg-white border border-border hover:border-accent/40 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                <div className={`p-5 rounded-2xl ${line.bg} ${line.color} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                   <line.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-5 leading-tight">
                  {line.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow font-medium">
                  {line.description}
                </p>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Collaboration Footer --- */}
        <section className="bg-primary/5 p-12 rounded-[3rem] border border-primary/10 flex flex-col items-center text-center">
           <Database className="w-12 h-12 text-primary/40 mb-6" />
           <h2 className="font-serif text-2xl text-primary mb-4">Integrative Science</h2>
           <p className="text-muted-foreground text-[15px] max-w-xl leading-relaxed mb-8 italic">
             All my research developments are deeply integrated with the breeding and biotechnology units 
             at <strong>Centro de Investigación de la Caña de Azúcar de Colombia (Cenicaña)</strong>.
           </p>
           <a href="/publications" className="text-primary font-extrabold uppercase tracking-widest text-[12px] hover:underline">
             Explore Scientific Outputs →
           </a>
        </section>
      </div>
    </PageLayout>
  );
}
