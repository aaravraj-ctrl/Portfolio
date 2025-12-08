import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold glitch-text" data-text="RESUME">
            RESUME
          </h1>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-widest box-glow">
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </Button>
        </div>

        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <Card className="w-full aspect-[1/1.4] bg-white text-black p-8 md:p-12 overflow-hidden relative shadow-2xl">
                {/* Mock PDF Content */}
                <div className="h-full flex flex-col gap-6 font-body">
                    <div className="border-b-2 border-black pb-6 flex justify-between items-end">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold font-display tracking-wider">Aarav Kumar</h2>
                            <p className="text-gray-600">Creative Developer & Design Engineer</p>
                        </div>
                        <div className="text-right text-sm">
                            <p>hello@Welcome</p>
                            <p>Welcome</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 h-full">
                        <div className="md:col-span-2 space-y-6">
                            <section>
                                <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Experience</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between font-bold">
                                            <span>Senior Frontend Engineer</span>
                                            <span>2023 - Present</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1">TechNova Inc.</div>
                                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                                            <li>Spearheaded the migration to Next.js 14, improving performance by 40%.</li>
                                            <li>Designed and implemented a 3D product configurator using Three.js.</li>
                                            <li>Mentored junior developers on accessibility and animation best practices.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex justify-between font-bold">
                                            <span>Creative Developer</span>
                                            <span>2021 - 2023</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1">PixelPerfect Agency</div>
                                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                                            <li>Built award-winning promotional sites for Fortune 500 clients.</li>
                                            <li>Implemented complex GSAP and WebGL animations.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Projects</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="font-bold">Neon Nexus</span>
                                        <span className="mx-2">|</span>
                                        <span className="text-sm text-gray-600">Three.js, React, Socket.io</span>
                                        <p className="text-sm text-gray-700 mt-1">
                                            A real-time multiplayer 3D environment for virtual events.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="space-y-6">
                             <section>
                                <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Skills</h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div>
                                        <span className="font-bold block text-black">Languages</span>
                                        JavaScript (ES6+), TypeScript, HTML5, CSS3, GLSL
                                    </div>
                                    <div>
                                        <span className="font-bold block text-black">Frameworks</span>
                                        React, Next.js, Vue.js, TailwindCSS
                                    </div>
                                    <div>
                                        <span className="font-bold block text-black">Libraries</span>
                                        Three.js, Framer Motion, GSAP, React Query
                                    </div>
                                    <div>
                                        <span className="font-bold block text-black">Tools</span>
                                        Git, Figma, Blender, Docker
                                    </div>
                                </div>
                            </section>
                             <section>
                                <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3 pb-1">Education</h3>
                                <div className="text-sm">
                                    <div className="font-bold">BS Computer Science</div>
                                    <div className="text-gray-600">University of Tech</div>
                                    <div className="text-gray-500">2017 - 2021</div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
