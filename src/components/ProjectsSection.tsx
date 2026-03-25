import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    category: "Shopify Development",
    description: "Custom Shopify store with bespoke theme, advanced product filtering, and optimized conversion funnel that increased sales by 40%.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    year: "2024",
  },
  {
    num: "02",
    title: "Fitness Tracking App",
    category: "Android Development",
    description: "Native Android application with real-time workout tracking, social features, and detailed analytics dashboard.",
    tags: ["Kotlin", "Firebase", "Material Design"],
    year: "2024",
  },
  {
    num: "03",
    title: "Agency Portfolio",
    category: "Web Development",
    description: "Award-worthy creative agency website with immersive animations, CMS integration, and multi-language support.",
    tags: ["React", "TypeScript", "Framer Motion"],
    year: "2023",
  },
  {
    num: "04",
    title: "Restaurant Platform",
    category: "WordPress + WooCommerce",
    description: "Full-service restaurant website with online ordering system, table reservations, and integrated menu management.",
    tags: ["WordPress", "PHP", "WooCommerce"],
    year: "2023",
  },
];

const ProjectsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="label-mono text-primary mb-4">Selected Work</p>
            <h2 className="heading-lg">
              Projects that
              <br />
              <span className="italic font-normal">speak for themselves</span>
            </h2>
          </div>
          <p className="hidden md:block text-muted-foreground max-w-xs text-sm leading-relaxed">
            Every project is a partnership. Here's a selection of work I'm most proud of.
          </p>
        </motion.div>

        {/* Project list — editorial style */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group border-t border-border py-8 md:py-10 cursor-pointer"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <span className="col-span-1 label-mono text-muted-foreground">{project.num}</span>

                <div className="col-span-11 md:col-span-4">
                  <h3
                    className={`font-heading text-2xl md:text-3xl font-bold transition-all duration-500 ${
                      hoveredIdx !== null && hoveredIdx !== i ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="hidden md:block col-span-3">
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>

                <div className="hidden md:flex col-span-3 gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="hidden md:flex col-span-1 justify-end">
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Expanded description on mobile */}
              <p className="md:hidden text-sm text-muted-foreground mt-2 ml-[calc(8.33%+1rem)]">
                {project.category} · {project.year}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
