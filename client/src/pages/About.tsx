import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Terminal, Cpu } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2, color: "text-primary" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
  { name: "Three.js / WebGL", icon: Cpu, color: "text-secondary" },
  { name: "Tailwind / Framer", icon: Palette, color: "text-accent" },
];

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "TechNova",
    period: "2023 - Present",
    desc: "Leading the frontend team in building immersive 3D web applications."
  },
  {
    role: "Creative Developer",
    company: "PixelPerfect",
    period: "2021 - 2023",
    desc: "Developed award-winning websites with heavy animation focus."
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center glitch-text" data-text="ABOUT ME">
          ABOUT ME
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-panel p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-display text-primary mb-4">The Persona</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Gen-Z creative developer obsessed with the intersection of design and code. 
              I don't just build websites; I build experiences. My philosophy is rooted in 
              "Digital Brutalism" mixed with high-fidelity interactivity.
            </p>
          </div>
          
          <div className="glass-panel p-8 rounded-lg relative overflow-hidden">
             <h3 className="text-2xl font-display text-secondary mb-4">Tech Stack</h3>
             <div className="grid grid-cols-2 gap-4">
               {skills.map((skill, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.05 }}
                   className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5"
                 >
                   <skill.icon className={`w-6 h-6 ${skill.color}`} />
                   <span className="font-bold text-sm">{skill.name}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        <h2 className="text-3xl font-display mb-8 text-accent">Experience Timeline</h2>
        <div className="space-y-8 relative border-l-2 border-white/10 ml-4 pl-8">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary box-glow" />
              <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <span className="text-xl font-bold text-white block">{job.role}</span>
                      <span className="text-primary text-sm">{job.company}</span>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">{job.period}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
