import { motion } from "framer-motion";
import { HeroScene } from "@/components/3d/HeroScene";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-secondary font-display text-xl md:text-2xl mb-4 tracking-widest">
              Hey There, I'm
            </h2>
            <h1 
              className="glitch-text text-3xl md:text-5xl font-display font-black mb-6 text-white" 
              data-text="Aarav Kumar"
            >
              Aarav Kumar
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-light">
              Crafting immersive digital experiences with <span className="text-primary font-bold">Next.js</span>, <span className="text-secondary font-bold">Three.js</span>, and <span className="text-accent font-bold">Design Engineering</span>. 
              Building the future of the web, one pixel at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white border-none rounded-none text-lg px-8 py-6 uppercase tracking-widest font-bold box-glow">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary rounded-none text-lg px-8 py-6 uppercase tracking-widest font-bold box-glow-cyan">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm uppercase tracking-widest"
      >
        Scroll to Explore
      </motion.div>
    </div>
  );
}
