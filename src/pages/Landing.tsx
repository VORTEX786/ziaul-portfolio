import { motion } from "framer-motion";
import { ArrowRight, Code, Gamepad2, Brain, Star } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Landing() {
  const achievements = [
    { label: "Math", score: "91/100", icon: "📐" },
    { label: "Computer & TD", score: "93/100", icon: "💻" },
    { label: "Physics", score: "71/100", icon: "⚡" },
    { label: "English", score: "71/100", icon: "📚" },
  ];

  const interests = [
    { icon: Code, label: "Coding", color: "text-blue-500" },
    { icon: Gamepad2, label: "Gaming", color: "text-green-500" },
    { icon: Brain, label: "AI & ML", color: "text-purple-500" },
    { icon: Star, label: "Anime", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mohammed Ziaul Kamaal
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                An 18-year-old aspiring software engineer from Fiji, passionate about 
                artificial intelligence, game development, and creating innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-8xl font-bold">
                    MZK
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  🚀
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Lekutu, Bua Province, currently living in Tutua, Labasa. 
              Recently completed Year 12 with outstanding results and ready to pursue AI at USP.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h3 className="font-semibold mb-2">{achievement.label}</h3>
                    <p className="text-2xl font-bold text-primary">{achievement.score}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8">My Interests</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-background rounded-full px-6 py-3 border hover:shadow-md transition-shadow"
                  >
                    <Icon className={`h-5 w-5 ${interest.color}`} />
                    <span className="font-medium">{interest.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Ready to Build the Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join me on my journey as I pursue artificial intelligence studies and 
              develop innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/portfolio">Explore My Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Mohammed Ziaul Kamaal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}