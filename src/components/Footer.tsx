import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href="#" className="font-heading text-lg font-extrabold">
            your<span className="text-primary">name</span>
          </a>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
