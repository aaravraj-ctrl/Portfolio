import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    tags: ["Cloud", "AWS", "Architecture"],
    color: "border-orange-500"
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2023",
    tags: ["React", "UI/UX", "JavaScript"],
    color: "border-blue-500"
  },
  {
    title: "Three.js Journey",
    issuer: "Bruno Simon",
    date: "2023",
    tags: ["WebGL", "3D", "Creative Coding"],
    color: "border-purple-500"
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "2022",
    tags: ["Figma", "User Research", "Prototyping"],
    color: "border-green-500"
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2022",
    tags: ["React", "Performance", "Hooks"],
    color: "border-cyan-500"
  }
];

export default function Certifications() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center glitch-text" data-text="CERTIFICATIONS">
          CERTIFICATIONS
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="group"
            >
              <Card className={`h-full bg-background/50 border-l-4 ${cert.color} border-y-white/10 border-r-white/10 hover:bg-white/5 transition-all`}>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-4">
                    <span className="font-display text-xl">{cert.title}</span>
                    <Award className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 font-bold">{cert.issuer} • {cert.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
