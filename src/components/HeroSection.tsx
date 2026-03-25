import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end noise-overlay section-padding pb-16 pt-32 overflow-hidden">
      {/* Large decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="label-mono text-primary mb-8"
        >
          Software Developer & Freelancer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="heading-xl mb-8 text-balance"
        >
          I craft digital
          <br />
          products that
          <br />
          <span className="italic font-normal text-primary">people love</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-8 items-start sm:items-end justify-between"
        >
          <p className="body-lg text-muted-foreground max-w-md">
            Websites. Android apps. E-commerce. I turn your vision into performant, beautiful software — no templates, no shortcuts.
          </p>

          <a href="#work" className="flex items-center gap-3 group">
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              See my work
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div className="divider mt-16" />
    </section>
  );
};

export default HeroSection;
