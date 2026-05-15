"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, Code2, GraduationCap, Briefcase, User } from "lucide-react";

// --- Data ---
const skillsData = [
  "Next.js", "React", "Python", "Flask", "Node.js", "MongoDB", 
  "Tailwind CSS", "Figma", "AI/ML", "Supabase", "OpenCV", "YOLOv8"
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
  }
];

const experienceData = [
  {
    company: "Startrit Infratech Private Limited",
    role: "Software Intern",
    date: "Dec 2025 - Mar 2026",
    duties: [
      "Engineered and maintained robust full-stack web applications using modern JavaScript/TypeScript ecosystems.",
      "Architected scalable backend REST APIs and integrated real-time data flow mechanisms.",
      "Designed and implemented responsive, dynamic user interfaces, focusing on state management and smooth user experiences.",
      "Managed cloud database architectures and implemented secure, role-based user authentication flows.",
      "Collaborated within an agile environment to optimize application performance and maintain clean, modular codebases."
    ],
    skills: ["React.js", "Node.js", "Supabase", "TypeScript", "Socket.io", "REST APIs", "Express.js"]
  },
  {
    company: "The Electrical Vehicle Club",
    role: "Technical Lead",
    date: "Jan 2025 - Jul 2025",
    duties: [
      "Leading technical innovations and system architectures for student-led EV projects.",
      "Mentored junior members on modern web technologies."
    ]
  },
  {
    company: "The Electrical Vehicle Club",
    role: "Graphic Design Co-Lead",
    date: "Mar 2024 - Dec 2024",
    duties: [
      "Managed visual identity and digital assets for club events and branding.",
      "Designed promotional materials using Canva & Figma."
    ]
  }
];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
};

// --- Components ---

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-slate-300 font-sans overflow-hidden selection:bg-violet-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Glowing Orbs */}
        <motion.div 
          style={{ y }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[120px]"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex flex-col items-center text-center mb-32"
        >
          <motion.div variants={fadeUp} className="relative mb-8 group">
            <div className="absolute inset-0 rounded-full bg-violet-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-violet-500 to-indigo-600 relative z-10">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] overflow-hidden border-2 border-transparent">
                <img 
                  src="/photo.png" 
                  alt="Arush Nandakumar Menon" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-violet-400">
              Arush Nandakumar Menon
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-violet-300/80 font-medium tracking-wide font-mono uppercase text-sm">
            Full-Stack Developer · AI Enthusiast · CS Student
          </motion.p>
        </motion.section>

        {/* About Card */}
        <ScrollSection className="mb-32">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[24px] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-violet-400" />
                <h2 className="text-2xl font-bold text-white">About Me</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a passionate computer science student at VIT Bhopal focused on building effective and creative technology solutions. My goal is to use my skills in software development and AI to help build reliable and innovative applications for the future. I love bridging the gap between elegant design and robust backend architecture.
              </p>
            </div>
          </div>
        </ScrollSection>

        {/* Skills */}
        <ScrollSection className="mb-32">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Code2 className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-bold text-white text-center">Technical Arsenal</h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
          >
            {skillsData.map((skill) => (
              <motion.div
                key={skill}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-200 font-mono text-sm shadow-[0_0_15px_rgba(124,58,237,0)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </ScrollSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Education Timeline */}
          <ScrollSection>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="w-6 h-6 text-violet-400" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-12">
              {educationData.map((item, i) => (
                <TimelineItem key={i} data={item} />
              ))}
            </div>
          </ScrollSection>

          {/* Experience Timeline */}
          <ScrollSection>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-6 h-6 text-violet-400" />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>
            <div className="relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-12">
              {experienceData.map((item, i) => (
                <TimelineItem key={i} data={item} isJob />
              ))}
            </div>
          </ScrollSection>
        </div>

        {/* CTA Footer */}
        <ScrollSection>
          <div className="text-center bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build something great together.</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Always open to discussing exciting projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex justify-center gap-6">
              <SocialLink href="mailto:arushn.2005@gmail.com" icon={<Mail />} label="Email" />
              <SocialLink href="https://github.com/arushn47" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/arushn47" icon={<Linkedin />} label="LinkedIn" />
            </div>
          </div>
        </ScrollSection>

      </div>
    </div>
  );
}

// --- Helper Components ---

function ScrollSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function TimelineItem({ data, isJob }) {
  return (
    <div className="relative pl-8 md:pl-10 group">
      {/* Node */}
      <div className="absolute w-4 h-4 bg-[#0a0a0f] border-2 border-violet-500 rounded-full -left-[9px] top-1.5 group-hover:bg-violet-500 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] transition-all duration-300"></div>
      
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
          {isJob ? data.role : data.school}
        </h3>
        <span className="text-sm font-mono text-violet-400/80 whitespace-nowrap">
          {data.date}
        </span>
      </div>
      
      <p className="text-slate-300 font-medium mb-3">
        {isJob ? data.company : data.degree}
      </p>
      
      {isJob ? (
        <>
          <ul className="space-y-2 text-slate-400 text-sm leading-relaxed list-none">
            {data.duties.map((duty, i) => (
              <li key={i} className="relative pl-4">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-white/20"></span>
                {duty}
              </li>
            ))}
          </ul>
          {data.skills && (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill} className="font-mono rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-[3px] text-[11px] font-bold text-white/75">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-slate-400 text-sm leading-relaxed">
          {data.details}
        </p>
      )}
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/50 overflow-hidden transition-colors"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <span className="relative z-10">{icon}</span>
    </a>
  );
}
