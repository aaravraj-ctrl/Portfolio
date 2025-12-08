import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neon Nexus",
    desc: "A 3D interactive metaverse platform built with Three.js and WebSockets.",
    tags: ["Three.js", "Socket.io", "React"],
    image: "linear-gradient(45deg, #ff00ff, #00ffff)",
    link: "#",
    github: "#"
  },
  {
    title: "Cyber Commerce",
    desc: "Next-gen e-commerce dashboard with real-time analytics and dark mode first design.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    image: "linear-gradient(45deg, #39ff14, #00ffff)",
    link: "#",
    github: "#"
  },
  {
    title: "Glitch Art Generator",
    desc: "Browser-based tool to create datamoshing effects on images using WebGL shaders.",
    tags: ["WebGL", "GLSL", "Canvas"],
    image: "linear-gradient(45deg, #ff00ff, #39ff14)",
    link: "#",
    github: "#"
  },
  {
    title: "Sonic Wave",
    desc: "Audio visualizer that reacts to microphone input in real-time.",
    tags: ["Web Audio API", "D3.js"],
    image: "linear-gradient(45deg, #000000, #ff00ff)",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center glitch-text" data-text="PROJECTS">
          PROJECTS
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-background/50 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div 
                  className="h-48 w-full bg-cover bg-center relative overflow-hidden"
                  style={{ background: project.image }}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/80 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-white/20 hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
