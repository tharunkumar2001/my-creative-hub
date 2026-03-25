import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart, Code2, Layout, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, fast, and accessible websites that look incredible on every device.",
    num: "01",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    description: "Native Android experiences with fluid animations and offline-first architecture.",
    num: "02",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Stores",
    description: "Custom storefronts that convert browsers into buyers. Theme dev & app integrations.",
    num: "03",
  },
  {
    icon: Layout,
    title: "WordPress",
    description: "Bespoke WordPress themes and plugins. Full CMS control without the complexity.",
    num: "04",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Tailored solutions for unique problems. APIs, dashboards, automation tools.",
    num: "05",
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    description: "Speed optimization and search strategy that puts you ahead of the competition.",
    num: "06",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-foreground text-background relative noise-overlay">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-mono text-primary mb-4">What I Do</p>
          <h2 className="heading-lg text-background">
            Services built around
            <br />
            <span className="italic font-normal text-primary">your goals</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-foreground p-8 md:p-10 hover:bg-background/[0.05] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <service.icon className="w-6 h-6 text-primary" />
                <span className="label-mono text-background/30">{service.num}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-background mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-background/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
