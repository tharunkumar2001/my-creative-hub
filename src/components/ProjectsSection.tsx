import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Shopify",
    description: "A full-featured Shopify store with custom theme, product filtering, and optimized checkout experience.",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
    color: "from-amber-500/20 to-orange-600/10",
  },
  {
    title: "Fitness Tracker App",
    category: "Android",
    description: "Native Android app with workout tracking, progress analytics, and social features for fitness enthusiasts.",
    tags: ["Kotlin", "Android", "Firebase", "Material UI"],
    color: "from-emerald-500/20 to-teal-600/10",
  },
  {
    title: "Business Portfolio",
    category: "Web",
    description: "A stunning corporate website with animations, CMS integration, and multi-language support.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    color: "from-blue-500/20 to-indigo-600/10",
  },
  {
    title: "Restaurant Ordering System",
    category: "WordPress",
    description: "WordPress-powered restaurant site with online ordering, table reservations, and menu management.",
    tags: ["WordPress", "PHP", "WooCommerce", "MySQL"],
    color: "from-rose-500/20 to-pink-600/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-gradient-card border border-border rounded-xl overflow-hidden shadow-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Colored gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-primary text-xs tracking-wider uppercase">{project.category}</span>
                  <div className="flex gap-3">
                    <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
