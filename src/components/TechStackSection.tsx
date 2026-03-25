import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    techs: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Mobile",
    techs: ["Android", "Kotlin", "Java", "Firebase", "Material Design"],
  },
  {
    title: "E-Commerce",
    techs: ["Shopify", "Liquid", "WooCommerce", "Stripe", "PayPal"],
  },
  {
    title: "Backend & Tools",
    techs: ["Node.js", "PHP", "MySQL", "MongoDB", "WordPress", "Git", "REST APIs"],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-4">Technologies</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My Tech <span className="text-gradient-gold">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6 shadow-card"
            >
              <h3 className="font-semibold text-lg mb-4 text-gradient-gold">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
