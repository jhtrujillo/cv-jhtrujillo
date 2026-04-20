import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

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

type Pub = { title: string; authors: string; venue: string; year: string; links?: { label: string; href: string }[] };

const journals: Pub[] = [
  {
    title: "Sequencing vs. amplification for the estimation of allele dosages in sugarcane (Saccharum spp.)",
    authors: "Jaimes, H., Londoño, A., Saavedra-Diaz, C., Trujillo-Montenegro, J. H., López-Gerena, J., Riascos, J. J., & Aguilar, F. S.",
    venue: "Applications in Plant Sciences",
    year: "2024",
    links: [{ label: "DOI", href: "https://doi.org/10.1002/aps3.11574" }],
  },
  {
    title: "Sparse testing designs for optimizing predictive ability in sugarcane populations",
    authors: "Garcia-Abadillo, J., Adunola, P., Aguilar, F. S., Trujillo-Montenegro, J. H., Riascos, J. J., Persa, R., … Jarquín, D.",
    venue: "bioRxiv",
    year: "2024",
    links: [{ label: "DOI", href: "https://doi.org/10.1101/2024.03.14.584687" }],
  },
  {
    title: "Assessing drought stress in sugarcane with gene expression and phenomic data using csi-oc",
    authors: "Riccio-Rengifo, C., Ramirez-Castrillon, M., Sosa, C. C., Aguilar, F. S., Trujillo-Montenegro, J. H., Riascos, J. J., … Rocha, C.",
    venue: "Industrial Crops and Products, 216, 118621",
    year: "2024",
  },
  {
    title: "Genetic association analysis in sugarcane (Saccharum spp.) for sucrose accumulation in humid environments in Colombia",
    authors: "Saavedra-Díaz, C., Trujillo-Montenegro, J. H., Jaimes, H. A., Londoño, A., Villareal, F. A. S., López, L. O., … Quevedo, Y. M. et al.",
    venue: "BMC Plant Biology, 24(1), 570",
    year: "2024",
  },
  {
    title: "Unraveling the genome of a high yielding Colombian sugarcane hybrid",
    authors: "Trujillo-Montenegro, J. H., Rodriguez Cubillos, M. J., Loaiza, C. D., Quintero, M., Espitia-Navarro, H. F., Salazar Villareal, F. A., … Riascos, J. J.",
    venue: "Frontiers in Plant Science, 12, 694859",
    year: "2021",
    links: [{ label: "DOI", href: "https://doi.org/10.3389/fpls.2021.694859" }],
  },
  {
    title: "Allele-defined genome of the autopolyploid sugarcane Saccharum spontaneum L.",
    authors: "Zhang, J., Zhang, X., Tang, H., Zhang, Q., Hua, X., Ma, X., … Bowers, J. et al.",
    venue: "Nature Genetics, 50(11), 1565–1573",
    year: "2018",
    links: [{ label: "DOI", href: "https://doi.org/10.1038/s41588-018-0237-2" }],
  },
];

const pending: Pub[] = [
  {
    title: "A closer look to the genetic base of sugarcane (Saccharum spp)",
    authors: "Trujillo-Montenegro, F. S. A.",
    venue: "In writing process",
    year: "2025",
  },
  {
    title: "Optimal whole genome sequencing for SNPs detection",
    authors: "Trujillo-Montenegro, S. F.",
    venue: "In writing process",
    year: "2025",
  },
];

const books: Pub[] = [
  {
    title: "Biotecnología para el mejoramiento de la caña de azúcar",
    authors: "Trujillo Montenegro, J. H., Martinez Villa, M. C., & Riascos Arcos, J. J.",
    venue: "Cali, Colombia: Centro de Investigación de la Caña de Azúcar de Colombia (Cenicaña)",
    year: "2024",
    links: [{ label: "Read online", href: "https://www.cenicana.org/wp-content/uploads/2024/02/CA-Biotecnologia-para-el-mejoramiento-de-la-cana-de-azucar-31-01-2024-FLIPBOOK.htm" }],
  },
];

const patents: Pub[] = [
  {
    title: "Methods and systems for quantifying the grade of petroleum oil based on fluorescence",
    authors: "Rengifo, R. C., Trujillo, J. H., & Castillo, J. M. R.",
    venue: "US Patent App. 14/892,367",
    year: "2016",
  },
  {
    title: "Compositions and methods for removing petroleum oil from soil",
    authors: "Rengifo, R. C., Trujillo, J. H., Castillo, J. M. R., & Palacios, M. C.",
    venue: "US Patent App. 14/892,226",
    year: "2016",
  },
  {
    title: "Methods and systems for detecting and quantifying petroleum oil based on fluorescence",
    authors: "Rengifo, R. C., Trujillo, J. H., Castillo, J. M. R., & Cubillos, N. Q.",
    venue: "US Patent App. 14/359,138",
    year: "2014",
  },
];

const presentations: Pub[] = [
  {
    title: "Integración de herramientas de genómica para entender la productividad en caña de azúcar (Saccharum spp.)",
    authors: "Saavedra-Díaz, C. S., Jaimes, H. A., & Trujillo-Montenegro, J. H.",
    venue: "XII Congreso Tecnicaña, Asociación Colombiana de Técnicos de la Caña — Cali, Colombia",
    year: "2023",
  },
  {
    title: "A consensus monoploid genome assembly of the sugarcane variety CC 01-1940, a high yielding Colombian sugarcane hybrid",
    authors: "Trujillo-Montenegro, J. H., Rodriguez Cubillos, M. J., Loaiza, C. D., Quintero, M., Espitia-Navarro, H. F., Salazar Villareal, F. A., … Duitama, J. et al.",
    venue: "ISSCT Molecular Biology Section, XXXI Congress — Hyderabad, India",
    year: "2023",
  },
  {
    title: "Ensamblaje del genoma de la variedad CC 01-1940, lo que hemos aprendido de su contenido genético",
    authors: "Trujillo-Montenegro, J. H. et al.",
    venue: "XII Congreso Tecnicaña — Cali, Colombia",
    year: "2023",
  },
  {
    title: "Unraveling the genome of a high yielding Colombian sugarcane hybrid",
    authors: "Trujillo, J. H., Duitama, J., Loaiza, C. D., Quintero, M., De Vega, J., & Riascos, J.",
    venue: "Plant and Animal Genome XXVI Conference — San Diego, CA, USA",
    year: "2018",
  },
];

function Item({ p }: { p: Pub }) {
  return (
    <div className="py-4 border-b border-border last:border-0">
      <h3 className="!mt-0 !mb-1 text-lg leading-snug">{p.title}</h3>
      <p className="!my-1 text-[15px] text-muted-foreground">{p.authors}</p>
      <p className="!my-1 text-[15px] italic">
        {p.venue} <span className="not-italic text-muted-foreground">· {p.year}</span>
      </p>
      {p.links && (
        <p className="!my-1 text-sm">
          {p.links.map((l, i) => (
            <span key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              {i < p.links!.length - 1 && <span className="text-muted-foreground"> · </span>}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

function Section({ title, items }: { title: string; items: Pub[] }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{items.map((p) => <Item key={p.title} p={p} />)}</div>
    </>
  );
}

function Publications() {
  return (
    <PageLayout>
      <h1 className="text-4xl mb-6">Publications</h1>
      <p>
        A complete and up-to-date list is also available on{" "}
        <a href="https://scholar.google.com/citations?user=lmq0jmcAAAAJ&hl" target="_blank" rel="noopener noreferrer">Google Scholar</a>,{" "}
        <a href="https://orcid.org/0000-0001-9336-584X" target="_blank" rel="noopener noreferrer">ORCID</a>, and{" "}
        <a href="https://www.researchgate.net/profile/Jhon-Trujillo" target="_blank" rel="noopener noreferrer">ResearchGate</a>.
      </p>
      <Section title="Journal articles" items={journals} />
      <Section title="Pending articles" items={pending} />
      <Section title="Books and chapters" items={books} />
      <Section title="Patents" items={patents} />
      <Section title="International presentations" items={presentations} />
    </PageLayout>
  );
}
