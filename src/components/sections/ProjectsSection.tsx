import { SectionHeader, Card } from "../ui";
import { CheckIcon, ArrowUpRightIcon } from "../icons";
import projet11Image from "../../assets/images/projet11.png";
import seoImage from "../../assets/images/SEO.png";

const portfolioProjects = [
  {
    company: "Qwenta",
    year: "2025",
    title: "Projet Menu Maker",
    results: [
      { title: "Planification stratégique du projet." },
      { title: "Élaboration des spécifications techniques." },
      { title: "Gestion Agile via tableau Kanban." },
    ],
    link: "https://vaporisateur.github.io/Portfolio/Menu_Maker.pdf",
    image: projet11Image,
    linkText: "Voir le projet",
  },
  {
    company: "Photographe Nina Carducci",
    year: "2025",
    title: "Optimisation SEO",
    results: [
      { title: "Audit complet du site" },
      { title: "Optimisation des mots-clés" },
      { title: "Amélioration de la vitesse de chargement" },
    ],
    link: "https://vaporisateur.github.io/ninacarducci.github.io-main/",
    image: seoImage,
    linkText: "Visiter le site",
  },
  {
    company: "ArgentBank",
    year: "2025",
    title: "Application bancaire",
    results: [
      { title: "Refonte complète de l'application" },
      { title: "Intégration de services bancaires sécurisés" },
      { title: "Mise en place d'une authentification forte" },
    ],
    link: "https://argent-bank-frontend-b8ad9xoa8-fabiens-projects-12f14379.vercel.app/",
    image: projet11Image,
    linkText: "Visiter le site",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          heading1="Résultats Concrets"
          heading2="Projets en Vedette"
          paragraph="Découvrez comment j'ai transformé des concepts en expériences digitales engageantes."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(${64 + index * 40}px)`,
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-8">
                  <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest md:tracking-normal text-sm md:text-base">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl lg:max-w-sm mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                  <ul className="mt-4 md:mt-5 flex flex-col gap-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="inline-flex gap-2 text-white/50 font-light text-sm md:text-base">
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto md:px-6 my-8 font-semibold inline-flex items-center justify-center gap-2">
                      <span>{project.linkText}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border-2 border-white/10 rounded-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
