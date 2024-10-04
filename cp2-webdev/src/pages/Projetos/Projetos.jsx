import ProjetosCard from './ProjetosCard';

function Projetos() {
  const projects = [
    {
      id: "project-1",
      title: "AirBnb site copy",
      image: "/images/airbnb.png", 
      description: "Este site foi desenvolvido como um aprendizado para usar tecnologias, copiando o site do airbnb, utilizando flex, e responsivos.",
      tags: ["HTML", "CSS"],
      codeLink: "https://github.com/fujita022/CheckPoint-2semestre-Frontend",
      liveLink: "https://check-point-2semestre-frontend.vercel.app/"
    },
    {
      id: "project-2",
      title: "Site",
      image: "/images/crievideos.png", 
      description: "Site utilizando props e react.",
      tags: ['HTML', 'CSS', 'React'],
      codeLink: "https://github.com/fujita022/CheckPoint-2semestre-WebDev",
      liveLink: "https://vercel.com/fujita022s-projects/check-point-2semestre-web-dev-2gle"
    },
    {
      id: "project-3",
      title: "MarketMobi",
      image: "/images/mktmobi.png", 
      description: "MarketMobi é um projeto pessoal desenvolvido para uma startup pessoal. Onde busco conhecimentos com marketing e vendas, usando a tecnologia farei disso uma ferramenta poderosa.",
      tags: ['HTML', 'MongoDB', 'CSS', 'React'],
      codeLink: "https://github.com/fujita022/marketmobi",
      liveLink: "https://marketmobi.vercel.app/"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjetosCard
            key={index}
            id={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            tags={project.tags}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;
