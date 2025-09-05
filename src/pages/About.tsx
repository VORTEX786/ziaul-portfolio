import { motion } from "framer-motion";
import { Calendar, Award, Target, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function About() {
  const timeline = [
    { year: "2013", event: "Started Class 1", icon: BookOpen },
    { year: "2019", event: "Completed Primary Education", icon: Award },
    { year: "2020-2023", event: "Secondary School Journey", icon: Calendar },
    { year: "2024", event: "Year 12 Certificate - 348/400 marks", icon: Award },
    { year: "2025", event: "Is schooling in Year 13", icon: Target },
  ];

  const projects = [
    {
      name: "Flappy Bird",
      description: "Classic arcade game recreation with smooth physics and collision detection",
      tech: "Python, Pygame",
      category: "Game Development"
    },
    {
      name: "Tic Tac Toe",
      description: "Interactive strategy game with AI opponent and multiplayer modes",
      tech: "Python",
      category: "Game Development"
    },
    {
      name: "Chess Game",
      description: "Full-featured chess implementation with move validation and game logic",
      tech: "Python",
      category: "Game Development"
    },
    {
      name: "Starship vs Aliens",
      description: "Advanced space shooter with multiple levels, boss battles, and power-ups",
      tech: "Python, Pygame",
      category: "Advanced Game Development"
    }
  ];

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
            <h1 className="text-5xl font-bold tracking-tight mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover my journey from a curious student in Fiji to an aspiring AI engineer 
              with a passion for technology and innovation.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Background</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm an 18-year-old from Lekutu in Bua Province, Fiji, currently living in 
                      Tutua, Labasa. My journey in education began in 2013 when I started Class 1, 
                      and I've been passionate about learning ever since.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I recently completed my Year 12 certificate exam with outstanding results, 
                      achieving 348 out of 400 total marks. My strongest subjects were Mathematics 
                      and Computer & Technology Design, reflecting my natural affinity for STEM fields.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Education Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Education Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-primary">{item.year}</div>
                            <div className="text-lg font-semibold">{item.event}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.name}
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="text-sm font-medium text-primary">{project.tech}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Future Goals */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent>
                <h2 className="text-3xl font-bold mb-6 text-center">Future Goals</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Academic Pursuits
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I plan to study artificial intelligence at the University of the South Pacific, 
                      focusing on machine learning, neural networks, and advanced AI applications. 
                      I'm particularly interested in pure mathematics and physics at the Year 13 level.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Career Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      My goal is to become a skilled software engineer while specializing in AI development. 
                      I want to create innovative solutions that can make a positive impact on society, 
                      particularly in the Pacific region.
                    </p>
                  </div>
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