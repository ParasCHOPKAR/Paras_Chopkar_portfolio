"use client";

import Image from "next/image";
import { ArrowRight, Mail, Code2, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { icon: <Code2 className="w-5 h-5 text-primary" />, value: "1.5+", label: "Years Experience" },
    { icon: <Rocket className="w-5 h-5 text-primary" />, value: "15+", label: "Projects Completed" },
    { icon: <Star className="w-5 h-5 text-primary" />, value: "100%", label: "Commitment" },
  ];

  return (
    <section id="about" className="min-h-screen pt-28 md:pt-32 pb-12 md:pb-16 px-6 relative flex flex-col justify-center max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card backdrop-blur-md w-fit border border-primary/20 shadow-[0_0_20px_rgba(230,57,70,0.05)]">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(230,57,70,0.8)] animate-pulse" />
            <span className="text-sm font-medium text-muted">Hello, world! I&apos;m</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            Paras <br/>
            <span className="text-primary">Chopkar.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-muted mt-2">
            <span className="text-primary">Full Stack Developer</span> | React & Next.js
          </h2>
          
          <p className="text-subtle text-lg max-w-xl leading-relaxed">
            I build modern, scalable, and high-performance web applications using <span className="text-primary font-medium">HTML, CSS, React</span>, and <span className="text-primary font-medium">Next.js</span>. From crafting engaging interfaces with <span className="text-primary font-medium">GSAP & Framer Motion</span> to developing robust APIs, backend systems, and database-driven solutions, I focus on delivering fast, maintainable, and <span className="text-primary font-medium">SEO-friendly</span> digital experiences.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#projects" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all duration-300 group">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full glass-card font-semibold hover:bg-white/10 transition-colors duration-300">
              Get In Touch
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        {/* Right Content (Image & Floating Icons) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[600px] flex items-center justify-center"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center mt-10 lg:mt-0">
            {/* Concentric circles (Background) */}
            <div className="absolute inset-[-15%] rounded-full border border-primary/10 bg-gradient-to-br from-primary/10 to-transparent">
               <div className="absolute inset-[15%] rounded-full border border-primary/20 border-dashed animate-[spin_60s_linear_infinite]" />
               <div className="absolute inset-[30%] rounded-full border border-primary/5" />
            </div>
            
            {/* Profile Image (Breaking out of circle) */}
            <div className="absolute bottom-0 w-[115%] h-[125%] flex items-end justify-center z-10 pointer-events-none">
               <Image 
                 src="/my_profile-photo.png" 
                 alt="Paras Chopkar - React Engineer"
                 fill
                 className="object-contain object-bottom drop-shadow-2xl"
                 priority
               />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              className="absolute top-10 -right-2 sm:-right-8 z-20 animate-float scale-75 sm:scale-100 origin-bottom-left"
              style={{ animationDelay: '0s' }}
            >
              <div className="bg-card backdrop-blur-md px-6 py-5 flex flex-col items-center gap-3 border border-primary/20 rounded-3xl rotate-[12deg] shadow-[0_0_25px_rgba(230,57,70,0.15)]">
                <div className="text-primary/90 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-muted tracking-wide">React</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 -left-6 sm:-left-12 z-20 animate-float scale-75 sm:scale-100 origin-bottom-right"
              style={{ animationDelay: '2s' }}
            >
              <div className="bg-card backdrop-blur-md px-6 py-5 flex flex-col items-center gap-3 border border-primary/20 rounded-3xl -rotate-[10deg] shadow-[0_0_25px_rgba(230,57,70,0.15)]">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">N</div>
                <span className="text-xs font-medium text-muted tracking-wide">Next.js</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 sm:-bottom-8 right-2 sm:right-4 z-20 animate-float scale-75 sm:scale-100 origin-top-left"
              style={{ animationDelay: '4s' }}
            >
              <div className="bg-card backdrop-blur-md px-6 py-5 flex flex-col items-center gap-3 border border-primary/20 rounded-3xl rotate-[8deg] shadow-[0_0_25px_rgba(230,57,70,0.15)]">
                <div className="text-primary/90 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <span className="text-xs font-medium text-muted tracking-wide">GSAP</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 w-full glass-card p-6 md:p-8 flex flex-wrap gap-8 justify-between items-center"
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 flex-1 min-w-[200px]">
            <div className="w-12 h-12 rounded-xl bg-card border border-primary/20 flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-subtle">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
