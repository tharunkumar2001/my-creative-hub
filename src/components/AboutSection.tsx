import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-4">About Me</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Turning Ideas Into
              <span className="text-gradient-gold"> Reality</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate software developer and freelancer who loves building things that live on the internet. From sleek websites to powerful Android applications, from custom Shopify e-commerce stores to feature-rich WordPress solutions — I bring ideas to life with clean code and pixel-perfect design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach is simple: understand the problem deeply, design with intention, and build with precision. Every project I take on is treated as my own, ensuring the highest quality and attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
