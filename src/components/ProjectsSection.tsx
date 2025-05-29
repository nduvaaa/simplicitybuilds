
import ProjectCard, { ProjectProps } from './ProjectCard';

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and secure checkout system.",
      image: "  ",
      demoUrl: "#",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Corporate Website",
      description: "A professional website for a tech company featuring interactive UI and custom animations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      demoUrl: "#",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Booking System",
      description: "A SaaS platform for scheduling appointments with real-time availability updates.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      demoUrl: "#",
      technologies: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      title: "CRM Dashboard",
      description: "A customizable customer relationship management system with analytics and reporting.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      demoUrl: "#",
      technologies: ["React", "TypeScript", "Material UI", "GraphQL"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-company">
      <div className="container-custom">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>A selection of our recent work for clients across various industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Looking for a similar solution for your business? Contact us today to discuss your project requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
