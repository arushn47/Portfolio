"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const experienceData = [
  {
    company: "The Electrical Vehicle Club",
    role: "Technical Lead",
    date: "Jan 2025 - Jul 2025",
    duties: ["Led web development projects.", "Mentored junior members on new technologies.", "Promoted teamwork and collaboration."]
  },
  {
    company: "The Electrical Vehicle Club",
    role: "Graphic Design Co-Lead",
    date: "Mar 2024 - Dec 2024",
    duties: ["Managed team responsibilities for design tasks.", "Designed promotional materials using Canva & Figma.", "Ensured brand consistency across all visuals."]
  }
];
const educationData = [
    {
        school: "VIT Bhopal University",
        degree: "B.Tech in Computer Science & Engineering",
        date: "2023 - Present",
        details: "Current GPA: 8.03/10."
    },
    {
        school: "Sri Chaitanya Techno School, Seshadripuram",
        degree: "Senior Secondary (XII)",
        date: "2023",
        details: "Graduated with 87% in the PCMC stream."
    },
    {
        school: "Sri Chaitanya Techno School",
        degree: "Senior Secondary (XI)",
        date: "2021",
        details: "Graduated with 77.4%."
    }
];


// --- Main Page Component ---
export default function ElitePortfolioPage() {
  return (
    <div className="bg-[#02040a] text-slate-300 font-sans antialiased overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-violet-900/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

// --- Section Components with Animation ---
const Section = ({ children, className = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-16 sm:py-20 border-b border-slate-800/50 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// --- Header ---
const Header = () => (
  <header className="py-20 sm:py-24 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400"
    >
      <span className="text-shadow-neon">Arush Nandakumar Menon</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-violet-400 tracking-wider"
    >
      Computer Science Student | AI Enthusiast
    </motion.p>
    <style jsx>{`
      .text-shadow-neon {
        text-shadow: 0 0 2px #a78bfa, 0 0 5px #a78bfa, 0 0 10px #4f46e5;
      }
    `}</style>
  </header>
);

// --- About Section (Full Width) ---
const AboutSection = () => (
  <Section className="border-t">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:px-30 items-center">
      <motion.div 
        className="md:col-span-1 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-slate-800 border-2 border-violet-500 p-1 shadow-[0_0_25px_rgba(79,70,229,0.7)]">
          <img 
            src="/photo.png" 
            alt="Arush Nandakumar Menon"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <div className="md:col-span-2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
        <p className="text-slate-400 leading-relaxed text-lg">
          I'm a passionate computer science student focused on building effective and creative technology solutions. My goal is to use my skills in software development and AI to help build reliable and innovative applications for the future.
        </p>
      </div>
    </div>
  </Section>
);


// --- Education Section (Constrained Width) ---
const EducationSection = () => (
    <Section>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-100 mb-16">Education</h2>
        {/* UPDATED: Re-added max-w-3xl and mx-auto for a centered, constrained layout */}
        <div className="space-y-12 max-w-3xl mx-auto">
            {educationData.map((edu, index) => (
                <motion.div
                    key={edu.school}
                    className="group relative grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-2 pl-6"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, transition: { delay: index * 0.2 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-violet-500 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>
                    <p className="sm:col-span-3 text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">{edu.date}</p>
                    <div className="sm:col-span-9">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-300">{edu.school}</h3>
                        <p className="text-base font-medium text-slate-400">{edu.degree}</p>
                        <p className="mt-2 text-slate-400">{edu.details}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

// --- Experience Section (Constrained Width) ---
const ExperienceSection = () => (
    <Section>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-100 mb-16">Experience</h2>
        {/* UPDATED: Re-added max-w-3xl and mx-auto for a centered, constrained layout */}
        <div className="space-y-12 max-w-3xl mx-auto">
            {experienceData.map((job, index) => (
                <motion.div
                    key={job.role}
                    className="group relative grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-2 pl-6"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, transition: { delay: index * 0.2 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-violet-500 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>
                    <p className="sm:col-span-3 text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">{job.date}</p>
                    <div className="sm:col-span-9">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-300">{job.role}</h3>
                        <p className="text-base font-medium text-slate-400">{job.company}</p>
                        <ul className="mt-3 list-disc list-inside space-y-2 text-slate-400">
                            {job.duties.map((duty, i) => <li key={i}>{duty}</li>)}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);


// --- Footer ---
const Footer = () => (
  <footer className="text-center py-12 border-t border-slate-800/50 my-16">
    <div className="flex justify-center gap-6 mb-4">
      <a href="mailto:arushn.2005@gmail.com" className="text-slate-500 hover:text-violet-400 transition-colors"><Mail size={24} /></a>
      <a href="https://www.linkedin.com/in/arushn47" target="_blank" className="text-slate-500 hover:text-violet-400 transition-colors"><Linkedin size={24} /></a>
      <a href="https://github.com/arushn47" target="_blank" className="text-slate-500 hover:text-violet-400 transition-colors"><Github size={24} /></a>
    </div>
    <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Arush Nandakumar Menon. All Rights Reserved.</p>
    <p className="text-slate-700 text-xs mt-1">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
  </footer>
);
