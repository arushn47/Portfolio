"use client";

import Link from "next/link";
import { motion, useMotionValue, animate, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

const ProjectSection = ({ title, description, path, gradient, snapClass, onInView }) => {
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        animate(x, e.clientX, { duration: 0.2, ease: "linear" });
        animate(y, e.clientY, { duration: 0.2, ease: "linear" });
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [x, y, isMobile]);

  const titleWords = title.split(" ");
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={path.replace("/", "")}
      ref={sectionRef}
      className={`relative flex h-screen w-full items-center overflow-hidden ${snapClass}`}
      initial="hidden"
      whileInView="visible"
      onViewportEnter={() => onInView(path)}
      viewport={{ once: false, amount: 0.6 }}
    >
      {/* Parallax background */}
      <motion.div style={{ y: parallaxY }} className={`absolute inset-[-20%] z-0 ${gradient} animate-gradient-move`} />

      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: isMobile
            ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 40%)"
            : "transparent",
          maskImage: isMobile ? "none" : useMotionTemplate`radial-gradient(300px at ${x}px ${y}px, white, transparent)`,
          WebkitMaskImage: isMobile ? "none" : useMotionTemplate`radial-gradient(300px at ${x}px ${y}px, white, transparent)`
        }}
      />
      <div className="absolute inset-0 z-20 bg-black/60" />

      {/* Centered Content */}
      <div className="relative z-30 w-full h-full">
        <div className="w-full h-screen flex flex-col justify-center items-center backdrop-blur-sm bg-black/20">
          <motion.h2
            variants={containerVariants}
            className="text-5xl font-extrabold tracking-tighter text-white md:text-7xl mb-4 text-center"
          >
            {titleWords.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            variants={wordVariants}
            className="text-lg text-gray-300 mb-12 text-center max-w-2xl"
          >
            {description}
          </motion.p>
          <motion.div
            variants={wordVariants}
            className="w-full flex justify-center"
          >
            <Link
              href={path}
              aria-label={`View ${title} projects`}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/30 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:scale-105"
            >
              <span className="absolute h-0 w-0 rounded-full bg-white/20 transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">View Projects</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const SideNav = ({ sections, activeSection }) => (
  <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 md:right-8">
    <ul className="flex flex-col gap-4">
      {sections.map((section) => (
        <li key={`${section.path}-nav`}>
          <a href={`#${section.path.replace("/", "")}`} aria-label={`Go to ${section.title} section`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section.path ? "bg-white scale-150" : "bg-white/50 hover:bg-white"}`}></div>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState("");
  const projectSections = [
    {
      title: "AI & Machine Learning",
      description: "Exploring machine learning, computer vision, and the integration of intelligent systems into real-world applications.",
      path: "/projects/ai-ml",
      gradient: "bg-gradient-to-br from-gray-900 via-indigo-950 to-slate-900",
    },
    {
      title: "Full-Stack Applications",
      description: "Building complete, end-to-end solutions with modern frontend frameworks and robust backend services.",
      path: "/projects/fullstack",
      gradient: "bg-gradient-to-br from-slate-900 via-emerald-950 to-gray-900",
    },
    {
      title: "Collaborations",
      description: "Projects built with a team, showcasing synergy, communication, and the power of collective development.",
      path: "/projects/collabs",
      gradient: "bg-gradient-to-br from-zinc-900 via-rose-950 to-neutral-900",
    },
    {
      title: "Hackathon Projects",
      description: "Rapid prototypes and innovative solutions built under pressure, demonstrating creativity and fast-paced execution.",
      path: "/projects/hackathons",
      gradient: "bg-gradient-to-br from-stone-900 via-amber-950 to-gray-900",
    },
    {
      title: "Foundational Projects",
      description: "Core web development projects focusing on pixel-perfect UI/UX, animations, and responsive design.",
      path: "/projects/basic",
      gradient: "bg-gradient-to-br from-neutral-900 via-sky-950 to-slate-900",
    },
    {
      title: "UI/UX Designs",
      description: "Crafting intuitive and visually compelling user experiences, from wireframes to high-fidelity mockups.",
      path: "/projects/ui",
      gradient: "bg-gradient-to-br from-gray-900 via-violet-950 to-zinc-900",
    },
  ];

  return (
    <>
      <SideNav sections={projectSections} activeSection={activeSection} />
      <main className="h-screen w-screen snap-y snap-mandatory overflow-y-auto font-inter">
        {/* Welcome Section */}
        <section
          className="relative flex h-screen w-full flex-col justify-center snap-start items-center"
          onMouseEnter={() => setActiveSection("")}
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-950/50"></div>
          <div className="relative z-10 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-extrabold tracking-tighter text-white md:text-8xl mb-10 text-center"
            >
              My Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-gray-400 mb-7 text-center"
            >
              Scroll to explore my projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full flex justify-center"
            >
              <span className="inline-block animate-bounce text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
              </span>
            </motion.div>
          </div>
        </section>

        {/* Project Sections */}
        {projectSections.map((section, index) => (
          <ProjectSection
            key={section.path}
            {...section}
            onInView={setActiveSection}
            snapClass={index === projectSections.length - 1 ? "snap-end" : "snap-start"}
          />
        ))}
      </main>
    </>
  );
}