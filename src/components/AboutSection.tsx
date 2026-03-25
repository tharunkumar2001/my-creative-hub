import { motion } from "framer-motion";

const techRows = [
  { label: "Frontend", techs: "React · TypeScript · JavaScript · Next.js · Tailwind CSS · HTML5 · CSS3" },
  { label: "Mobile", techs: "Android · Kotlin · Java · Firebase · Jetpack Compose" },
  { label: "E-Commerce", techs: "Shopify · Liquid · WooCommerce · Stripe · Payment Gateways" },
  { label: "Backend", techs: "Node.js · PHP · Python · REST APIs · GraphQL" },
  { label: "CMS", techs: "WordPress · Custom Themes · Plugin Development · Headless CMS" },
  { label: "Tools", techs: "Git · Docker · Figma · VS Code · CI/CD · Linux" },
];

const experience = [
  {
    period: "2020 — Present",
    role: "Freelance Developer",
    description: "Building digital products for startups and businesses worldwide. 50+ projects delivered across web, mobile, and e-commerce.",
  },
  {
    period: "2018 — 2020",
    role: "Software Developer",
    description: "Full-stack development for enterprise clients. Led migration of legacy systems to modern architectures.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left — About text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-mono text-primary mb-4">About</p>
            <h2 className="heading-lg mb-8">
              Not just a developer.
              <br />
              <span className="italic font-normal">A partner.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a developer who believes great software is invisible — it just works. For over 5 years, I've helped businesses transform ideas into products that their users genuinely enjoy.
              </p>
              <p>
                I don't do cookie-cutter solutions. Every line of code is written with your specific goals in mind. Whether it's a Shopify store that needs to convert, an Android app that needs to perform, or a website that needs to impress — I build it like it's my own.
              </p>
            </div>

            {/* Experience timeline */}
            <div className="mt-12 space-y-0">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t border-border py-6"
                >
                  <p className="label-mono text-muted-foreground mb-2">{exp.period}</p>
                  <h3 className="font-heading text-lg font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </div>
          </motion.div>

          {/* Right — Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="label-mono text-primary mb-4">Tech Stack</p>
            <h3 className="font-heading text-2xl font-bold mb-8">Tools I work with daily</h3>

            <div className="space-y-0">
              {techRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="border-t border-border py-5 group"
                >
                  <p className="label-mono text-primary/70 mb-2">{row.label}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{row.techs}</p>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "50+", label: "Projects" },
                { value: "5+", label: "Years" },
                { value: "30+", label: "Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-heading text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
