import { motion } from "framer-motion";
import { Code, Gamepad2 } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useInView } from "react-intersection-observer";

// Displays an animated octagonal progress bar for a skill
const OctagonSkill = ({ label, percent }: { label: string; percent: number }) => {
  // Enable smooth progress animation when the skill enters the viewport
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-3 p-4 rounded-xl border bg-background hover:bg-accent/5 transition-colors"
    >
      <div className="relative">
        {/* Octagon container */}
        <div
          className="w-32 h-32 sm:w-36 sm:h-36 relative transition-all"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            filter:
              "drop-shadow(0 0 10px color-mix(in oklab, var(--primary), transparent 85%))",
          }}
        >
          {/* Background track */}
          <div className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, oklch(0.96 0.01 264), oklch(0.9 0.01 264))",
            }}
          />
          {/* Progress fill using conic-gradient masked to octagon */}
          <div
            ref={ref}
            className="absolute inset-0"
            style={{
              ["--deg" as any]: `${inView ? percent * 3.6 : 0}deg`,
              background: `conic-gradient(var(--primary) var(--deg), oklch(0.9 0.01 264) var(--deg))`,
              transition: "var(--deg) 1.2s ease-in-out",
              mixBlendMode: "normal",
            } as React.CSSProperties}
          />
          {/* Inner cutout to create a ring */}
          <div
            className="absolute inset-2 sm:inset-3 bg-background"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          {/* Inner subtle glow on hover */}
          <div
            className="absolute inset-0 pointer-events-none transition-[box-shadow]"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              boxShadow:
                "0 0 0 1px color-mix(in oklab, var(--primary), transparent 70%), inset 0 0 20px color-mix(in oklab, var(--primary), transparent 90%)",
            }}
          />
          {/* Center percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg sm:text-xl font-bold">
              {percent}%
            </span>
          </div>
        </div>
        {/* Hover glow */}
        <div className="absolute inset-0 blur-xl opacity-0 hover:opacity-100 transition-opacity -z-10"
             style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--primary), transparent 70%), transparent)" }} />
      </div>
      <div className="text-center">
        <p className="text-sm sm:text-base font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const projects = useQuery(api.projects.list);

  const staticProjects = [
    {
      title: "Flappy Bird",
      description: "Classic arcade game recreation with smooth physics and collision detection. Features include score tracking, difficulty progression, and responsive controls.",
      technology: "Python, Pygame",
      category: "Game Development",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/be0729bc-11b3-4120-ad3e-94cbb60c8a2d"
    },
    {
      title: "Chess Game",
      description: "Full-featured chess implementation with move validation, check detection, and complete game logic following official chess rules.",
      technology: "Python",
      category: "Game Development",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/932baa4f-962e-48ae-9966-b89080c7d874"
    },
    {
      title: "Zahrati Study Tracker",
      description: "A comprehensive study tracking application with focus time management, study ratio analytics, streak tracking, and gamification features including levels and badges.",
      technology: "React, TypeScript, Tailwind CSS",
      category: "Web Development",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/a3de1e67-8169-4bbf-8c84-ced6f72e6b0c"
    },
    {
      title: "JARVIS - AI Voice Assistant",
      description: "An advanced AI-powered voice assistant inspired by Iron Man's JARVIS. Features real-time voice recognition, natural language processing, system monitoring, and conversational AI capabilities.",
      technology: "Python, Speech Recognition, AI/ML, Natural Language Processing",
      category: "Artificial Intelligence",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/1512be03-86e4-430e-94e6-55eea4eae171"
    },
    {
      title: "XIA Chatbot",
      description: "An intelligent conversational AI chatbot with natural language understanding, context-aware responses, and multi-turn conversation capabilities. Designed to provide helpful assistance across various topics.",
      technology: "AI/ML, Natural Language Processing, Python",
      category: "Artificial Intelligence",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://harmless-tapir-303.convex.cloud/api/storage/af3e8589-85a2-4123-89bf-405806958397"
    }
  ];

  const allProjects = projects ? [...staticProjects, ...projects] : staticProjects;
  const featuredProjects = allProjects.filter(project => project.featured);
  const otherProjects = allProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <AnimatedBackground />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold tracking-tight mb-6">My Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my journey through code, from simple games to complex applications. 
              Each project represents a step forward in my development as a programmer.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Code className="h-8 w-8 mr-3 text-primary" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={project.imageUrl?.startsWith('http') ? "w-full h-32 overflow-hidden rounded-md relative cursor-pointer" : "text-4xl"}>
                          {project.imageUrl?.startsWith('http') ? (
                            <>
                              <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-all duration-300" 
                              />
                              {/* Full image overlay on hover */}
                              <div className="fixed inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40" />
                              <div className="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                <img 
                                  src={project.imageUrl} 
                                  alt={project.title} 
                                  className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
                                />
                              </div>
                            </>
                          ) : (
                            project.imageUrl || "🎮"
                          )}
                        </div>
                        {!project.imageUrl?.startsWith('http') && <Badge variant="secondary">{project.category}</Badge>}
                      </div>
                      {project.imageUrl?.startsWith('http') && <Badge variant="secondary" className="mb-2">{project.category}</Badge>}
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technology.split(", ").map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Gamepad2 className="h-8 w-8 mr-3 text-primary" />
                Other Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <Badge variant="outline">{project.category}</Badge>
                          </div>
                          <div className="text-2xl">{project.imageUrl}</div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-start">
                          <span className="text-sm font-medium text-primary">
                            {project.technology}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Future Projects */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Skills & Proficiency</h2>
              <p className="text-muted-foreground mt-2">
                A modern, responsive display of my core skills using animated octagonal progress.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <OctagonSkill label="Python Programming" percent={90} />
              <OctagonSkill label="Game Development (Pygame)" percent={80} />
              <OctagonSkill label="Web Development (HTML, CSS, JS)" percent={65} />
              <OctagonSkill label="Mathematics (Pure Maths)" percent={95} />
              <OctagonSkill label="Physics" percent={75} />
              <OctagonSkill label="Problem Solving & Logic" percent={90} />
              <OctagonSkill label="Leadership & Communication" percent={85} />
              <OctagonSkill label="Creativity & Design (Logo/Graphics)" percent={85} />
            </div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Mohammed Ziaul Kamaal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}