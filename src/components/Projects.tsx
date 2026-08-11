"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Namoh Horeca Solutions",
    category: "E-Commerce",
    description: "Scalable B2B/B2C platform with real-time filtering and role-protected dashboard.",
    tech: "Next.js, E-Commerce",
    image: "/my-project/namoh.jpeg",
    link: "https://www.namohhorecasolutions.com/",
  },
  {
    id: 2,
    title: "GenZonic Store",
    category: "E-Commerce",
    description: "High-performance storefront with engaging animations and seamless cart state.",
    tech: "Next.js, E-Commerce",
    image: "/my-project/genzonic.jpeg",
    link: "https://www.genzonic.store/",
  },
  {
    id: 3,
    title: "Chetana Automation",
    category: "Business",
    description: "Professional corporate website showcasing automation products and services.",
    tech: "Web Development",
    image: "/my-project/chetana.jpeg",
    link: "https://chetanaautomation.com/",
  },
  {
    id: 4,
    title: "Vijay Agency",
    category: "Business",
    description: "Digital presence for a leading distribution and agency business.",
    tech: "Frontend, Business",
    image: "/my-project/vijay.jpeg",
    link: "https://vijayagency.in/",
  },
  {
    id: 5,
    title: "Fibrodrain",
    category: "Business",
    description: "Industrial and manufacturing product showcase platform.",
    tech: "Frontend",
    image: "/my-project/fibrodrain.jpeg",
    link: "https://fibrodrain.in/",
  },
  {
    id: 6,
    title: "Meghrup Linen",
    category: "Business",
    description: "Premium linen and textile e-commerce destination with a luxurious feel.",
    tech: "HTML, CSS, JS",
    image: "/my-project/meghrup.jpeg",
    link: "https://meghruplinen.com/",
  },
  {
    id: 8,
    title: "Mindaxis Innovation",
    category: "Business",
    description: "Innovative digital agency website specializing in tailored tech solutions.",
    tech: "React, Next.js, UI/UX",
    image: "/my-project/mindaxis.jpeg",
    link: "https://mindaxisinnovation.com/",
  },
  {
    id: 9,
    title: "Aqua Green Techs",
    category: "Business",
    description: "Static corporate website highlighting eco-friendly technology solutions.",
    tech: "HTML, CSS, JS",
    image: "/my-project/aquagreen.jpeg",
    link: "https://aquagreentechs.com/",
  }
];

const filters = ["All Projects", "E-Commerce", "Business"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter(project => 
    activeFilter === "All Projects" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 px-6 relative max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-subtle text-lg">
            A selection of my recent work showcasing creativity, technical expertise, and problem-solving skills.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeFilter === filter 
                  ? "bg-primary/10 border-primary text-foreground shadow-[0_0_15px_rgba(230,57,70,0.3)]" 
                  : "glass-card border-transparent text-subtle hover:text-foreground"
                }`}
            >
              {activeFilter === filter && <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block mr-2" />}
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="glass-card glass-card-hover overflow-hidden group cursor-pointer block"
            >
              {/* Image Container */}
              <div className="h-64 bg-card relative overflow-hidden border-b border-black/5 dark:border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-primary/10 text-xs font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {project.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">{project.title}</h3>
                <p className="text-subtle mb-6 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                   <p className="text-xs text-primary-light font-mono bg-primary/10 px-3 py-1.5 rounded">
                     {project.tech}
                   </p>
                   <div 
                     className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                   >
                     <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                   </div>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* View All Button */}
      <div className="mt-16 flex justify-center">
         <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-primary/30 glass-card font-semibold text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
      </div>
      
    </section>
  );
}
