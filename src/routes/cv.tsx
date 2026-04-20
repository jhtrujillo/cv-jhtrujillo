import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Jhon H. Trujillo Montenegro, Ph.D." },
      { name: "description", content: "Curriculum vitae of Jhon H. Trujillo Montenegro: education, positions, awards, and publications." },
      { property: "og:title", content: "CV — Jhon H. Trujillo Montenegro, Ph.D." },
      { property: "og:description", content: "Education, positions, awards and publications." },
    ],
  }),
  component: CV,
});

function Row({ left, right, sub }: { left: string; right: string; sub?: React.ReactNode }) {
  return (
    <div className="py-3 border-b border-border last:border-0 grid grid-cols-[1fr_auto] gap-4">
      <div>
        <p className="!my-0 font-medium">{left}</p>
        {sub && <div className="text-[15px] text-muted-foreground !mt-1">{sub}</div>}
      </div>
      <span className="text-muted-foreground text-sm whitespace-nowrap">{right}</span>
    </div>
  );
}

function CV() {
  return (
    <PageLayout>
      <h1 className="text-4xl mb-2">Curriculum Vitae</h1>
      <p className="text-muted-foreground">
        A <a href="/cv-jhtrujillo.pdf" target="_blank" rel="noopener noreferrer">PDF version</a> is also available.
      </p>

      <h2>Summary</h2>
      <p>
        Computer Science Engineer and Bioinformatics Scientist with over 12 years of experience in
        biotechnology and computational approaches for genetic improvement. Specialized in complex
        polyploid crops, particularly sugarcane, with strong expertise in genomic data analysis and
        integration. Extensive experience in genetic characterization, complex genome assembly, and
        next-generation sequencing (NGS) data analysis. Demonstrated leadership in coordinating
        scientific initiatives that bridge computational and biological domains to support breeding
        programs.
      </p>

      <h2>Education</h2>
      <Row
        left="Ph.D. in Computer Science — Universidad del Valle, Cali, Colombia"
        right="2012 – 2020"
        sub={
          <>
            Thesis: <em>Genome assembly of a hybrid sugarcane (Saccharum spp.) and construction of
            molecular fingerprint using High Performance Sequencing</em>. <strong>Meritorial doctoral thesis.</strong>
            <br />
            International internship: Earlham Institute, Norwich, England.
            <br />
            Full scholarship by Colciencias–Colfuturo.
          </>
        }
      />
      <Row
        left="B.S. in Computer Science — Universidad Javeriana, Cali, Colombia"
        right="2002 – 2009"
        sub={<em>Thesis: Design of a 2D Coordinate Capture Library of Human Movements.</em>}
      />

      <h2>Professional experience</h2>
      <Row
        left="Bioinformatics Area Leader — CENICAÑA (Colombian Sugarcane Research Center)"
        right="2016 – present"
        sub="Development of bioinformatic tools to select the best varieties of sugarcane, including the first assembly of a Colombian sugarcane hybrid and the construction of a molecular fingerprint using SNP markers and NGS data. Active projects in genomic selection, metagenomics, viral and pathogen genome assembly, GWAS, genetic diversity, mapping and variant detection."
      />
      <Row
        left="Research Assistant in Bioinformatics — Unión Temporal Gebix, Cali, Colombia"
        right="2015 – 2016"
        sub="Improvement of a Java library using NGS data of human samples to compute the fractal dimension necessary to identify breast cancer."
      />
      <Row
        left="Research Assistant — International Park of Creativity, Manizales, Colombia"
        right="2008 – 2015"
        sub="Computational models for biological systems using neural networks to predict the presence of petroleum oil in the field."
      />
      <Row
        left="Consultant in Science and Technology — Axure Technologies S.A., Bogotá, Colombia"
        right="2014"
        sub="Development of an optical sensor to detect petroleum oil; predictive models using neural networks and design of optical devices."
      />

      <h2>Honors and awards</h2>
      <Row
        left="Recognition by the Organization of American States (OAS / OEA)"
        right="2012"
        sub="Contribution to technological and economic development through research for developing countries. San Antonio, TX, USA."
      />
      <Row
        left="Invited by the Chamber of Commerce, USA"
        right="2012"
        sub="Junior scientist — patent: Methods and systems for detecting and quantifying petroleum oil based on fluorescence. Washington DC, USA."
      />
      <Row
        left="Recognition by the United States Senate"
        right="2010"
        sub="Invention in petroleum oil sensor — Recognition of Scholastic Achievement, Senator Richard G., Indianapolis, Indiana, USA."
      />
      <Row
        left="Recognition by the Massachusetts Institute of Technology (MIT)"
        right="2007, 2010"
        sub="Scientific competitions in Synthetic Biology and Computational Modeling. Cambridge, MA, USA."
      />

      <h2>Referees</h2>
      <Row
        left="John J. Riascos, Ph.D."
        right="CENICAÑA"
        sub={<>Director of the breeding program, Colombian Sugarcane Research Center · <a href="mailto:jjriascos@cenicana.org">jjriascos@cenicana.org</a></>}
      />
      <Row
        left="José De Vega, Ph.D."
        right="Earlham Institute"
        sub={<>Main researcher, Norwich Research Park, United Kingdom · <a href="mailto:jose.devega@earlham.ac.uk">jose.devega@earlham.ac.uk</a></>}
      />
      <Row
        left="Jorge Duitama, Ph.D."
        right="Universidad de los Andes"
        sub={<>Assistant professor, Systems and Computing Engineering Department, Bogotá, Colombia · <a href="mailto:ja.duitama@uniandes.edu.co">ja.duitama@uniandes.edu.co</a></>}
      />
    </PageLayout>
  );
}
