import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { useState } from "react";
import { Copy, Check, ExternalLink, Bookmark } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Jhon H. Trujillo" },
      { name: "description", content: "Peer-reviewed articles, books, chapters and patents by Jhon H. Trujillo Montenegro." },
      { property: "og:title", content: "Publications — Jhon H. Trujillo" },
      { property: "og:description", content: "Peer-reviewed articles, books, chapters and patents." },
    ],
  }),
  component: Publications,
});

type PubCategory = "Journal" | "Patent" | "Book" | "Presentation" | "Pending";

type Pub = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  category: PubCategory;
  links?: { label: string; href: string }[];
};

const allPublications: Pub[] = [
  {
    title: "Sequencing vs. amplification for the estimation of allele dosages in sugarcane (Saccharum spp.)",
    authors: "Jaimes, H., Londoño, A., Saavedra-Diaz, C., Trujillo-Montenegro, J. H., López-Gerena, J., Riascos, J. J., & Aguilar, F. S.",
    venue: "Applications in Plant Sciences",
    year: "2024",
    category: "Journal",
    links: [{ label: "DOI", href: "https://doi.org/10.1002/aps3.11574" }],
  },
  {
    title: "Sparse testing designs for optimizing predictive ability in sugarcane populations",
    authors: "Garcia-Abadillo, J., Adunola, P., Aguilar, F. S., Trujillo-Montenegro, J. H., Riascos, J. J., Persa, R., … Jarquín, D.",
    venue: "bioRxiv",
    year: "2024",
    category: "Journal",
    links: [{ label: "DOI", href: "https://doi.org/10.1101/2024.03.14.584687" }],
  },
  {
    title: "Assessing drought stress in sugarcane with gene expression and phenomic data using csi-oc",
    authors: "Riccio-Rengifo, C., Ramirez-Castrillon, M., Sosa, C. C., Aguilar, F. S., Trujillo-Montenegro, J. H., Riascos, J. J., … Rocha, C.",
    venue: "Industrial Crops and Products, 216, 118621",
    year: "2024",
    category: "Journal",
  },
  {
    title: "Genetic association analysis in sugarcane (Saccharum spp.) for sucrose accumulation in humid environments in Colombia",
    authors: "Saavedra-Díaz, C., Trujillo-Montenegro, J. H., Jaimes, H. A., Londoño, A., Villareal, F. A. S., López, L. O., … Quevedo, Y. M. et al.",
    venue: "BMC Plant Biology, 24(1), 570",
    year: "2024",
    category: "Journal",
  },
  {
    title: "Unraveling the genome of a high yielding Colombian sugarcane hybrid",
    authors: "Trujillo-Montenegro, J. H., Rodriguez Cubillos, M. J., Loaiza, C. D., Quintero, M., Espitia-Navarro, H. F., Salazar Villareal, F. A., … Riascos, J. J.",
    venue: "Frontiers in Plant Science, 12, 694859",
    year: "2021",
    category: "Journal",
    links: [{ label: "DOI", href: "https://doi.org/10.3389/fpls.2021.694859" }],
  },
  {
    title: "Allele-defined genome of the autopolyploid sugarcane Saccharum spontaneum L.",
    authors: "Zhang, J., Zhang, X., Tang, H., Zhang, Q., Hua, X., Ma, X., … Bowers, J. et al.",
    venue: "Nature Genetics, 50(11), 1565–1573",
    year: "2018",
    category: "Journal",
    links: [{ label: "DOI", href: "https://doi.org/10.1038/s41588-018-0237-2" }],
  },
  {
    title: "A closer look to the genetic base of sugarcane (Saccharum spp)",
    authors: "Trujillo-Montenegro, F. S. A.",
    venue: "In writing process",
    year: "2025",
    category: "Pending",
  },
  {
    title: "Optimal whole genome sequencing for SNPs detection",
    authors: "Trujillo-Montenegro, S. F.",
    venue: "In writing process",
    year: "2025",
    category: "Pending",
  },
  {
    title: "Biotecnología para el mejoramiento de la caña de azúcar",
    authors: "Trujillo Montenegro, J. H., Martinez Villa, M. C., & Riascos Arcos, J. J.",
    venue: "Cali, Colombia: Centro de Investigación de la Caña de Azúcar de Colombia (Cenicaña)",
    year: "2024",
    category: "Book",
    links: [{ label: "Read online", href: "https://www.cenicana.org/wp-content/uploads/2024/02/CA-Biotecnologia-para-el-mejoramiento-de-la-cana-de-azucar-31-01-2024-FLIPBOOK.htm" }],
  },
  {
    title: "Methods and systems for quantifying the grade of petroleum oil based on fluorescence",
    authors: "Rengifo, R. C., Trujillo, J. H., & Castillo, J. M. R.",
    venue: "US Patent App. 14/892,367",
    year: "2016",
    category: "Patent",
  },
  {
    title: "Compositions and methods for removing petroleum oil from soil",
    authors: "Rengifo, R. C., Trujillo, J. H., Castillo, J. M. R., & Palacios, M. C.",
    venue: "US Patent App. 14/892,226",
    year: "2016",
    category: "Patent",
  },
  {
    title: "Methods and systems for detecting and quantifying petroleum oil based on fluorescence",
    authors: "Rengifo, R. C., Trujillo, J. H., Castillo, J. M. R., & Cubillos, N. Q.",
    venue: "US Patent App. 14/359,138",
    year: "2014",
    category: "Patent",
  },
  {
    title: "Integración de herramientas de genómica para entender la productividad en caña de azúcar (Saccharum spp.)",
    authors: "Saavedra-Díaz, C. S., Jaimes, H. A., & Trujillo-Montenegro, J. H.",
    venue: "XII Congreso Tecnicaña, Asociación Colombiana de Técnicos de la Caña — Cali, Colombia",
    year: "2023",
    category: "Presentation",
  },
  {
    title: "A consensus monoploid genome assembly of the sugarcane variety CC 01-1940, a high yielding Colombian sugarcane hybrid",
    authors: "Trujillo-Montenegro, J. H., Rodriguez Cubillos, M. J., Loaiza, C. D., Quintero, M., Espitia-Navarro, H. F., Salazar Villareal, F. A., … Duitama, J. et al.",
    venue: "ISSCT Molecular Biology Section, XXXI Congress — Hyderabad, India",
    year: "2023",
    category: "Presentation",
  },
  {
    title: "Ensamblaje del genoma de la variedad CC 01-1940, lo que hemos aprendido de su contenido genético",
    authors: "Trujillo-Montenegro, J. H. et al.",
    venue: "XII Congreso Tecnicaña — Cali, Colombia",
    year: "2023",
    category: "Presentation",
  },
  {
    title: "Unraveling the genome of a high yielding Colombian sugarcane hybrid",
    authors: "Trujillo, J. H., Duitama, J., Loaiza, C. D., Quintero, M., De Vega, J., & Riascos, J.",
    venue: "Plant and Animal Genome XXVI Conference — San Diego, CA, USA",
    year: "2018",
    category: "Presentation",
  },
];

function generateBibTeX(p: Pub): string {
  const cleanId = p.title.split(" ").slice(0, 3).join("_").toLowerCase().replace(/[^a-z_]/g, "");
  const bibType = p.category === "Journal" ? "article" : p.category === "Patent" ? "misc" : "book";
  
  return `@${bibType}{trujillo_${cleanId}_${p.year},
  author = {${p.authors}},
  title = {${p.title}},
  journal = {${p.venue}},
  year = {${p.year}}${p.links?.[0]?.href ? `,\n  url = {${p.links[0].href}}` : ""}
}`;
}

function PubCard({ p }: { p: Pub }) {
  const [copied, setCopied] = useState(false);

  const copyBib = () => {
    navigator.clipboard.writeText(generateBibTeX(p));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBadgeColor = (cat: PubCategory) => {
    switch (cat) {
      case "Journal": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Patent": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Book": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Presentation": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl border border-border p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border ${getBadgeColor(p.category)}`}>
            {p.category}
          </span>
          <span className="text-muted-foreground text-sm font-bold">{p.year}</span>
        </div>

        <h3 className="font-serif text-xl md:text-2xl leading-tight text-primary mb-3 group-hover:text-accent transition-colors">
          {p.title}
        </h3>
        
        <p className="text-muted-foreground text-[15px] italic mb-4 leading-relaxed">
          {p.authors}
        </p>

        <div className="mt-auto space-y-4">
          <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-accent" />
            {p.venue}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {p.links?.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-accent hover:underline"
              >
                {l.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
            
            <button
              onClick={copyBib}
              className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-[12px] font-bold hover:bg-slate-100 transition-colors border border-slate-200"
              title="Copy BibTeX"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  BibTeX
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Publications() {
  const [activeFilter, setActiveFilter] = useState<PubCategory | "All">("All");

  const categories: (PubCategory | "All")[] = ["All", "Journal", "Patent", "Book", "Presentation", "Pending"];

  const filtered = activeFilter === "All" 
    ? allPublications 
    : allPublications.filter(p => p.category === activeFilter);

  return (
    <PageLayout>
      <div className="animate-reveal">
        <header className="mb-14">
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Publications</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Academic contributions to bioinformatics, genomics, and biotechnology. Also tracked on{" "}
            <a href="https://scholar.google.com/citations?user=lmq0jmcAAAAJ&hl" className="text-accent font-bold hover:underline">Scholar</a> and{" "}
            <a href="https://orcid.org/0000-0001-9336-584X" className="text-accent font-bold hover:underline">ORCID</a>.
          </p>
        </header>

        {/* --- Tabs --- */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white p-1.5 rounded-[2rem] shadow-sm border border-border inline-flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-2xl text-[13px] font-bold transition-all ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-slate-50"
              }`}
            >
              {cat === "All" ? "All Works" : `${cat}s`}
            </button>
          ))}
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <PubCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
