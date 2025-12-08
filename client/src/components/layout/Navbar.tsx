import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certs" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-background/50 border-b border-white/5"
    >
      <Link href="/" className="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:brightness-125 transition-all cursor-pointer">
          AARAV<span className="text-foreground">.DEV</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`relative text-xs lg:text-sm uppercase tracking-widest hover:text-primary transition-colors cursor-pointer ${location === link.href ? "text-primary font-bold" : "text-muted-foreground"}`}
          >
              {link.label}
              {location === link.href && (
                <motion.span 
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary box-glow"
                />
              )}
          </Link>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 top-16 bg-background z-30 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-display uppercase tracking-widest cursor-pointer ${location === link.href ? "text-primary text-glow" : "text-muted-foreground"}`}
            >
                {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
