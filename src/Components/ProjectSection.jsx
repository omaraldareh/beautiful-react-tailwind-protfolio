import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
{
  id: 1,
  title: "Venora - Hall Booking System",
  description: "Full-stack hall booking platform with role-based authentication and provider approval system. If the demo is temporarily unavailable, please refresh the page.",
  image: "/Projects/Venora.png",
  tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  demoUrl: "https://venora-plum.vercel.app/",
  githubFrontend: "https://github.com/omaraldareh/Venora-Frontend",
  githubBackend: "https://github.com/omaraldareh/Venora-Project",
},
{
  id: 2,
  title: "To-Do List App",
  description: "Task management app built with vanilla JavaScript using localStorage.",
  image: "/Projects/To-Do-List.png",
  tags: ["HTML", "CSS", "JavaScript"],
  demoUrl: "https://strong-marzipan-416361.netlify.app/",
  githubUrl: "#",
},
{
  id: 3,
  title: "E-Shopify - Modern E-Commerce UI",
  description: "A sleek, responsive e-commerce landing page focused on modern aesthetic and seamless user experience. Featuring interactive product galleries and a clean, mobile-first design.",
  image: "/Projects/E-Shopify.png",
  tags: ["React", "Tailwind CSS", "Lucide React", "Responsive Design"],
  demoUrl: "https://e-shopifybyme.netlify.app/",
  githubUrl: "https://github.com/React-Projects-Jordam/E-Shopify",
},
{
  id: 4,
  title: "BookShop Mobile App",
  description: "Flutter mobile app for browsing books and managing a shopping cart.",
  image: "/Projects/BookShop.jpg",
  tags: ["Flutter", "Dart"],
  demoUrl: "#",
  githubUrl: "#",
},
{
  id: 5,
  title: "Interactive Quiz Application",
  description: "A dynamic quiz platform built with jQuery, featuring real-time score calculation, progress tracking, and interactive feedback using SweetAlert2. Focused on smooth DOM manipulation and state management.",
  image: "/Projects/QuizApp.png",
  tags: ["JavaScript", "jQuery", "CSS", "SweetAlert2"],
  demoUrl: "https://quiz-oooo.netlify.app/",
  githubUrl: "https://github.com/omaraldareh/Quiz-App/blob/main/script.js",
},
{
  id: 6,
  title: "Image Slider",
  description: "Dynamic image slider with navigation controls and smooth transitions.",
  image: "/Projects/Slider.png",
  tags: ["HTML", "CSS", "JavaScript"],
  demoUrl: "https://tranquil-donut-83bda9.netlify.app/",
  githubUrl: "#",
},
];


export const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    {project.githubFrontend && project.githubBackend ? (
                      <div className="flex gap-2">
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 border rounded hover:text-primary hover:border-primary transition-colors"
                        >
                          Frontend
                        </a>

                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 border rounded hover:text-primary hover:border-primary transition-colors"
                        >
                          Backend
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/omaraldareh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};