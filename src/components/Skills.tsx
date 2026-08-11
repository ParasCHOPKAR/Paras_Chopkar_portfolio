"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "HTML5", "CSS3", "JavaScript (ES6+)"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "Next.js API Routes", "RESTful APIs", "MySQL", "MongoDB", "SQL"]
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "Vercel", "Hostinger", "Cloudinary", "VS Code"]
  },
  {
    title: "Core Concepts",
    skills: ["SSR / SSG", "JWT Authentication", "Headless APIs", "MVC Architecture"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit border-primary/20 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-muted">EXPERTISE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Technical <span className="text-primary">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-card border border-black/5 dark:border-white/5 text-muted text-sm hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
