import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart, Layout, Code2, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies. From landing pages to complex web applications.",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description: "Native Android applications with intuitive UI, smooth performance, and seamless user experiences.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify E-Commerce",
    description: "Custom Shopify stores with unique themes, optimized checkout flows, and revenue-driving features.",
  },
  {
    icon: Layout,
    title: "WordPress Solutions",
    description: "Tailored WordPress sites with custom themes, plugins, and powerful CMS capabilities.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software solutions designed to solve unique business problems and streamline operations.",
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    description: "Speed optimization, SEO strategies, and analytics setup to maximize your digital presence.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-4">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Services I <span className="text-gradient-gold">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gradient-card border border-border rounded-xl p-8 shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
