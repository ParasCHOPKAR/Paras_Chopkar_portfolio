"use client";

import { Calendar, Briefcase, GraduationCap, User, Users, Mic } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Mind Axis",
    location: "Pune, India",
    date: "Mar 2025 – Present",
    timelineIcon: <Briefcase className="w-5 h-5 text-white" />,
    letter: "M",
    points: [
      "Architecting and developing modern, scalable web applications using the Next.js and React ecosystem.",
      "Building robust, database-driven backend solutions to support dynamic, high-performance user interfaces.",
      "Collaborating with cross-functional teams to deliver pixel-perfect, SEO-friendly digital experiences."
    ],
    hasRightCol: true,
    tech: [
      { name: "Next.js", icon: "N" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "⬡" },
      { name: "MongoDB", icon: "🍃" }
    ],
    keyAreas: []
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "DW Innovation Pvt. Ltd.",
    location: "Pune, India",
    date: "Apr 2024 – Feb 2025",
    timelineIcon: <Briefcase className="w-5 h-5 text-white" />,
    letter: "D",
    points: [
      "Developed 8+ responsive business websites using modern full-stack technologies, improving overall user engagement by 30%.",
      "Integrated RESTful APIs and implemented dynamic data rendering, connecting highly responsive UI components with custom backend services.",
      "Worked closely with MySQL and MongoDB for structured and NoSQL data storage solutions to ensure fast data retrieval.",
      "Optimized website performance and UI responsiveness, eliminating unwanted layout shifts and reducing load times by 25%."
    ],
    hasRightCol: true,
    tech: [
      { name: "React", icon: "⚛️" },
      { name: "Express.js", icon: "ex" },
      { name: "MySQL", icon: "🐬" }
    ],
    keyAreas: []
  },
  {
    id: 3,
    role: "Technical & Soft Skills Trainer (Volunteer)",
    company: "Vishwa Netrutvam Club",
    location: "Pune, India",
    date: "Apr 2024",
    timelineIcon: <GraduationCap className="w-5 h-5 text-white" />,
    letter: "V",
    points: [
      "Mentored and trained students on technical concepts and soft skills.",
      "Facilitated workshops and learning sessions to improve peer collaboration."
    ],
    hasRightCol: false,
    tech: [],
    keyAreas: [
      { name: "Mentorship", icon: <User className="w-4 h-4 text-primary" /> },
      { name: "Leadership", icon: <Users className="w-4 h-4 text-primary" /> },
      { name: "Public Speaking", icon: <Mic className="w-4 h-4 text-primary" /> }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-semibold text-muted tracking-wider">WORK HISTORY</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Where I&apos;ve <span className="text-primary">Worked</span>
        </h2>
        <p className="text-subtle text-lg max-w-2xl">
          A journey of growth, learning, and building impactful digital solutions.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(230,57,70,0.8)]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Timeline Icon */}
              <div className="hidden md:flex items-center justify-center w-[80px] shrink-0 relative z-10">
                <div className="w-[50px] h-[50px] rounded-full bg-card border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(230,57,70,0.5)]">
                  {exp.timelineIcon}
                </div>
                {/* Horizontal line connector */}
                <div className="absolute top-1/2 left-[65px] right-0 h-px bg-primary/30" />
              </div>
              
              {/* Card */}
              <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors duration-300 flex-1 border border-primary/10 bg-card rounded-2xl relative overflow-hidden">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  
                  {/* Left: Role & Company */}
                  <div className="flex gap-5 items-start">
                    {/* Letter Square */}
                    <div className="flex w-14 h-14 rounded-xl bg-background border border-primary/40 items-center justify-center font-bold text-3xl text-primary shrink-0 shadow-[0_0_15px_rgba(230,57,70,0.2)]">
                      {exp.letter}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                      <div className="text-primary font-medium flex items-center gap-2 text-sm md:text-base">
                        {exp.company} <span className="text-muted text-xs">•</span> <span className="text-subtle">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Date */}
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary shrink-0">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                </div>
                
                {/* Content Row */}
                <div className={`grid grid-cols-1 ${exp.hasRightCol ? "lg:grid-cols-3" : ""} gap-8 mt-8`}>
                  
                  {/* Points (takes 2 cols if right col exists) */}
                  <div className={exp.hasRightCol ? "lg:col-span-2" : ""}>
                    <ul className="space-y-4 relative z-10">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Areas (for 2nd card) */}
                    {exp.keyAreas && exp.keyAreas.length > 0 && (
                      <div className="mt-8 relative z-10">
                        <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-4">KEY AREAS</div>
                        <div className="flex flex-wrap gap-3">
                          {exp.keyAreas.map((area, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-background/50 border border-primary/10 text-sm text-muted flex items-center gap-2">
                              {area.icon}
                              {area.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column (Tech Stack) */}
                  {exp.hasRightCol && (
                    <div className="pl-0 lg:pl-6 lg:border-l border-primary/10 relative z-10">
                      <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-4">TECH STACK</div>
                      <div className="grid grid-cols-2 gap-3">
                        {exp.tech.map((t, i) => (
                          <div key={i} className="px-3 py-2 rounded-lg bg-background/50 border border-primary/10 text-sm text-foreground flex items-center gap-3 hover:border-primary/30 transition-colors">
                            <span className="w-5 h-5 flex items-center justify-center font-bold text-foreground text-xs bg-card rounded-full border border-primary/10">
                              {t.icon}
                            </span>
                            {t.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Decorative group image for 2nd card */}
                  {!exp.hasRightCol && (
                    <div className="absolute bottom-[-20px] right-8 hidden md:flex pointer-events-none">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl absolute -z-10" />
                        <Users className="w-32 h-32 text-primary" />
                      </div>
                    </div>
                  )}
                  
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
