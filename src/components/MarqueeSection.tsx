import { motion } from "framer-motion";

const marqueeItems = [
  "Web Development",
  "Android Apps",
  "Shopify Stores",
  "WordPress Sites",
  "UI/UX Design",
  "E-Commerce",
  "Custom Software",
  "SEO Optimization",
];

const MarqueeSection = () => {
  return (
    <section className="py-8 overflow-hidden border-b border-border bg-card/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <motion.span
            key={i}
            className="mx-8 font-heading text-2xl md:text-3xl font-bold text-muted-foreground/30 flex items-center gap-8"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-primary/40" />
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
