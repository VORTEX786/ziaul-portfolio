import { motion } from "framer-motion";
import { Code, Gamepad2, Plus } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

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
      imageUrl: "🐦"
    },
    {
      title: "Tic Tac Toe",
      description: "Interactive strategy game with AI opponent and multiplayer modes. Implements minimax algorithm for challenging AI gameplay.",
      technology: "Python",
      category: "Game Development",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "⭕"
    },
    {
      title: "Chess Game",
      description: "Full-featured chess implementation with move validation, check detection, and complete game logic following official chess rules.",
      technology: "Python",
      category: "Game Development",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "♟️"
    },
    {
      title: "Starship vs Aliens",
      description: "Advanced space shooter with multiple levels, boss battles, power-ups, and progressive difficulty. Features particle effects and smooth animations.",
      technology: "Python, Pygame",
      category: "Advanced Game Development",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "🚀"
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
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{project.imageUrl}</div>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
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
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-dashed">
              <CardContent className="text-center">
                <Plus className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-3xl font-bold mb-4">Future Projects</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This space is reserved for the amazing projects I'll build during my university 
                  studies in artificial intelligence. Stay tuned for AI applications, machine learning 
                  models, and innovative software solutions!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Machine Learning
                  </Badge>
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Neural Networks
                  </Badge>
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Web Applications
                  </Badge>
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Mobile Apps
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Mohammed Ziaul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}