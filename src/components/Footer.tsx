import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-black/10 dark:border-white/10 mt-24">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Let&apos;s work <span className="text-primary">together.</span></h2>
            <p className="text-subtle mb-8 max-w-md">
              Available for full-time roles and freelance opportunities. Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:paraschopkar11@gmail.com" className="flex items-center gap-4 text-muted hover:text-primary transition-colors w-fit">
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary border-primary/20">
                  <Mail className="w-4 h-4" />
                </div>
                paraschopkar11@gmail.com
              </a>
              <a href="tel:+919823919814" className="flex items-center gap-4 text-muted hover:text-primary transition-colors w-fit">
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary border-primary/20">
                  <Phone className="w-4 h-4" />
                </div>
                +91 98239 19814
              </a>
              <div className="flex items-center gap-4 text-muted w-fit">
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary border-primary/20">
                  <MapPin className="w-4 h-4" />
                </div>
                Pune, India
              </div>
            </div>
          </div>
          
          {/* Education Info */}
          <div id="education">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <GraduationCap className="text-primary w-6 h-6" /> Education
            </h3>
            
            <div className="glass-card p-6 border-l-4 border-l-primary">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* College Logo */}
                <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-white relative">
                  <Image src="/vit-logo.jfif" alt="VIT Pune Logo" fill className="object-contain p-1" />
                </div>
                
                {/* Details */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">Bachelor of Technology</h4>
                  <div className="text-primary font-medium mb-3">
                    Vishwakarma Institute of Technology
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-subtle mt-2">
                    <span className="bg-card px-3 py-1 rounded-full border border-primary/20 text-primary font-semibold">GPA: 7.89</span>
                    <span>Jan 2021 – Jun 2025</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Pune, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-subtle">
          <div>
            &copy; {new Date().getFullYear()} Paras Chopkar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
